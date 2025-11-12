// /pages/payment-success.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
      
      // Refresh auth session
      const { data: { session }, error: sessionError } = 
        await supabase.auth.refreshSession();
      
      if (sessionError) throw sessionError;

      const authPremium = session?.user?.user_metadata?.is_premium === true;
      console.log('📋 Auth premium:', authPremium);

      // ✅ NEW: Also check profile table
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', session.user.id)
        .single();

      if (profileError) {
        console.warn('⚠️ Profile check failed:', profileError);
      }

      const profilePremium = profile?.is_premium === true;
      console.log('💾 Profile premium:', profilePremium);
      
      const isPremium = authPremium || profilePremium;
      
      if (isPremium) {
        console.log('═══════════════════════════════════════');
        console.log('🎉 PREMIUM STATUS CONFIRMED!');
        console.log('═══════════════════════════════════════');
        setIsRefreshing(false);
        
        setTimeout(() => {
          router.push("/?showCard=true");
        }, 2000);
      } else {
        console.log('⏳ Not premium yet, retrying...');
        
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 3000);
        } else {
          console.log('⚠️ Max retries reached');
          setIsRefreshing(false);
          setTimeout(() => {
            router.push("/?showCard=true");
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
    <div style={{ 
      textAlign: "center", 
      padding: 40,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "64px", marginBottom: "20px" }}>
        {isRefreshing ? "🔄" : "✅"}
      </div>
      <h1>Payment Successful!</h1>
      <p>
        {isRefreshing 
          ? "Activating your premium features..." 
          : "Premium features unlocked! Redirecting..."
        }
      </p>
      {isRefreshing && retryCount > 0 && (
        <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
          Checking status... ({retryCount}/{MAX_RETRIES})
        </p>
      )}
    </div>
  );
}