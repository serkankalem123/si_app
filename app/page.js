"use client"
import { useState, useEffect } from "react"
import { CompassFill, GeoAltFill, PersonFill } from "react-bootstrap-icons"
import { initializeApp, getApps, getApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import Image from "next/image"

const logo = "/Cartoon.PNG"

import "../styles/App.css"
import Auth from "../src/components/Auth"
import { supabase } from "../src/supabaseClient"
import MembershipCard from "../src/components/MembershipCard"
import BusinessForm from "../src/components/BusinessForm"
import BusinessProfile from "../src/components/BusinessProfile"
import LandingPage from "../src/components/LandingPage"
import StatenIslandMap from "../src/components/StatenIslandMap"
import ProfileAndPayment from "../src/components/ProfileAndPayment"

// Firebase configuration - REPLACE WITH YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyC5NjB_yv61XLqCOazv8WVDooBVDmvQWC8",
  authDomain: "si-app-be948.firebaseapp.com",
  projectId: "si-app-be948",
  storageBucket: "si-app-be948.firebasestorage.app",
  messagingSenderId: "959224695369",
  appId: "1:959224695369:web:96fd41e33c3c60b201cd98",
  measurementId: "G-GK9X2XXJ9P",
}

// OPTIMIZED IMAGE COMPONENT - LOADS ALL AT ONCE
function OptimizedImage({ src, alt, className, onClick }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={className}
        onClick={onClick}
        onLoad={() => setIsLoading(false)}
        style={{
          opacity: isLoading ? 0.7 : 1,
          transition: "opacity 0.3s ease-in-out",
          backgroundColor: "#f5f5f7",
        }}
      />
    </div>
  )
}

async function compressImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        let width = img.width
        let height = img.height
        const maxWidth = 1200
        const maxHeight = 1200

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.85)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

const uploadBusinessPhotos = async (businessId, files) => {
  if (!files || files.length === 0) return []

  try {
    console.log("Starting photo upload for business ID:", businessId)

    const { data: existingBusiness, error: checkError } = await supabase
      .from("businesses")
      .select("id, name, photo_urls")
      .eq("id", businessId)
      .maybeSingle()

    if (!existingBusiness) {
      console.error("Business not found")
      alert("Error: Business not found")
      return []
    }

    const uploadedUrls = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      console.log(`Compressing photo ${i + 1}/${files.length}...`)

      const compressedBlob = await compressImage(file)
      const compressedFile = new File([compressedBlob], file.name, { type: "image/jpeg" })

      const fileExt = "jpg"
      const fileName = `${businessId}-${Date.now()}-${i}.${fileExt}`
      const filePath = fileName

      console.log(`Uploading photo ${i + 1}/${files.length} to business-logos bucket:`, filePath)

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("business-logos")
        .upload(filePath, compressedFile, {
          upsert: true,
          cacheControl: "31536000",
        })

      if (uploadError) {
        console.error(`Upload error for photo ${i + 1}:`, uploadError)
        continue
      }

      console.log(`Upload ${i + 1} successful:`, uploadData)

      const { data: urlData } = supabase.storage.from("business-logos").getPublicUrl(filePath)

      if (urlData?.publicUrl) {
        uploadedUrls.push(urlData.publicUrl)
      }
    }

    if (uploadedUrls.length === 0) {
      alert("No photos were uploaded successfully")
      return []
    }

    const currentPhotos = existingBusiness.photo_urls || []
    const updatedPhotos = [...currentPhotos, ...uploadedUrls]

    const { error: updateError, data: updatedBusiness } = await supabase
      .from("businesses")
      .update({ photo_urls: updatedPhotos })
      .eq("id", businessId)
      .select()

    if (updateError) {
      console.error("Database update error:", updateError)
      alert("Failed to update database: " + updateError.message)
      return []
    }

    console.log("Database updated successfully with new photos")
    alert(`${uploadedUrls.length} photo(s) uploaded successfully!`)

    return uploadedUrls
  } catch (error) {
    console.error("Error uploading photos:", error)
    alert("Error: " + error.message)
    return []
  }
}

