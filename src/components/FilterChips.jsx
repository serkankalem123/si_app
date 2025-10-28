// components/FilterChips.jsx
"use client"

const defaultChips = ["Sort", "Cuisines", "Ratings"]

export default function FilterChips({ chips = defaultChips }) {
    return (
        <div
            style={{
                display: "flex",
                gap: 10,
                padding: "16px 20px",
                flexWrap: "wrap",
            }}
        >
            {chips.map((chip) => (
                <button
                    key={chip}
                    style={{
                        border: "1px solid #ccc",
                        padding: "8px 14px",
                        borderRadius: 20,
                        background: "white",
                        fontSize: 14,
                        fontWeight: 500,
                    }}
                >
                    {chip} ⌄
                </button>
            ))}
        </div>
    )
}
