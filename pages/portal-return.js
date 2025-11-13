// /pages/portal-return.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../src/supabaseClient";

export default function PortalReturn() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let checkCount = 0;
    const MAX_CHECKS = 10;
    
    const checkSubscriptionStatus = async () => {
      try {
        checkCount++;
        console.log(`🔍 Checking subscription status (attempt ${checkCount}/${MAX_CHECKS})...`);
        
        // Get current session
        const { data: { session }, error: sessionError } = 
          await supabase.auth.getSession();
        
        if (sessionError || !session) {
          console.error('No session found');
          router.push('/');
          return;
        }

        // Refresh to get latest data
        await supabase.auth.refreshSession();

        // Check profile for subscription status
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('subscription_status, is_premium, subscription_cancel_at')
          .eq('id', session.user.id)
          .maybeSingle();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Profile check error:', profileError);
          router.push('/?nav=profile');
          return;
        }

        console.log('📊 Current status:', {
          subscription_status: profile?.subscription_status,
          is_premium: profile?.is_premium,
          cancel_at: profile?.subscription_cancel_at
        });

        // Check if cancellation was processed
        const isCanceling = profile?.subscription_status === 'canceling';
        const isCanceled = profile?.subscription_status === 'canceled';
        const lostPremium = profile?.is_premium === false;

        // If we detect a change, redirect to success page
        if (isCanceling || isCanceled || lostPremium) {
          console.log('✅ Cancellation detected! Redirecting...');
          setChecking(false);
          router.push('/cancellation-success');
          return;
        }

        // If we haven't detected a change yet and haven't maxed out checks, try again
        if (checkCount < MAX_CHECKS) {
          setTimeout(() => checkSubscriptionStatus(), 2000);
        } else {
          // Max checks reached, just go to profile
          console.log('⚠️ Max checks reached, redirecting to profile');
          setChecking(false);
          router.push('/?nav=profile');
        }

      } catch (error) {
        console.error('Error checking status:', error);
        setChecking(false);
        router.push('/?nav=profile');
      }
    };

    // Start checking immediately
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