// components/SearchBar.jsx
"use client"

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div
            style={{
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                background: "white",
                borderRadius: 12,
                padding: "10px 14px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
        >
            <span style={{ color: "#555", marginRight: 8 }}>🔍</span>
            <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    fontSize: 15,
                }}
            />
        </div>
    )
}
