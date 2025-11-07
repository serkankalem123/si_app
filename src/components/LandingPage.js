"use client"
import "../../styles/LandingPage.css" // Fixed CSS import path

const logo = "/Cartoon.PNG" // center logo

function LandingPage({ onLoginClick, onGetStarted }) {
  return (
    <div className="landing-container">
      {/* Background image */}
      <img src="/bridge.jpg" alt="Bridge" className="landing-bg" />

      {/* Light blue overlay */}
      <div className="landing-overlay"></div>

      {/* Top bar with login */}
      <div className="landing-topbar">
        <button className="landing-login-btn" onClick={onLoginClick}>
          Login
        </button>
      </div>

      {/* Centered text */}
      <div className="landing-content">
        <h1 className="landing-title">Experience the best of Staten Island — for less!</h1>
        <p className="landing-subtext">
          Join HLSI X to get 10% off at top local restaurants, shops and services for just $5 per month. 
        </p>

        {/* Centered logo under text */}
        <img src={logo || "/placeholder.svg"} alt="Logo" className="landing-logo-center" />
      </div>

      {/* Bottom button and tagline */}
      <div className="landing-footer">
        <button className="landing-start-btn" onClick={onGetStarted}>
          Get started →
        </button>
        <p className="landing-tagline">
          <em>Because supporting local should feel rewarding.</em>
        </p>
      </div>
    </div>
  )
}

export default LandingPage
