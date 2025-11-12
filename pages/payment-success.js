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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Gold accent bar */}
          <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
          
          <div className="p-8 sm:p-12">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 200, 
                damping: 15 
              }}
              className="flex justify-center mb-6"
            >
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: isRefreshing ? '#4ba3d9' : '#FFD700',
                  boxShadow: isRefreshing 
                    ? '0 10px 40px rgba(75, 163, 217, 0.3)' 
                    : '0 10px 40px rgba(255, 215, 0, 0.4)'
                }}
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
                  className="text-4xl sm:text-5xl"
                >
                  {isRefreshing ? "⚡" : "✓"}
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center"
            >
              {isRefreshing ? "Processing..." : "Payment Successful"}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-center mb-8 text-sm sm:text-base"
            >
              {isRefreshing
                ? "Activating your premium features"
                : "Your premium access is ready"}
            </motion.p>

            {/* Loading Progress */}
            {isRefreshing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ 
                      background: 'linear-gradient(90deg, #4ba3d9 0%, #FFD700 100%)'
                    }}
                    initial={{ width: "0%" }}
                    animate={{ 
                      width: `${(retryCount / MAX_RETRIES) * 100}%` 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Retry count */}
                {retryCount > 0 && (
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    Step {retryCount} of {MAX_RETRIES}
                  </p>
                )}

                {/* Loading dots */}
                <div className="flex justify-center gap-2 pt-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#4ba3d9' }}
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

            {/* Success message */}
            {!isRefreshing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                {/* Success checkmarks */}
                <div className="space-y-3">
                  {["Payment confirmed", "Premium activated", "Redirecting..."].map(
                    (text, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: '#FFD700' }}
                        >
                          ✓
                        </div>
                        <span>{text}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 text-sm text-gray-500"
        >
          Thank you for your purchase
        </motion.p>
      </motion.div>
    </div>
  );
}