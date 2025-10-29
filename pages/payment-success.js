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
        console.log('🔄 Refreshing session... Attempt:', retryCount + 1);
        
        // Refresh the session to get updated user metadata
        const { data: { session }, error } = await supabase.auth.refreshSession();
        
        if (error) {
          console.error('Error refreshing session:', error);
          throw error;
        }

        console.log('Session refreshed:', session?.user?.user_metadata);
        
        // Check if premium status is updated
        const isPremium = session?.user?.user_metadata?.is_premium;
        
        if (isPremium) {
          console.log('✅ Premium status confirmed!');
          setIsRefreshing(false);
          
          // Redirect after 2 seconds with showCard parameter
          setTimeout(() => {
            router.push("/?showCard=true");
          }, 2000);
        } else {
          console.log('⏳ Premium status not yet updated, retrying...');
          
          // If not premium yet and haven't exceeded retries, try again
          if (retryCount < MAX_RETRIES) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
            }, 2000);
          } else {
            console.log('⚠️ Max retries reached, redirecting anyway');
            setIsRefreshing(false);
            setTimeout(() => {
              router.push("/?showCard=true");
            }, 2000);
          }
        }
      } catch (error) {
        console.error('Error in refresh process:', error);
        setIsRefreshing(false);
        
        // Redirect anyway after error
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