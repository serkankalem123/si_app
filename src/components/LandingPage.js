"use client"
import "../../styles/LandingPage.css" // Fixed CSS import path

 // Fixed image import - go up to src/, then into assets/

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
        <h1 className="landing-title">Get your place to stay & enjoy</h1>
        <p className="landing-subtext">
          Sagittis montes ultrices ipsum tincidunt cursus facilisis neque sem. Proin elit tellus arcu et.
        </p>

        {/* Centered logo under text */}
        <img src={logo || "/placeholder.svg"} alt="Logo" className="landing-logo-center" />
      </div>

      {/* Bottom button */}
      <div className="landing-footer">
        <button className="landing-start-btn" onClick={onGetStarted}>
          Get started →
        </button>
      </div>
    </div>
  )
}

export default LandingPage
