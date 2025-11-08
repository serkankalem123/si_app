import React from 'react';
import { GeoAltFill, EnvelopeFill, HeartFill } from 'react-bootstrap-icons';

function BusinessCard({ business, onSelect }) {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.09)',
        borderRadius: 14,
        marginBottom: 18,
        overflow: 'hidden',
      }}
      onClick={() => onSelect(business)}
      title="Tap for more details"
    >
      <img


        alt={business.name}
        style={{ width: 155, height: 155, objectFit: 'cover' }}
        
      />
      <div style={{ flex: 1, padding: 18 }}>
        <h3 style={{ marginTop: 0, marginBottom: 6 }}>{business.name}</h3>
        <div style={{ fontSize: 15, color: '#607D8B', marginBottom: 6 }}>
          <GeoAltFill size={15} /> {business.address || 'Staten Island'}
        </div>
        <div style={{ fontSize: 15, color: '#607D8B', marginBottom: 8 }}>
          <EnvelopeFill size={15} /> {business.email}
        </div>
        {/* Add other details as needed */}
      </div>
    </div>
  );
}

export default BusinessCard;
