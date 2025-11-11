"use client";
import "../../styles/LandingPage.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/raleway/400.css";

const logo = "/Cartoon.PNG";

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
        <h1
          className="landing-title"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Experience the best of Staten Island — for less!
        </h1>
        
        <p
          className="landing-subtext"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 400,
            lineHeight: "1.6em",
            color: "black",
            maxWidth: "600px",
            margin: "0 auto 32px auto",
          }}
        >
          Join HLSI X to get 10% off at top local restaurants, shops and services for just $5 per month.
        </p>
        
        {/* Centered logo under text */}
        <img
          src={logo || "/placeholder.svg"}
          alt="Logo"
          className="landing-logo-center"
        />
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
  );
}

export default LandingPage;