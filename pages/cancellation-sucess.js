// /pages/cancellation-success.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../src/supabaseClient";

export default function CancellationSuccess() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  useEffect(() => {
    const refreshSessionAndCheck = async () => {
      try {
        console.log(`🔄 Checking cancellation status - Attempt ${retryCount + 1}/${MAX_RETRIES}`);
        
        // Refresh auth session
        const { data: { session }, error: sessionError } = 
          await supabase.auth.refreshSession();
        
        if (sessionError) throw sessionError;
        
        const authStatus = session?.user?.user_metadata?.subscription_status;
        console.log('📋 Auth subscription status:', authStatus);
        
        // Check profile table
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('subscription_status, subscription_cancel_at')
          .eq('id', session.user.id)
          .single();
        
        if (profileError) {
          console.warn('⚠️ Profile check failed:', profileError);
        }
        
        const profileStatus = profile?.subscription_status;
        console.log('💾 Profile subscription status:', profileStatus);
        
        const isCanceling = authStatus === 'canceling' || profileStatus === 'canceling';
        
        if (isCanceling) {
          console.log('═══════════════════════════════════════');
          console.log('✅ CANCELLATION CONFIRMED!');
          console.log('═══════════════════════════════════════');
          setIsRefreshing(false);
          setTimeout(() => {
            router.push("/?nav=profile");
          }, 2000);
        } else {
          console.log('⏳ Status not updated yet, retrying...');
          if (retryCount < MAX_RETRIES) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
            }, 3000);
          } else {
            console.log('⚠️ Max retries reached');
            setIsRefreshing(false);
            setTimeout(() => {
              router.push("/?nav=profile");
            }, 2000);
          }
        }
      } catch (error) {
        console.error('❌ Error:', error);
        setIsRefreshing(false);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    };
    
    refreshSessionAndCheck();
  }, [router, retryCount]);

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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 165, 0, 0.1);
          border-radius: 24px;
          padding: 60px 80px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .icon-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFA500 0%, #FF6B6B 100%);
          box-shadow: 0 4px 20px rgba(255, 165, 0, 0.3);
          animation: ${isRefreshing ? 'spin 2s linear infinite' : 'scaleIn 0.5s ease-out'};
        }

        .icon {
          font-size: 48px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        h1 {
          font-size: 32px;
          font-weight: 600;
          background: linear-gradient(135deg, #FFA500 0%, #FF6B6B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .message {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .info-box {
          margin-top: 24px;
          padding: 16px;
          background: rgba(255, 243, 205, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.2);
          border-radius: 12px;
          color: rgba(255, 193, 7, 0.9);
          font-size: 14px;
          line-height: 1.5;
        }

        .status {
          margin-top: 20px;
          padding: 12px 24px;
          background: rgba(255, 165, 0, 0.1);
          border: 1px solid rgba(255, 165, 0, 0.2);
          border-radius: 12px;
          color: #FFA500;
          font-size: 14px;
          font-weight: 500;
        }

        .progress-dots {
          display: inline-flex;
          gap: 4px;
          margin-left: 8px;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: #FFA500;
          border-radius: 50%;
          animation: pulse 1.4s ease-in-out infinite;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @media (max-width: 600px) {
          .card {
            padding: 40px 30px;
          }
          
          h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="container">
        <div className="card">
          <div className="icon-wrapper">
            <div className="icon">
              {isRefreshing ? "⏳" : "✓"}
            </div>
          </div>

          <h1>Subscription Canceled</h1>

          <p className="message">
            {isRefreshing 
              ? "Processing your cancellation" 
              : "Your cancellation has been confirmed. Redirecting..."
            }
            {isRefreshing && (
              <span className="progress-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            )}
          </p>

          {!isRefreshing && (
            <div className="info-box">
              ℹ️ You'll retain access to premium features until the end of your current billing period.
            </div>
          )}

          {isRefreshing && retryCount > 0 && (
            <div className="status">
              Verifying cancellation ({retryCount}/{MAX_RETRIES})
            </div>
          )}
        </div>
      </div>
    </>
  );
}