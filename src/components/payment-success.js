// /pages/payment-success.js
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>✅ Payment Successful!</h1>
      <p>Premium features unlocked. Redirecting...</p>
    </div>
  );
}
