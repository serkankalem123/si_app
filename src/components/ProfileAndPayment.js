// ProfileAndPayment.js
import React, { useState } from "react"

function ProfileAndPayment({
  session,
  displayName,
  editingName,
  setEditingName,
  onSaveName,
  isSaving,
  saveStatus,
  onLogout,
  profile,
}) {
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);

  const isPremium = profile?.is_premium === true || session?.user?.user_metadata?.is_premium === true;
  const subscriptionStatus = profile?.subscription_status || session?.user?.user_metadata?.subscription_status;
  const cancelAt = profile?.subscription_cancel_at || session?.user?.user_metadata?.subscription_cancel_at;
  const stripeCustomerId = profile?.stripe_customer_id || session?.user?.user_metadata?.stripe_customer_id;

  // ✅ Check if subscription is ending soon
  const isCanceling = subscriptionStatus === 'canceling';

  const handleUpgrade = async () => {
    if (!session?.user?.id || !session?.user?.email) {
      alert("Please sign in to upgrade to premium.")
      return
    }

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session.user.id,
          email: session.user.email,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to create checkout session")
      }

      const data = await res.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL received")
      }
    } catch (error) {
      console.error("Error upgrading:", error)
      alert("Error upgrading to premium. Please try again.")
    }
  }

  // ✅ NEW: Open Stripe Customer Portal
  const handleManageSubscription = async () => {
    if (!stripeCustomerId) {
      alert("No customer ID found. Please contact support.");
      return;
    }

    setIsLoadingPortal(true);

    try {
      const res = await fetch("/api/create-portal-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: stripeCustomerId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to open portal");
      }

      // Redirect to Stripe Customer Portal
      window.location.href = data.url;

    } catch (error) {
      console.error("Error opening portal:", error);
      alert(error.message || "Failed to open subscription portal.");
      setIsLoadingPortal(false);
    }
  };

  return (
    <div className="profile-container" style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <div className="profile-header">
        <h1 className="profile-title">Account Settings</h1>
      </div>

      {/* Display Name Section */}
      <div className="profile-section">
        <h3 className="section-title">Display Name</h3>
        <div className="display-name-input-group">
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            placeholder="Enter your display name"
            className="display-name-input"
          />
          <button
            onClick={onSaveName}
            disabled={isSaving}
            className="save-button"
          >
            {isSaving ? '...' : 'Save'}
          </button>
        </div>
        {saveStatus === "success" && (
          <div className="save-status success">
            <span>✓</span> Saved successfully
          </div>
        )}
        {saveStatus === "error" && (
          <div className="save-status error">
            <span>✗</span> Failed to save
          </div>
        )}
      </div>

      {/* Subscription Section */}
      <div className="profile-section">
        <h3 className="section-title">Your Highlighting SI Epxerience Membership</h3>
        <div className="subscription-card">
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
            <span className="subscription-plan" style={{ fontSize: '16px', fontWeight: '600' }}>
              {isPremium ? "Premium" : "Free Trial"}
            </span>
          </div>
          <div style={{ marginBottom: '12px', textAlign: 'center' }}>
            <span className="subscription-label">Manage your plan and billing below.</span>
          </div>

          {/* Cancellation Warning */}
          {isCanceling && cancelAt && (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              padding: '12px',
              marginTop: '12px',
              marginBottom: '12px',
            }}>
              <div style={{ fontWeight: '600', color: '#856404', marginBottom: '4px' }}>
                ⚠️ Subscription Ending
              </div>
              <div style={{ fontSize: '14px', color: '#856404' }}>
                Your premium access will end on {new Date(cancelAt).toLocaleDateString()} at{' '}
                {new Date(cancelAt).toLocaleTimeString()}
              </div>
            </div>
          )}

          <div className="subscription-description">
            {isPremium 
              ? isCanceling
                ? "You have access to premium features until the end of your billing period"
                : "You have access to all premium features"
              : ""
            }
          </div>

          {/* Upgrade Button (Free users) */}
          {!isPremium && (
            <button
              onClick={handleUpgrade}
              className="upgrade-button"
            >
              Upgrade to Full Membership
            </button>
          )}

          {/* Manage Subscription Button (Premium users) */}
          {isPremium && (
            <button
              onClick={handleManageSubscription}
              disabled={isLoadingPortal}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#1e3a8a',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: isLoadingPortal ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                marginTop: '12px',
                opacity: isLoadingPortal ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoadingPortal) {
                  e.target.style.background = '#1d4ed8';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoadingPortal) {
                  e.target.style.background = '#1e3a8a';
                }
              }}
            >
              {isLoadingPortal ? 'Opening...' : 'Manage Subscription'}
            </button>
          )}
        </div>

        {/* Premium Features Preview */}
        {!isPremium && (
          <div className="premium-preview">
            <h4 className="premium-title">What you Get as a Member</h4>
            <ul className="premium-features">
              <li><span className="checkmark">✓</span> 10% off all participating SI Businesses</li>
              <li><span className="checkmark">✓</span> Access to new perks added each month.</li>
              <li><span className="checkmark">✓</span> Members only updates and event invites.</li>
              <p className="premium-note">
      Your $5 per month membership keeps Staten Island saving local and supporting local.
    </p>
             
            </ul>
          </div>
        )}
      </div>

      {/* Sign Out Button */}
      <button 
        onClick={() => {
          console.log('🔘 Sign out button clicked');
          if (onLogout) {
            onLogout();
          } else {
            console.error('❌ onLogout is undefined!');
          }
        }}
        className="signout-button"
      >
        Sign Out
      </button>
    </div>
  )
}

export default ProfileAndPayment