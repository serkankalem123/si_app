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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full border border-indigo-100"
      >
        <motion.div
          animate={{
            rotate: isRefreshing ? 360 : 0,
          }}
          transition={{
            repeat: isRefreshing ? Infinity : 0,
            duration: 1,
            ease: "linear",
          }}
          className="text-6xl mb-4"
        >
          {isRefreshing ? "🔄" : "✅"}
        </motion.div>

        <h1 className="text-3xl font-semibold mb-2 text-gray-800">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-4">
          {isRefreshing
            ? "Activating your premium features..."
            : "Premium features unlocked! Redirecting..."}
        </p>

        {isRefreshing && retryCount > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            Checking status... ({retryCount}/{MAX_RETRIES})
          </p>
        )}

        {!isRefreshing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-indigo-600 font-medium"
          >
            Redirecting to your dashboard...
          </motion.div>
        )}
      </motion.div>

    
    </div>
  );
}
