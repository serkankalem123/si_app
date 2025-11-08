import React, { useEffect, useState } from 'react';
import '@fontsource/montserrat/700.css'; 

function BusinessProfile({ business, onClose, isAdmin, onPhotosUpdate, session, onRatingUpdate }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [localPhotos, setLocalPhotos] = useState(business.photo_urls || []);
  const [localBusiness, setLocalBusiness] = useState(business);

  useEffect(() => {
    setLocalPhotos(business.photo_urls || []);
    setLocalBusiness(business);
  }, [business.photo_urls, business]);

  useEffect(() => {
    // Lock background scroll when modal is open
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflowY = 'scroll';
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!business) return null;

  const handleRating = async (star) => {
    if (!session?.user) {
      alert("Please sign in to rate this business.");
      return;
    }
    
    try {
      const { supabase } = await import('../supabaseClient');
      
      const { error: insertError } = await supabase.from("reviews").insert({
        business_id: business.id,
        user_id: session.user.id,
        rating: star,
      });
      
      if (insertError) throw insertError;

      const { data: allReviews, error: fetchError } = await supabase
        .from("reviews")
        .select("rating")
        .eq("business_id", business.id);

      if (fetchError) throw fetchError;

      const total = allReviews.length;
      const avg = total > 0 ? allReviews.reduce((a, r) => a + r.rating, 0) / total : 0;

      const { error: updateError } = await supabase
        .from("businesses")
        .update({
          rating: avg.toFixed(1),
          review_count: total,
        })
        .eq("id", business.id);

      if (updateError) throw updateError;

      const updatedBusiness = {
        ...localBusiness,
        rating: avg.toFixed(1),
        review_count: total,
      };
      
      setLocalBusiness(updatedBusiness);
      
      if (onRatingUpdate) {
        onRatingUpdate(updatedBusiness);
      }
    } catch (err) {
      console.error("Rating error:", err);
      alert("Error submitting your rating.");
    }
  };

  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length || !onPhotosUpdate) return;

    setUploading(true);
    try {
      const newPhotoUrls = await onPhotosUpdate(business.id, files);
      if (newPhotoUrls && newPhotoUrls.length > 0) {
        setLocalPhotos(prev => [...prev, ...newPhotoUrls]);
      }
    } catch (error) {
      console.error('Error uploading photos:', error);
      alert('Failed to upload photos');
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePhoto = async (photoUrl, index) => {
    if (!window.confirm('Delete this photo?')) return;
    
    try {
      const { supabase } = await import('../supabaseClient');
      
      const urlParts = photoUrl.split('/business-logos/');
      if (urlParts.length < 2) {
        throw new Error('Invalid photo URL');
      }
      const filePath = urlParts[1].split('?')[0];
      
      const { error: storageError } = await supabase.storage
        .from('business-logos')
        .remove([filePath]);
      
      if (storageError) throw storageError;
      
      const updatedPhotos = localPhotos.filter((_, i) => i !== index);
      const { error: dbError } = await supabase
        .from('businesses')
        .update({ photo_urls: updatedPhotos })
        .eq('id', business.id);
      
      if (dbError) throw dbError;
      
      setLocalPhotos(updatedPhotos);
      alert('Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting photo:', error);
      alert('Failed to delete photo');
    }
  };

  const allPhotos = [];
  if (business.logo_url && business.logo_url.trim() !== '' && business.logo_url !== '/placeholder.svg') {
    allPhotos.push({ url: business.logo_url, isLogo: true });
  }
  localPhotos.forEach(url => {
    allPhotos.push({ url, isLogo: false });
  });

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: 20,
        overflowY: 'auto',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: 24,
          maxWidth: 600,
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          position: 'relative',
          fontFamily: "'Montserrat', sans-serif",
        }}>
          {/* Header with Gradient */}
          <div style={{
            background: '#4BA3D9',
            borderRadius: '24px 24px 0 0',
            padding: '32px 32px 24px',
            position: 'relative',
          }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                right: 20,
                top: 20,
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                fontSize: 24,
                fontWeight: '300',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'scale(1)';
              }}
              aria-label="Close"
            >
              ×
            </button>

            <h2 style={{ 
              margin: 0, 
              color: 'black', 
              fontSize: 32,
              fontWeight: '700',
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}>
              {business.name ?? 'N/A'}
            </h2>

            {/* Rating Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 12,
            }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{
                      color: (localBusiness.rating || 0) >= star ? "#fbbf24" : "rgba(255,255,255,0.4)",
                      fontSize: 24,
                      cursor: session?.user ? 'pointer' : 'default',
                      transition: 'all 0.2s',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      if (session?.user) {
                        e.target.style.transform = 'scale(1.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span style={{ 
                fontSize: 15, 
                color: 'white', 
                fontWeight: '600',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: 20,
                backdropFilter: 'blur(10px)',
              }}>
                {localBusiness.rating || "0.0"} ({localBusiness.review_count || 0})
              </span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '28px 32px 32px' }}>
            {/* Photos Gallery */}
            {allPhotos.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <div style={{ 
                  display: 'flex', 
                  gap: 12, 
                  overflowX: 'auto', 
                  paddingBottom: 8,
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#667eea #f1f1f1',
                }}>
                  {allPhotos.map((photo, i) => (
                    <div key={i} style={{ position: 'relative', flexShrink: 0 }}>
                      <img
                        src={photo.url}
                        alt={photo.isLogo ? `${business.name ?? 'Business'} logo` : `Photo ${i}`}
                        style={{ 
                          height: 140,
                          width: 140,
                          objectFit: 'cover',
                          borderRadius: 16,
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        }}
                        onClick={() => setSelectedPhoto(photo.url)}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05) translateY(-4px)';
                          e.target.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1) translateY(0)';
                          e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                        }}
                      />
                      {isAdmin && !photo.isLogo && (
                        <button
                          onClick={() => handleDeletePhoto(photo.url, i - 1)}
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(239, 68, 68, 0.95)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: 28,
                            height: 28,
                            cursor: 'pointer',
                            fontSize: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(220, 38, 38, 1)';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.95)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  
                  {isAdmin && (
                    <label
                      style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                        color: 'white',
                        borderRadius: 16,
                        width: 140,
                        height: 140,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: uploading ? 'not-allowed' : 'pointer',
                        fontSize: '40px',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        opacity: uploading ? 0.6 : 1,
                        flexShrink: 0,
                        border: '2px dashed rgba(255,255,255,0.4)',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        if (!uploading) {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                      }}
                    >
                      {uploading ? '⏳' : '📷'}
                      {!uploading && <span style={{ fontSize: 13, marginTop: 8, fontWeight: '500' }}>Add Photos</span>}
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        disabled={uploading}
                        style={{ display: 'none' }}
                        onChange={handlePhotoUpload}
                      />
                    </label>
                  )}
                </div>
                {uploading && (
                  <div style={{ 
                    fontSize: 13, 
                    color: '#2563eb', 
                    marginTop: 12,
                    fontWeight: '500',
                  }}>
                    ⏳ Uploading photos...
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {business.description && (
              <p style={{ 
                fontSize: 15, 
                lineHeight: '1.7em', 
                marginBottom: 24,
                color: '#4b5563',
              }}>
                {business.description}
              </p>
            )}

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {business.address && business.address !== 'N/A' && (
                <div style={{
                  background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                  padding: '16px 20px',
                  borderRadius: 12,
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: '600', marginBottom: 4 }}>
                    📍 ADDRESS
                  </div>
                  <div style={{ fontSize: 15, color: '#1f2937', fontWeight: '500' }}>
                    {business.address}
                  </div>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {business.zip_code && business.zip_code !== 'N/A' && (
                  <div style={{
                    background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid #e5e7eb',
                  }}>
                    <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: '600', marginBottom: 4 }}>
                      🏷️    ZIP CODE
                    </div>
                    <div style={{ fontSize: 15, color: '#1f2937', fontWeight: '500' }}>
                      {business.zip_code}
                    </div>
                  </div>
                )}

                {business.phone_number && business.phone_number !== 'N/A' && (
                  <div style={{
                    background: 'linear-gradient(to right, #f3f4f6, #ffffff)',
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: '1px solid #e5e7eb',
                  }}>
                    <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: '600', marginBottom: 4 }}>
                      📞  PHONE
                    </div>
                    <div style={{ fontSize: 15, color: '#1f2937', fontWeight: '500' }}>
                      {business.phone_number}
                    </div>
                  </div>
                )}
              </div>

              {business.discount && (
                <div style={{
                  background: '#4BA3D9',
                  padding: '16px 20px',
                  borderRadius: 12,
                  color: 'white',
                  boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.4)',
                }}>
                  <div style={{ fontSize: 12, fontWeight: '600', marginBottom: 4, opacity: 0.9 }}>
                    🎁 DISCOUNT
                  </div>
                  <div style={{ fontSize: 16, fontWeight: '600' }}>
                    {business.discount}
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            {business.address && (
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <iframe
                  title="business-map"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&q=${encodeURIComponent(business.address)}`}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Photo Popup */}
      {selectedPhoto && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1100,
            padding: 20,
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}
          </style>
          <button
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
              background: 'rgba(255,255,255,0.95)',
              border: 'none',
              borderRadius: '50%',
              width: 44,
              height: 44,
              fontSize: 28,
              fontWeight: '300',
              cursor: 'pointer',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1101,
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.background = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.background = 'rgba(255,255,255,0.95)';
            }}
            aria-label="Close photo"
          >
            ×
          </button>
          
          <img
            src={selectedPhoto}
            alt="Enlarged view"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: 16,
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default BusinessProfile