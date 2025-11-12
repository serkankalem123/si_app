import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../src/supabaseClient";

export default function PaymentSuccess() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  useEffect(() => {
    const refreshSessionAndCheck = async () => {
      try {
        console.log(`🔄 Attempt ${retryCount + 1}/${MAX_RETRIES}`);

        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.refreshSession();

        if (sessionError) throw sessionError;

        const authPremium = session?.user?.user_metadata?.is_premium === true;

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("is_premium")
          .eq("id", session.user.id)
          .single();

        if (profileError) console.warn("⚠️ Profile check failed:", profileError);

        const profilePremium = profile?.is_premium === true;
        const isPremium = authPremium || profilePremium;

        if (isPremium) {
          console.log("🎉 PREMIUM STATUS CONFIRMED!");
          setIsRefreshing(false);
          setTimeout(() => router.push("/?showCard=true"), 2000);
        } else {
          console.log("⏳ Not premium yet, retrying...");
          if (retryCount < MAX_RETRIES) {
            setTimeout(() => setRetryCount((prev) => prev + 1), 3000);
          } else {
            console.log("⚠️ Max retries reached");
            setIsRefreshing(false);
            setTimeout(() => router.push("/?showCard=true"), 2000);
          }
        }
      } catch (error) {
        console.error("❌ Error:", error);
        setIsRefreshing(false);
        setTimeout(() => router.push("/"), 3000);
      }
    };

    refreshSessionAndCheck();
  }, [router, retryCount]);

  return (
    <>
      <style jsx>{`
        .payment-success-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .success-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          padding: 48px 32px;
          max-width: 420px;
          width: 100%;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gold-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
        }

        .icon-container {
          width: 100px;
          height: 100px;
          margin: 0 auto 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          transition: all 0.3s ease;
        }

        .icon-processing {
          background: linear-gradient(135deg, #4ba3d9 0%, #357abd 100%);
          box-shadow: 0 8px 24px rgba(75, 163, 217, 0.4);
        }

        .icon-success {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.5);
        }

        .title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .description {
          font-size: 16px;
          color: #666;
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .progress-section {
          margin-bottom: 24px;
        }

        .progress-bar-container {
          width: 100%;
          height: 8px;
          background: #f0f0f0;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4ba3d9 0%, #FFD700 100%);
          border-radius: 12px;
          transition: width 0.5s ease;
        }

        .retry-text {
          font-size: 14px;
          color: #999;
          margin-bottom: 16px;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #4ba3d9;
          border-radius: 50%;
        }

        .success-checklist {
          text-align: left;
          margin-top: 24px;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #333;
        }

        .check-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .footer-text {
          margin-top: 32px;
          font-size: 14px;
          color: #999;
        }

        @media (max-width: 480px) {
          .success-card {
            padding: 36px 24px;
          }

          .icon-container {
            width: 80px;
            height: 80px;
            font-size: 40px;
          }

          .title {
            font-size: 24px;
          }

          .description {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="payment-success-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="success-card"
        >
          <div className="gold-accent" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className={`icon-container ${isRefreshing ? "icon-processing" : "icon-success"}`}
          >
            <motion.div
              animate={{
                rotate: isRefreshing ? 360 : 0,
              }}
              transition={{
                repeat: isRefreshing ? Infinity : 0,
                duration: 2,
                ease: "linear",
              }}
            >
              {isRefreshing ? "⚡" : "✓"}
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="title"
          >
            {isRefreshing ? "Processing..." : "Payment Successful"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="description"
          >
            {isRefreshing ? "Activating your premium features" : "Your premium access is ready"}
          </motion.p>

          {isRefreshing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="progress-section"
            >
              <div className="progress-bar-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(retryCount / MAX_RETRIES) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {retryCount > 0 && (
                <p className="retry-text">
                  Step {retryCount} of {MAX_RETRIES}
                </p>
              )}

              <div className="loading-dots">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="dot"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {!isRefreshing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="success-checklist"
            >
              {["Payment confirmed", "Premium activated", "Redirecting..."].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="checklist-item"
                >
                  <div className="check-icon">✓</div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="footer-text"
          >
            Thank you for your purchase
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}