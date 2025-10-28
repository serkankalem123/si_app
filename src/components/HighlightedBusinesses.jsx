// components/HighlightedBusinesses.jsx
"use client"

import BusinessCard from "./BusinessCard"
import SearchBar from "./SearchBar"
import FilterChips from "./FilterChips"

export default function HighlightedBusinesses({
    businesses,
    displayName,
    searchTerm,
    setSearchTerm,
    setSelectedBusiness,
}) {
    return (
        <div>
            {/* Header */}
            <div
                style={{
                    background: "#1e3a8a",
                    padding: "24px 20px",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    color: "white",
                }}
            >
                <h2 style={{ margin: 0 }}>Hello {displayName || "Guest"}</h2>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Filters */}
            <FilterChips />

            {/* Business List */}
            <div style={{ padding: "0 20px 20px" }}>
                {businesses.map((biz) => (
                    <BusinessCard
                        key={biz.id}
                        biz={biz}
                        onSelect={(b) => setSelectedBusiness(b)}
                    />
                ))}
            </div>
        </div>
    )
}
