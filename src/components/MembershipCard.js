// src/MembershipCard.jsx
import { useState } from "react"

import '../../styles/App.css';




const logo = "/Cartoon.PNG"

const MembershipCard = ({ name }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`${expanded ? "expanded-card" : "shake-animation glisten"}`}
      style={{
        background: "linear-gradient(145deg, #e5e7eb, #d1d5db)",
        borderRadius: 16,
        width: expanded ? "90vw" : "91%",
        maxWidth: expanded ? "1000px" : "420px",
        aspectRatio: expanded ? "2.2" : "1.6", // landscape vs portrait
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
        padding: "24px 16px",
        boxSizing: "border-box",
        minHeight: 260,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
    >
      {/* Close Button (only in expanded mode) */}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "transparent",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#333",
          }}
        >
          ✕
        </button>
      )}

      {/* Logo */}
      <img
        src={logo || "/placeholder.svg"}
        alt="Logo"
        style={{
          height: expanded ? 80 : 120, // smaller logo in landscape
          marginBottom: expanded ? 8 : 12,
        }}
      />

      {/* Title */}
      <h2
        style={{
          fontSize: expanded ? 18 : 20,
          fontWeight: 800,
          margin: 0,
          color: "#111",
          textAlign: "center",
        }}
      >
        THE HIGHLIGHTING SI
      </h2>
      <p
        style={{
          fontSize: expanded ? 12 : 14,
          letterSpacing: expanded ? 4 : 6,
          margin: "4px 0 14px",
          color: "#111",
          textAlign: "center",
        }}
      >
        EXPERIENCE
      </p>

      {/* Divider */}
      <div
        style={{
          width: "92%",
          height: 1,
          backgroundColor: "#444",
          margin: "0 auto 14px auto",
        }}
      ></div>

      {/* Name + Expiration */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "92%",
          fontSize: expanded ? 14 : 15,
          fontWeight: 700,
          color: "#111",
          margin: "0 auto 8px auto",
        }}
      >
        <span>{name || "Your Name"}</span>
        <span>EXP 09/30/26</span>
      </div>

      {/* Expand button (hidden in expanded mode) */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          style={{
            marginTop: 16,
            padding: "10px 18px",
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Expand
        </button>
      )}
    </div>
  )
}

export default MembershipCard

