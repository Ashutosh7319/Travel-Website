import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

const PackageCard = ({ pkg }) => {
  return (
    <Link to={`/package/${pkg.id}`} className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ height: '250px', overflow: 'hidden' }}>
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
          className="card-img"
        />
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{pkg.title}</h3>
          <span style={{ fontWeight: 700, color: 'var(--accent-color)', fontSize: '1.125rem' }}>
            ₹{pkg.price.toLocaleString('en-IN')}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <MapPin size={16} />
            <span>{pkg.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={16} />
            <span>{pkg.duration}</span>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {pkg.highlights.slice(0, 2).map((h, i) => (
              <span key={i} style={{ 
                fontSize: '0.75rem', 
                padding: '0.25rem 0.5rem', 
                backgroundColor: 'var(--bg-secondary)', 
                borderRadius: '1rem',
                color: 'var(--text-secondary)'
              }}>
                {h}
              </span>
            ))}
            {pkg.highlights.length > 2 && (
              <span style={{ 
                fontSize: '0.75rem', 
                padding: '0.25rem 0.5rem', 
                backgroundColor: 'var(--bg-secondary)', 
                borderRadius: '1rem',
                color: 'var(--text-secondary)'
              }}>
                +{pkg.highlights.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* CSS for hover effect on image */}
      <style>{`
        .card:hover .card-img {
          transform: scale(1.05);
        }
      `}</style>
    </Link>
  );
};

export default PackageCard;
