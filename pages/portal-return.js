// /pages/portal-return.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../src/supabaseClient";

export default function PortalReturn() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        console.log('🔍 Checking what changed in portal...');
        
        // Get current session
        const { data: { session }, error: sessionError } = 
          await supabase.auth.getSession();
        
        if (sessionError || !session) {
          console.error('No session found');
          router.push('/');
          return;
        }

        // Wait a moment for webhook to process
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Refresh to get latest data
        await supabase.auth.refreshSession();

        // Check profile for subscription status
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('subscription_status, is_premium')
          .eq('id', session.user.id)
          .single();

        if (profileError) {
          console.error('Profile check error:', profileError);
          router.push('/?nav=profile');
          return;
        }

        console.log('📊 Current status:', profile.subscription_status);

        // If subscription is canceling, show cancellation success
        if (profile.subscription_status === 'canceling') {
          router.push('/cancellation-success');
        } 
        // If fully canceled
        else if (profile.subscription_status === 'canceled' || !profile.is_premium) {
          router.push('/?nav=profile');
        }
        // Otherwise just go back to profile
        else {
          router.push('/?nav=profile');
        }

      } catch (error) {
        console.error('Error checking status:', error);
        router.push('/?nav=profile');
      } finally {
        setChecking(false);
      }
    };

    checkSubscriptionStatus();
  }, [router]);

  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 40px 20px;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-top-color: #4BA3D9;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .message {
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container">
        <div className="spinner"></div>
        <p className="message">Processing your request...</p>
      </div>
    </>
  );
}