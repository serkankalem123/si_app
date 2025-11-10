// app/components/StatenIslandMap.jsx
"use client"

import { useEffect, useState, useRef } from "react"

const StatenIslandMap = ({ businesses }) => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const markersRef = useRef({})

  const STATEN_ISLAND_CENTER = { lat: 40.5795, lng: -74.1502 }

  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (business.address && business.address.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // Load Google Maps API
 // Replace the loadGoogleMaps useEffect in StatenIslandMap.jsx with this:

useEffect(() => {
  const loadGoogleMaps = () => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      console.log("Google Maps already loaded");
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      console.log("Google Maps script already exists, waiting for load...");
      existingScript.addEventListener('load', () => {
        setIsLoaded(true);
      });
      return;
    }

    // Load the script only if it doesn't exist
    console.log("Loading Google Maps script...");
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&libraries=places";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("Google Maps loaded successfully");
      setIsLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps");
    };
    document.head.appendChild(script);
  };

  loadGoogleMaps();
}, []);

  // Init map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google) return

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: STATEN_ISLAND_CENTER,
      zoom: 11,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    })

    setMap(mapInstance)
  }, [isLoaded])

  // Add markers
  useEffect(() => {
    if (!map || !businesses?.length || !window.google) return

    const markers = []
    markersRef.current = {}

    businesses.forEach(async (business) => {
      let lat = business.latitude ? Number.parseFloat(business.latitude) : null
      let lng = business.longitude ? Number.parseFloat(business.longitude) : null

      if ((!lat || !lng) && business.address) {
        try {
          const geocoder = new window.google.maps.Geocoder()
          const result = await new Promise((resolve, reject) => {
            geocoder.geocode({ address: `${business.address}, Staten Island, NY` }, (results, status) => {
              if (status === "OK" && results?.length) resolve(results[0])
              else reject(status)
            })
          })
          lat = result.geometry.location.lat()
          lng = result.geometry.location.lng()
        } catch (error) {
          console.error("Geocoding failed for:", business.address, error)
          return
        }
      }

      if (!lat || !lng) return

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: business.name,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new window.google.maps.Size(32, 32),
        },
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding:8px; font-family:sans-serif; min-width:220px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <img
                src="${business.logo_url || "/placeholder.svg"}"
                alt="${business.name}"
                style="width:60px; height:60px; border-radius:8px; object-fit:cover;"
              />
              <div>
                <div style="font-weight:bold; margin-bottom:4px; font-size:15px;">
                  ${business.name}
                </div>
                ${
                  business.address
                    ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        business.address,
                      )}" target="_blank" rel="noopener noreferrer"
                         style="color:#2563eb; text-decoration:underline; font-size:13px;">
                         ${business.address}
                       </a>`
                    : ""
                }
              </div>
            </div>
          </div>
        `,
      })

      marker.addListener("click", () => {
        infoWindow.open(map, marker)
      })

      markers.push(marker)
      markersRef.current[business.id] = { marker, infoWindow }
    })

    return () => markers.forEach((m) => m.setMap(null))
  }, [map, businesses])

  // Jump to business
  const handleBusinessClick = (biz) => {
    let lat = biz.latitude ? Number.parseFloat(biz.latitude) : null
    let lng = biz.longitude ? Number.parseFloat(biz.longitude) : null

    if (!lat || !lng) {
      const entry = markersRef.current[biz.id]
      if (entry) {
        const pos = entry.marker.getPosition()
        lat = pos.lat()
        lng = pos.lng()
      }
    }

    if (lat && lng) {
      const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`
      window.location.href = streetViewUrl
      return
    }

    alert("This is a mobile Business.")
  }

  const handleSuggestionSelect = (business) => {
    setSearchTerm(business.name)
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    handleBusinessClick(business)
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    setShowSuggestions(value.length > 0)
    setSelectedSuggestionIndex(-1)
  }

  const handleSearchKeyDown = (e) => {
    if (!showSuggestions || filteredBusinesses.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedSuggestionIndex((prev) => (prev < filteredBusinesses.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : filteredBusinesses.length - 1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (selectedSuggestionIndex >= 0) {
        handleSuggestionSelect(filteredBusinesses[selectedSuggestionIndex])
      } else if (filteredBusinesses.length > 0) {
        handleSuggestionSelect(filteredBusinesses[0])
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
    }
  }

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(135deg, #4ba3d9 0%, #4ba3d9 100%)",
          padding: "24px 20px",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 16,
              padding: "14px 18px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              flex: 1,
              minWidth: "200px",
              position: "relative",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ color: "#6b7280", marginRight: 12, fontSize: "1.1rem" }}>🔍</span>
            <input
              type="text"
              placeholder="Search businesses..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                fontSize: 15,
                fontWeight: "400",
                color: "#111827",
                background: "transparent",
              }}
            />

            {showSuggestions && filteredBusinesses.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "white",
                  borderRadius: "0 0 12px 12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  maxHeight: "300px",
                  overflowY: "auto",
                  zIndex: 1001,
                  marginTop: "2px",
                }}
              >
                {filteredBusinesses.slice(0, 8).map((business, index) => (
                  <div
                    key={business.id}
                    onClick={() => handleSuggestionSelect(business)}
                    style={{
                      padding: "12px 14px",
                      cursor: "pointer",
                      borderBottom: index < Math.min(filteredBusinesses.length, 8) - 1 ? "1px solid #f3f4f6" : "none",
                      background: selectedSuggestionIndex === index ? "#f8fafc" : "white",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  >
                    <div style={{ fontWeight: "500", fontSize: "14px", color: "#1f2937", marginBottom: "2px" }}>
                      {business.name}
                    </div>
                    {business.address && <div style={{ fontSize: "12px", color: "#6b7280" }}>{business.address}</div>}
                  </div>
                ))}
                {filteredBusinesses.length > 8 && (
                  <div
                    style={{
                      padding: "8px 14px",
                      fontSize: "12px",
                      color: "#6b7280",
                      textAlign: "center",
                      background: "#f9fafb",
                    }}
                  >
                    +{filteredBusinesses.length - 8} more results
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setShowList(!showList)}
            style={{
              background: showList ? "#3b82f6" : "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "black",
              padding: "10px 16px",
              borderRadius: 12,
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              if (!showList) {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)"
              }
            }}
            onMouseLeave={(e) => {
              if (!showList) {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"
              }
            }}
          >
            {showList ? "Hide List" : "Show List"}
          </button>
        </div>
      </div>

      <div
        ref={mapRef}
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "88px",
        }}
      />

      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: "88px",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9fafb",
            color: "#6b7280",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 40,
                height: 40,
                border: "4px solid #e5e7eb",
                borderTop: "4px solid #3b82f6",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto 16px",
              }}
            />
            <p>Loading Staten Island Map...</p>
          </div>
        </div>
      )}

      {showList && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 2000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "20px",
          }}
          onClick={() => setShowList(false)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              maxHeight: "80vh",
              width: "90%",
              maxWidth: "400px",
              overflow: "hidden",
              animation: "slideDown 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                background: "#4ba3d9",
                color: "white",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "600", fontSize: "18px", color: "black" }}>
                {filteredBusinesses.length}  Businesses
              </div>
              <button
                onClick={() => setShowList(false)}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"
                }}
              >
                ✕
              </button>
            </div>

            {/* Business List */}
            <div
              style={{
                padding: "16px",
                maxHeight: "60vh",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {filteredBusinesses.map((biz) => (
                <div
                  key={biz.id}
                  onClick={() => handleBusinessClick(biz)}
                  style={{
                    padding: "16px",
                    marginBottom: "12px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    border: "1px solid #f3f4f6",
                    background: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f8fafc"
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "6px", color: "#1f2937" }}>
                    {biz.name}
                  </div>
                  {biz.address && <div style={{ fontSize: "14px", color: "#6b7280" }}>{biz.address}</div>}
                </div>
              ))}

              {filteredBusinesses.length === 0 && searchTerm && (
                <div
                  style={{
                    padding: "40px 24px",
                    textAlign: "center",
                    color: "#6b7280",
                    fontSize: "16px",
                  }}
                >
                  No businesses found matching "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ✅ Global overrides to remove excess whitespace in InfoWindow */}
      <style jsx global>{`
        .gm-style-iw {
          padding-top: 0 !important;
          top: 0 !important;
        }
        .gm-ui-hover-effect {
          top: 4px !important;
          right: 4px !important;
        }
        .gm-ui-hover-effect > img {
          width: 12px !important;
          height: 12px !important;
        }
      `}</style>
    </div>
  )
}

export default StatenIslandMap