async function compressAndUploadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        let width = img.width
        let height = img.height
        const maxWidth = 800
        const maxHeight = 800

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.8)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [businesses, setBusinesses] = useState([])
  const [justSignedUp, setJustSignedUp] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [showLanding, setShowLanding] = useState(false)
  const [zipSearch, setZipSearch] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const [editingName, setEditingName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [userFcmToken, setUserFcmToken] = useState(null)
  const [selectedBusinessId, setSelectedBusinessId] = useState(null)
  const [mapPanTo, setMapPanTo] = useState(null)
  const [sortBy, setSortBy] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [zipFilter, setZipFilter] = useState("")
  const [tagFilter, setTagFilter] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const isPremium = session?.user?.user_metadata?.is_premium === true || profile?.is_premium === true

  useEffect(() => {
    if (session?.user) {
      console.log("═══════════════════════════════════════")
      console.log("User:", session.user.email)
      console.log("Auth Meta:", session.user.user_metadata)
      console.log("Profile:", profile)
      console.log("isPremium:", isPremium)
      console.log(
        "Nav Items:",
        navItems.map((n) => n.label),
      )
      console.log("═══════════════════════════════════════")
    }
  }, [session, profile, isPremium])

  const [selectedNav, setSelectedNav] = useState("Highlighted Business")

  const navItems = [
    { label: "Highlighted Business", icon: CompassFill },
    { label: "Map", icon: GeoAltFill },
    ...(isPremium ? [{ label: "Display My Card", icon: PersonFill }] : []),
    { label: "Profile and Payment", icon: PersonFill },
  ]

  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        let app
        if (getApps().length === 0) {
          app = initializeApp(firebaseConfig)
          console.log("Firebase app initialized")
        } else {
          app = getApp()
          console.log("Firebase app already exists")
        }

        const messaging = getMessaging(app)

        const permission = await Notification.requestPermission()
        if (permission === "granted") {
          console.log("Notification permission granted")

          const token = await getToken(messaging, {
            vapidKey: "BOgqakg5aBxNszM1Ji6H4ADnNMtexhho5CWWpijJqNxdyD8MtYGSc7ZX3yRz2ybsVs8YIHKi_NZ0mz8zAQ25lQk",
          })

          if (token) {
            console.log("FCM Token:", token)
            handleFcmTokenReceived(token)
          } else {
            console.log("No FCM token received")
          }
        } else {
          console.log("Notification permission denied")
        }

        onMessage(messaging, (payload) => {
          console.log("Message received in foreground:", payload)
          if (payload.notification) {
            new Notification(payload.notification.title, {
              body: payload.notification.body,
              icon: payload.notification.icon,
            })
          }
        })
      } catch (error) {
        console.error("Error initializing Firebase messaging:", error)
      }
    }

    initializeFirebase()
  }, [])

  useEffect(() => {
    if (session?.user?.email) {
      const adminEmails = ["serkankalem99@gmail.com"]
      setIsAdmin(adminEmails.includes(session.user.email.toLowerCase()))
    }
  }, [session])

  const getBusinessImage = (business, size = "small") => {
    if (
      business.logo_url &&
      business.logo_url.trim() !== "" &&
      business.logo_url !== "/placeholder.svg" &&
      !business.logo_url.includes("placeholder")
    ) {
      const sizes = {
        small: { width: 200, height: 200, quality: 75 },
        medium: { width: 300, height: 300, quality: 80 },
        large: { width: 500, height: 500, quality: 85 },
      }
      const sizeParams = sizes[size] || sizes.small

      return `${business.logo_url}?width=${sizeParams.width}&height=${sizeParams.height}&quality=${sizeParams.quality}&format=webp`
    }
    return "/placeholder.svg"
  }

  const uploadBusinessLogo = async (businessId, file) => {
    if (!file) return null

    try {
      console.log("Starting upload for business ID:", businessId)
      console.log("Business ID type:", typeof businessId)

      const { data: existingBusiness, error: checkError } = await supabase
        .from("businesses")
        .select("id, name")
        .eq("id", businessId)
        .maybeSingle()

      console.log("Business lookup result:", existingBusiness)
      console.log("Business lookup error:", checkError)

      if (!existingBusiness) {
        console.error("Business not found in database with ID:", businessId)
        alert("Error: Cannot find business in database. ID might be incorrect.")
        return null
      }

      console.log("Compressing image...")
      const compressedBlob = await compressAndUploadImage(file)
      const compressedFile = new File([compressedBlob], file.name, { type: "image/jpeg" })

      const fileExt = "jpg"
      const fileName = `${businessId}-${Date.now()}.${fileExt}`
      const filePath = fileName

      console.log("Uploading to business-logos bucket:", filePath)

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("business-logos")
        .upload(filePath, compressedFile, {
          upsert: true,
          cacheControl: "31536000",
        })

      if (uploadError) {
        console.error("Upload error:", uploadError)
        alert("Upload failed: " + uploadError.message)
        return null
      }

      console.log("Upload successful:", uploadData)

      const { data: urlData } = supabase.storage.from("business-logos").getPublicUrl(filePath)

      if (!urlData?.publicUrl) {
        console.error("Failed to get public URL")
        return null
      }

      console.log("Public URL:", urlData.publicUrl)

      const { error: updateError, data: updatedBusiness } = await supabase
        .from("businesses")
        .update({ logo_url: urlData.publicUrl })
        .eq("id", businessId)
        .select()

      if (updateError) {
        console.error("Database update error:", updateError)
        alert("Failed to update database: " + updateError.message)
        return null
      }

      console.log("Database updated successfully:", updatedBusiness)

      if (!updatedBusiness || updatedBusiness.length === 0) {
        console.error("No business found with ID:", businessId)
        alert("Error: Business not found in database")
        return null
      }

      alert("Logo uploaded successfully!")

      return urlData.publicUrl
    } catch (error) {
      console.error("Error uploading logo:", error)
      alert("Error: " + error.message)
      return null
    }
  }

  const handleLogoUpload = async (businessId, file) => {
    if (!file) return

    setBusinesses((prev) => prev.map((biz) => (biz.id === businessId ? { ...biz, uploading: true } : biz)))

    const logoUrl = await uploadBusinessLogo(businessId, file)

    if (logoUrl) {
      setBusinesses((prev) =>
        prev.map((biz) => (biz.id === businessId ? { ...biz, logo_url: logoUrl, uploading: false } : biz)),
      )
      await fetchBusinesses()
    } else {
      setBusinesses((prev) => prev.map((biz) => (biz.id === businessId ? { ...biz, uploading: false } : biz)))
    }
  }

  const handleNavClick = (label) => {
    if (label === "Display My Card") {
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 600)
    }
    setSelectedNav(label)
  }

  const handleBusinessSelect = (e) => {
    const businessId = e.target.value
    setSelectedBusinessId(businessId)
    const business = businesses.find((biz) => biz.id === businessId)
    if (business && business.latitude && business.longitude) {
      setMapPanTo({
        lat: Number.parseFloat(business.latitude),
        lng: Number.parseFloat(business.longitude),
      })
    }
  }

  const handleFcmTokenReceived = (token) => {
    console.log("FCM token received and set:", token)
    setUserFcmToken(token)
  }

  const handleAddBusiness = async (newBusiness) => {
    setBusinesses((prev) => [newBusiness, ...prev])
    setSelectedNav("Highlighted Business")
    notifyNewBusiness(newBusiness, userFcmToken)
    setTimeout(() => fetchBusinesses(), 500)
  }

  async function notifyNewBusiness(newBusiness, userFcmToken) {
    if (!userFcmToken) {
      console.warn("No FCM token available for notifications")
      return
    }
    try {
      console.log("Sending notification with token:", userFcmToken)
      const response = await fetch("/api/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fcmToken: userFcmToken,
          title: "New Business Added!",
          body: `${newBusiness.name} just joined our app!`,
        }),
      })
      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Notification send failed: ${response.status}`, errorText)
        return
      }
      const data = await response.json()
      console.log("Notification sent successfully:", data)
    } catch (error) {
      console.error("Error sending notification:", error)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent))
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      setShowLanding(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      console.log("📍 Loading initial data...")

      // ✅ FIX: Force a fresh session from server
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession()
      if (!mounted) return

      if (sessionError) {
        console.error("❌ Session error:", sessionError)
        return
      }

      console.log("📍 Session loaded:", session?.user?.email)
      setSession(session)

      if (session?.user) {
        // ✅ FIX: Always fetch fresh profile data from database
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()

        if (profileError) {
          console.error("❌ Profile error:", profileError)
        } else {
          console.log("✅ Profile loaded:", {
            email: profileData.email,
            is_premium: profileData.is_premium,
            subscription_status: profileData.subscription_status,
            subscription_cancel_at: profileData.subscription_cancel_at,
          })
          setProfile(profileData)
        }
      }
    }

    // ✅ FIX: Load data immediately on mount
    loadData()

    // ✅ FIX: Listen for auth changes and storage events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("🔔 Auth event:", event)
      if (!mounted) return

      setSession(session)

      if (session?.user) {
        // Always fetch fresh profile from database
        const { data: profileData } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

        console.log("🔔 Profile updated from auth change:", {
          is_premium: profileData?.is_premium,
          subscription_status: profileData?.subscription_status,
        })

        setProfile(profileData)
      } else {
        setProfile(null)
      }
    })

    // ✅ NEW: Listen for storage events (page visibility changes)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        console.log("👁️ Page became visible, reloading data...")
        loadData()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      mounted = false
      subscription?.unsubscribe()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    if (!session?.user?.id) return

    const pollInterval = setInterval(async () => {
      try {
        console.log("🔄 Polling for profile updates...")

        // Fetch latest profile
        const { data: newProfile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()

        if (error) {
          console.error("❌ Poll error:", error)
          return
        }

        // Check if anything changed
        const statusChanged = profile?.subscription_status !== newProfile?.subscription_status
        const premiumChanged = profile?.is_premium !== newProfile?.is_premium
        const cancelAtChanged = profile?.subscription_cancel_at !== newProfile?.subscription_cancel_at

        if (statusChanged || premiumChanged || cancelAtChanged) {
          console.log("🔄 Profile data changed:", {
            old: {
              subscription_status: profile?.subscription_status,
              is_premium: profile?.is_premium,
              subscription_cancel_at: profile?.subscription_cancel_at,
            },
            new: {
              subscription_status: newProfile?.subscription_status,
              is_premium: newProfile?.is_premium,
              subscription_cancel_at: newProfile?.subscription_cancel_at,
            },
          })

          setProfile(newProfile)

          // Also refresh auth session
          const {
            data: { session: newSession },
          } = await supabase.auth.refreshSession()
          if (newSession) {
            setSession(newSession)
          }
        }
      } catch (error) {
        console.error("❌ Polling error:", error)
      }
    }, 3000) // Poll every 3 seconds

    return () => clearInterval(pollInterval)
  }, [session?.user?.id, profile?.subscription_status, profile?.is_premium, profile?.subscription_cancel_at])

  useEffect(() => {
    if (!session?.user?.id) return

    const refreshData = async () => {
      try {
        // Refresh auth
        const {
          data: { session: newSession },
        } = await supabase.auth.refreshSession()

        // Refresh profile
        const { data: newProfile } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

        const oldPremium = isPremium
        const newPremium = newSession?.user?.user_metadata?.is_premium === true || newProfile?.is_premium === true

        if (oldPremium !== newPremium) {
          console.log("🎉 Premium status changed!", oldPremium, "→", newPremium)
          setSession(newSession)
          setProfile(newProfile)
        }
      } catch (error) {
        console.error("Refresh error:", error)
      }
    }

    refreshData()
    const interval = setInterval(refreshData, 10000)
    return () => clearInterval(interval)
  }, [session?.user?.id])

  useEffect(() => {
    // Check if user was redirected from payment success
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("showCard") === "true" && isPremium) {
      setSelectedNav("Display My Card")
      // Clear the URL parameter
      window.history.replaceState({}, "", "/")
    }
  }, [isPremium])

  useEffect(() => {
    // Check for navigation parameter
    const urlParams = new URLSearchParams(window.location.search)
    const navParam = urlParams.get("nav")

    if (navParam === "profile") {
      setSelectedNav("Profile and Payment")
      // Clean up URL
      window.history.replaceState({}, "", "/")
    }
  }, [])

// Replace your fetchBusinesses function with this improved version:

const fetchBusinesses = async () => {
  console.log("📍 Fetching businesses from database...")
  
  try {
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("❌ Error fetching businesses:", error)
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        hint: error.hint,
      })
      
      // Show user-friendly error
      alert("Failed to load businesses. Please refresh the page.")
      return
    }

    if (data) {
      console.log("✅ Fetched businesses:", data.length)
      
      // Parse tags if stored as JSON string
      const processedData = data.map(business => ({
        ...business,
        tags: typeof business.tags === 'string' 
          ? (business.tags ? JSON.parse(business.tags) : [])
          : (Array.isArray(business.tags) ? business.tags : [])
      }))
      
      setBusinesses(processedData)
      preloadImages(processedData)
    }
  } catch (err) {
    console.error("❌ Unexpected error fetching businesses:", err)
    alert("An unexpected error occurred. Please refresh the page.")
  }
}

// Replace your session/profile loading useEffect with this streamlined version:

useEffect(() => {
  let mounted = true
  let fetchAttempts = 0
  const MAX_ATTEMPTS = 3

  const loadData = async () => {
    if (fetchAttempts >= MAX_ATTEMPTS) {
      console.error("❌ Max fetch attempts reached")
      return
    }
    
    fetchAttempts++
    console.log(`📍 Loading initial data (attempt ${fetchAttempts})...`)

    try {
      // Get session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      
      if (!mounted) return

      if (sessionError) {
        console.error("❌ Session error:", sessionError)
        return
      }

      console.log("📍 Session loaded:", session?.user?.email)
      setSession(session)

      if (session?.user) {
        // Fetch profile
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()

        if (!mounted) return

        if (profileError) {
          console.error("❌ Profile error:", profileError)
        } else {
          console.log("✅ Profile loaded:", {
            email: profileData.email,
            is_premium: profileData.is_premium,
          })
          setProfile(profileData)
        }
      }

      // CRITICAL: Fetch businesses after session is confirmed
      await fetchBusinesses()
      
    } catch (error) {
      console.error("❌ Error loading data:", error)
      if (fetchAttempts < MAX_ATTEMPTS) {
        setTimeout(loadData, 2000) // Retry after 2 seconds
      }
    }
  }

  loadData()

  // Auth state change listener
  const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    console.log("🔔 Auth event:", event)
    if (!mounted) return

    setSession(session)

    if (session?.user) {
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single()

      if (mounted) {
        setProfile(profileData)
        // Refetch businesses on auth change
        await fetchBusinesses()
      }
    } else {
      setProfile(null)
      setBusinesses([])
    }
  })

  // Page visibility handler
  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible" && mounted) {
      console.log("👁️ Page became visible, reloading businesses...")
      fetchBusinesses()
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange)

  return () => {
    mounted = false
    subscription?.unsubscribe()
    document.removeEventListener("visibilitychange", handleVisibilityChange)
  }
}, []) // Run only once on mount

// REMOVE OR REDUCE the polling interval - it's causing unnecessary load
// Replace the 3-second polling with this more conservative approach:

useEffect(() => {
  if (!session?.user?.id) return

  // Only poll profile changes, not businesses
  const pollInterval = setInterval(async () => {
    try {
      const { data: newProfile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single()

      if (newProfile && 
          (profile?.subscription_status !== newProfile?.subscription_status ||
           profile?.is_premium !== newProfile?.is_premium)) {
        console.log("🔄 Profile changed, updating...")
        setProfile(newProfile)
      }
    } catch (error) {
      console.error("❌ Poll error:", error)
    }
  }, 10000) // Reduced to 10 seconds instead of 3

  return () => clearInterval(pollInterval)
}, [session?.user?.id, profile?.subscription_status, profile?.is_premium])

// REMOVE the second polling useEffect entirely (the one at line 10000)
// It's redundant and causing conflicts

  const preloadImages = (businessList) => {
    if (typeof window === "undefined") return

    businessList.forEach((business) => {
      const img = new window.Image()
      img.src = getBusinessImage(business, "small")
    })
  }



  useEffect(() => {
    fetchBusinesses()
  }, [])

  useEffect(() => {
    if (session?.user) {
      const metadata = session.user.user_metadata || {}
      setDisplayName(metadata.display_name || "")
      setEditingName(metadata.display_name || "")
      setAvatarUrl(metadata.avatar_url || "")
    }
  }, [session])

  const saveName = async () => {
    setIsSaving(true)
    setSaveStatus(null)
    const { data, error } = await supabase.auth.updateUser({
      data: {
        display_name: editingName,
        avatar_url: avatarUrl,
      },
    })
    if (!error && data?.user) {
      setDisplayName(editingName)
      setSession((prev) => ({ ...prev, user: data.user }))
      setSaveStatus("success")
    } else {
      setSaveStatus("error")
    }
    setIsSaving(false)
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file || !session?.user?.id) return
    setUploading(true)
    const fileExt = file.name.split(".").pop()
    const filePath = `avatars/${session.user.id}-${Date.now()}.${fileExt}`
    const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file, { upsert: true })
    if (uploadError) {
      setUploading(false)
      setSaveStatus("error")
      return
    }
    const { data: urlData } = supabase.storage.from("avatars").getPublicUrl(filePath)
    const publicUrl = urlData?.publicUrl || ""
    if (!publicUrl) {
      setUploading(false)
      setSaveStatus("error")
      return
    }
    const { error: metaErr, data: updated } = await supabase.auth.updateUser({
      data: {
        display_name: editingName || displayName,
        avatar_url: publicUrl,
      },
    })
    if (!metaErr && updated?.user) {
      setAvatarUrl(publicUrl)
      setSession((prev) => ({ ...prev, user: updated.user }))
      setSaveStatus("success")
    } else {
      setSaveStatus("error")
    }
    setUploading(false)
  }

  const handleLogout = async () => {
    try {
      console.log("🚪 Starting logout process...")

      // Clear all state FIRST
      setSession(null)
      setProfile(null)
      setDisplayName("")
      setEditingName("")
      setAvatarUrl("")
      setSelectedNav("Highlighted Business")

      // Clear storage
      localStorage.clear()
      sessionStorage.clear()

      console.log("🔄 Signing out from Supabase...")

      // Sign out from Supabase (await it!)
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error("❌ Supabase signOut error:", error)
        // Don't return here, continue with reload
      } else {
        console.log("✅ Supabase signOut successful")
      }

      // CRITICAL: Small delay to ensure signout completes
      await new Promise((resolve) => setTimeout(resolve, 300))

      console.log("🔄 Reloading page...")

      // Force full page reload (clears all React state)
      window.location.href = "/"
    } catch (err) {
      console.error("❌ Logout error:", err)
      // Force reload anyway to clear state
      window.location.href = "/"
    }
  }

  const refreshUserData = async () => {
    if (!session?.user?.id) return

    try {
      console.log("🔄 Refreshing user data...")

      // ✅ FIX: Fetch profile FIRST (most reliable)
      const { data: newProfile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single()

      if (profileError) {
        console.error("❌ Profile fetch error:", profileError)
      } else if (newProfile) {
        console.log("✅ Profile refreshed:", {
          subscription_status: newProfile.subscription_status,
          is_premium: newProfile.is_premium,
          subscription_cancel_at: newProfile.subscription_cancel_at,
        })
        setProfile(newProfile)
      }

      // Then refresh auth session
      const {
        data: { session: newSession },
        error: sessionError,
      } = await supabase.auth.refreshSession()

      if (sessionError) {
        console.error("❌ Session refresh error:", sessionError)
      } else if (newSession) {
        console.log("✅ Session refreshed")
        setSession(newSession)
      }
    } catch (error) {
      console.error("❌ Error refreshing data:", error)
    }
  }

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="sparkle sparkle-1">✦</div>
        <div className="sparkle sparkle-2">✧</div>
        <div className="sparkle sparkle-3">✦</div>
        <div className="decorative-circle"></div>
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="App logo" className="splash-logo" />
        </div>
        <div className="splash-tagline"></div>
      </div>
    )
  }

  if (showLanding && !session) {
    return (
      <LandingPage
        onLoginClick={() => {
          setShowLanding(false)
          setShowRegister(false)
        }}
        onGetStarted={() => {
          setShowLanding(false)
          setShowRegister(true)
        }}
      />
    )
  }

  if (!session) {
    return (
      <Auth
        onAuthSuccess={(_data, isSignUp) => {
          supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (isSignUp) setJustSignedUp(true)
          })
        }}
        isLoginProp={!showRegister}
      />
    )
  }

  if (justSignedUp) {
    return (
      <div style={{ width: "100vw", margin: 0, padding: 16, boxSizing: "border-box" }}>
        <h2>Welcome to Staten Island!</h2>
        <MembershipCard
          email={session.user.email}
          name={displayName}
          avatar={avatarUrl}
          style={{ width: "100%", maxWidth: "100%" }}
        />
        <button
          onClick={() => setJustSignedUp(false)}
          style={{
            marginTop: 24,
            padding: "12px 24px",
            backgroundColor: "#007acc",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s",
            width: "100%",
            maxWidth: 400,
            display: "block",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#005fa3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007acc")}
        >
          Continue to App
        </button>
      </div>
    )
  }

  return (
    <div>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
        `}
      </style>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <main style={{ flex: 1, padding: 0, overflowY: "auto" }}>
          {selectedNav === "Display My Card" ? (
            <div
              style={{
                padding: "40px 20px",
                margin: 0,
                width: "100vw",
                minHeight: "calc(100vh - 60px)",
                backgroundColor: "#f5f5f7",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <MembershipCard
                email={session.user.email}
                name={displayName}
                avatar={avatarUrl}
                shouldShake={shouldShake}
                style={{ width: "100%", maxWidth: 400, margin: "0 auto" }}
              />
            </div>
          ) : selectedNav === "Add Your Business" ? (
            <BusinessForm onAddBusiness={handleAddBusiness} />
          ) : selectedNav === "Map" ? (
            <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
              <div style={{ flexGrow: 1 }}>
                <StatenIslandMap businesses={businesses} />
              </div>
            </div>
          ) : selectedNav === "Profile and Payment" ? (
            <div className="profile-page-backdrop">
              <ProfileAndPayment
                session={session}
                profile={profile}
                displayName={displayName}
                onSaveName={saveName}
                editingName={editingName}
                setEditingName={setEditingName}
                isSaving={isSaving}
                saveStatus={saveStatus}
                onLogout={handleLogout}
              />
            </div>
          ) : selectedNav === "Highlighted Business" ? (
            <div>
              <div className="highlighted-business-container">
                <div className="highlighted-business-header">
                  <h2>Hello, {displayName || "Guest"}!</h2>
                </div>
                <div className="highlighted-search-container">
                  <span>🔍</span>
                  <input
                    type="text"
                    placeholder="Search businesses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="highlighted-filter-bar">
                <div className="filter-controls-row">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>

                    <option value="rating">Highest Rating</option>
                  </select>
                  <select value={zipSearch} onChange={(e) => setZipSearch(e.target.value)}>
                    <option value="">📍 Search by Zip</option>
                    {[...new Set(businesses.map((biz) => biz.zip_code))].map(
                      (zip, idx) =>
                        zip && (
                          <option key={idx} value={zip}>
                            {zip}
                          </option>
                        ),
                    )}
                  </select>
                  <div className="highlighted-tag-input">
                    <input
                      type="text"
                      placeholder=" 🏷️ Add tag..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newTag.trim()) {
                          setTags([...tags, newTag.trim()])
                          setNewTag("")
                        }
                      }}
                    />
                  </div>
                </div>
                {tags.length > 0 && (
                  <div className="highlighted-tags-list">
                    {tags.map((tag, idx) => (
                      <span key={idx}>
                        {tag}
                        <button onClick={() => setTags(tags.filter((_, i) => i !== idx))}>✕</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {businesses
                .filter((biz) => {
                  const matchesSearch =
                    (biz.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (biz.description || "").toLowerCase().includes(searchTerm.toLowerCase())

                  const matchesTag =
                    tags.length === 0 ||
                    (Array.isArray(biz.tags) &&
                      tags.some((t) => biz.tags.some((tag) => tag.toLowerCase() === t.toLowerCase())))

                  const matchesZip =
                    !zipSearch || (biz.zip_code && biz.zip_code.toString().startsWith(zipSearch.trim()))

                  return matchesSearch && matchesTag && matchesZip
                })
                .sort((a, b) => {
                  if (sortBy === "az") return a.name.localeCompare(b.name)
                  if (sortBy === "za") return b.name.localeCompare(a.name)
                  if (sortBy === "oldest") return a.id - b.id
                  if (sortBy === "newest") return b.id - a.id
                  if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0)
                  return 0
                })
                .map((biz) => (
                  <div
                  key={biz.id}
                  className="highlighted-business-card"
                  onClick={() => setSelectedBusiness(biz)}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ position: "relative" }}>
                    {biz.uploading && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(255,255,255,0.8)",
                          borderRadius: "8px",
                          zIndex: 10,
                        }}
                      >
                        <div>Uploading...</div>
                      </div>
                    )}
                    <OptimizedImage
                      src={getBusinessImage(biz)}
                      alt={biz.name}
                      className="highlighted-business-logo"
                    />
                    {isAdmin && (
                      <label
                        style={{
                          position: "absolute",
                          bottom: -8,
                          right: -8,
                          backgroundColor: "#1e3a8a",
                          color: "white",
                          borderRadius: "50%",
                          width: 28,
                          height: 28,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "14px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        📷
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleLogoUpload(biz.id, e.target.files[0])
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>

                  <div className="highlighted-business-content">
                    <div className="highlighted-business-name">{biz.name}</div>
                    {biz.description && <div className="highlighted-business-description">{biz.description}</div>}

                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          style={{
                            color: (biz.rating || 0) >= star ? "#f59e0b" : "#ccc",
                            fontSize: 18,
                          }}
                        >
                          ★
                        </span>
                      ))}
                      <span style={{ fontSize: 13, color: "#f59e0b", fontWeight: 500 }}>
                        {biz.rating || " 0.0"} ({biz.review_count || 0})
                      </span>
                    </div>

                    {Array.isArray(biz.tags) && biz.tags.length > 0 && (
                      <div className="highlighted-business-tags">
                        <span className="highlighted-tag-pill">
                          <span>🏷️</span>
                          <span>{biz.tags[0]}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                ))}
            </div>
          ) : (
            <div>{/* Any other routes */}</div>
          )}
        </main>
    

{selectedBusiness && (
  <BusinessProfile
    business={selectedBusiness}
    onClose={() => setSelectedBusiness(null)}
    isAdmin={isAdmin}
    onPhotosUpdate={uploadBusinessPhotos}
    session={session}  // ✅ ADD THIS LINE
    onRatingUpdate={(updatedBusiness) => {
      // Update the business in the businesses array
      setBusinesses(prev => 
        prev.map(biz => 
          biz.id === updatedBusiness.id ? updatedBusiness : biz
        )
      )
    }}
  />
)}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#darkblue",
            padding: "8px 4px",
            borderTop: "1px solid #ccc",
            minHeight: "60px",
          }}
        >
          {navItems.map(({ label, icon: Icon }) => {
            const isSelected = selectedNav === label
            const shortLabel =
              label === "Highlighted Business"
                ? "Businesses "
                : label === "Display My Card"
                  ? "My Card"
                  : label === "Profile and Payment"
                    ? "Profile"
                    : label
            return (
              <div
                key={label}
                onClick={() => handleNavClick(label)}
                style={{
                  cursor: "pointer",
                  padding: "4px 2px",
                  borderRadius: 6,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isSelected ? "#4ba3d9" : "#667",
                  fontWeight: isSelected ? "bold" : "normal",
                  transition: "color 0.3s",
                  flex: 1,
                  maxWidth: "80px",
                }}
              >
                <Icon size={20} color={isSelected ? "#4BA3d9" : "#666"} />
                <span
                  style={{
                    fontSize: "10px",
                    marginTop: 2,
                    textAlign: "center",
                    lineHeight: "12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                  }}
                >
                  {shortLabel}
                </span>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default App
