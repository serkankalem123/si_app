import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function BusinessForm({ onAddBusiness }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    tags: '',
    zipCode: '',
    address: '', // Address for Google Maps
    discount: '10', // Default discount 10%
  });

  const [logoFile, setLogoFile] = useState(null);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Sanitize filenames: remove non-ASCII characters
  const sanitizeFilename = (name) => name.replace(/[^\w\-\.]/g, '_');

  const uploadFile = async (file, pathPrefix) => {
    const cleanName = sanitizeFilename(file.name);
    const filePath = `${pathPrefix}/${Date.now()}_${cleanName}`;
    const { error: uploadError } = await supabase.storage
      .from('business-assets')
      .upload(filePath, file, { upsert: true });
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from('business-assets').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const logoUrl = logoFile ? await uploadFile(logoFile, 'logos') : null;
      const photoUrls = [];
      for (const photo of photoFiles) {
        const url = await uploadFile(photo, 'photos');
        photoUrls.push(url);
      }

      // Insert business with discount included
      const { error: insertError, data } = await supabase.from('businesses')
        .insert([{
          name: formData.name.trim(),
          description: formData.description.trim(),
          tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
          zip_code: formData.zipCode.trim(),
          address: formData.address.trim(),
          discount: formData.discount,   // NEW discount field
          logo_url: logoUrl,
          photo_urls: photoUrls,
          created_at: new Date(),
        }])
        .select();

      if (insertError) {
        setError(insertError.message);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        onAddBusiness(data[0]);
        setFormData({ name: '', description: '', tags: '', zipCode: '', address: '', discount: '10' });
        setLogoFile(null);
        setPhotoFiles([]);
      } else {
        setError('Unexpected error: no business data returned after insert.');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const sharedInputStyles = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #ccc',
    marginBottom: 16,
    fontSize: 16,
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 480,
        margin: '20px auto',
        padding: 24,
        backgroundColor: '#f8faff',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#0457b8', marginBottom: 20 }}>
        Add Your Business
      </h2>

      {/* Business Name */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Business Name*
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter business name"
        style={sharedInputStyles}
      />

      {/* Description */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Description*
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        placeholder="Describe your business"
        rows={4}
        style={{ ...sharedInputStyles, resize: 'vertical' }}
      />

      {/* Zip Code */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Zip Code*
      </label>
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        required
        placeholder="e.g. 10314"
        style={sharedInputStyles}
      />

      {/* Address */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Address* (for Google Maps)
      </label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        placeholder="123 Main St, Staten Island, NY 10314"
        style={sharedInputStyles}
      />

      {/* Google Maps Preview */}
      {formData.address && (
        <iframe
          title="map-preview"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: 8 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDbunv4FltSPw8q9_jQJoVDrCJ7dPjsVaw&q=${encodeURIComponent(formData.address)}`}
        ></iframe>
      )}

      {/* Tags */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Tags (comma separated)
      </label>
      <input
        type="text"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="e.g. pizza, italian, family owned"
        style={sharedInputStyles}
      />

      {/* Discount Offer */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Discount Offer*
      </label>
      <select
        name="discount"
        value={formData.discount}
        onChange={handleChange}
        style={sharedInputStyles}
        required
      >
        <option value="5">5% Discount</option>
        <option value="10">10% Discount</option>
        <option value="15">15% Discount</option>
      </select>

      {/* Logo */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Logo (one image)
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
        style={{ marginBottom: 16 }}
      />

      {/* Photos */}
      <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>
        Photos (multiple)
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setPhotoFiles(Array.from(e.target.files || []))}
        style={{ marginBottom: 24 }}
      />

      {error && (
        <p style={{ color: 'red', textAlign: 'center', marginBottom: 16 }}>
          {error}
        </p>
      )}

      <button 
        type="submit" 
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px 0',
          backgroundColor: '#007acc',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          fontWeight: '600',
          fontSize: 16,
          cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 6px rgba(0, 122, 204, 0.5)',
          transition: 'background-color 0.3s ease',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}
        onMouseEnter={e => { if(!loading) e.target.style.backgroundColor = '#005fa3'; }}
        onMouseLeave={e => { if(!loading) e.target.style.backgroundColor = '#007acc'; }}
      >
        {loading ? 'Submitting...' : 'Submit Business'}
      </button>
    </form>
  );
}

export default BusinessForm;
