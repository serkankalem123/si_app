"use client"
import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

export default function BusinessCard({ biz, onSelect, user }) {
    const [rating, setRating] = useState(biz.rating || 0)
    const [reviewCount, setReviewCount] = useState(biz.review_count || 0)
    const [hover, setHover] = useState(null)
    const [hasRated, setHasRated] = useState(false)

    useEffect(() => {
        setRating(biz.rating || 0)
        setReviewCount(biz.review_count || 0)
    }, [biz])

    const handleRate = async (value) => {
        if (!user) {
            alert("Please sign in to rate.")
            return
        }
        if (hasRated) {
            alert("You’ve already rated this business.")
            return
        }

        try {
            const { error: insertError } = await supabase
                .from("reviews")
                .insert({
                    business_id: biz.id,
                    user_id: user.id,
                    rating: value,
                })

            if (insertError) throw insertError

            const { data: reviews, error: fetchError } = await supabase
                .from("reviews")
                .select("rating")
                .eq("business_id", biz.id)

            if (fetchError) throw fetchError

            const totalRatings = reviews.length
            const avgRating =
                totalRatings > 0
                    ? reviews.reduce((acc, r) => acc + r.rating, 0) / totalRatings
                    : 0

            const { error: updateError } = await supabase
                .from("businesses")
                .update({
                    rating: avgRating.toFixed(1),
                    review_count: totalRatings,
                })
                .eq("id", biz.id)

            if (updateError) throw updateError

            setRating(avgRating)
            setReviewCount(totalRatings)
            setHasRated(true)
        } catch (err) {
            console.error("Error submitting review:", err)
            alert("Error submitting review.")
        }
    }

    return (
        <div
            onClick={() => onSelect(biz)}
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                background: "#fff",
                borderRadius: 12,
                marginBottom: 14,
                padding: 12,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                cursor: "pointer",
            }}
        >
            <img
                src={biz.logo_url || "/placeholder.svg"}
                alt={biz.name}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 8,
                    objectFit: "cover",
                }}
            />
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                    {biz.name}
                </div>
                {biz.description && (
                    <div style={{ fontSize: 13, color: "#555", marginBottom: 4 }}>
                        {biz.description}
                    </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(null)}
                            onClick={(e) => {
                                e.stopPropagation()
                                handleRate(star)
                            }}
                            style={{
                                color:
                                    (hover || rating) >= star ? "#f59e0b" : "#ccc",
                                fontSize: 18,
                                cursor: "pointer",
                            }}
                        >
                            ★
                        </span>
                    ))}
                    <span style={{ fontSize: 13, color: "#f59e0b", fontWeight: 500 }}>
                        {rating.toFixed(1)} ({reviewCount})
                    </span>
                </div>
            </div>
        </div>
    )
}
