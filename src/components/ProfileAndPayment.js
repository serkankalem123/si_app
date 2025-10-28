// ProfileAndPayment.js
import React from "react"

function ProfileAndPayment({
  session, // ADD THIS - it was missing!
  email,
  displayName,
  editingName,
  setEditingName,
  onSaveName,
  isSaving,
  saveStatus,
  onLogout,
}) {
  // Check if user is premium from session metadata
  const isPremium = session?.user?.user_metadata?.is_premium === true
  const isFreeTrial = !isPremium

  const handleUpgrade = async () => {
    // Add safety check for session
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

  return (
    <div className="profile-container">
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
        <h3 className="section-title">Subscription & Payment</h3>
        <div className="subscription-card">
          <div className="subscription-header">
            <span className="subscription-label">Current Plan</span>
            <span className="subscription-plan">
              {isPremium ? "Premium" : "Free Trial"}
            </span>
          </div>
          <div className="subscription-description">
            {isPremium 
              ? "You have access to all premium features"
              : "Manage your subscription and billing information"
            }
          </div>
          {!isPremium && (
            <button
              onClick={handleUpgrade}
              className="upgrade-button"
            >
              Upgrade Plan
            </button>
          )}
        </div>

        {/* Premium Features Preview */}
        {isFreeTrial && (
          <div className="premium-preview">
            <h4 className="premium-title">Unlock Premium Features:</h4>
            <ul className="premium-features">
              <li><span className="checkmark">✓</span> Unlimited access to all tools</li>
              <li><span className="checkmark">✓</span> Priority support</li>
              <li><span className="checkmark">✓</span> Advanced analytics</li>
              <li><span className="checkmark">✓</span> Early access to new features</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sign Out Button */}
      <button onClick={onLogout} className="signout-button">
        Sign Out
      </button>
    </div>
  )
}

export default ProfileAndPayment