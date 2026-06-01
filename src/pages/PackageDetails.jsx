import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../data/packages';
import { MapPin, Clock, CheckCircle2, Car, Hotel, Calendar } from 'lucide-react';

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === id);

  if (!pkg) {
    return <div className="container section">Package not found.</div>;
  }

  return (
    <div>
      {/* Hero Header */}
      <div style={{ height: '50vh', position: 'relative' }}>
        <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' 
        }} />
      </div>

      <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 2 }}>
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{pkg.title}</h1>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={20} /> <span>{pkg.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={20} /> <span>{pkg.duration}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Starting from</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '1rem' }}>
                ₹{pkg.price.toLocaleString('en-IN')}
              </div>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
                onClick={() => navigate(`/payment/${pkg.id}`)}
              >
                Book Package
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
          {/* Itinerary */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Itinerary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {pkg.details.itinerary.map((day, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    minWidth: '60px', height: '60px', borderRadius: '0.5rem', 
                    backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-color)', 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700
                  }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Day</span>
                    <span style={{ fontSize: '1.25rem' }}>{day.day}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{day.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Car size={20} color="var(--accent-color)" /> Transportation
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{pkg.details.transportation}</p>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Hotel size={20} color="var(--accent-color)" /> Hotels
              </h3>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {pkg.details.hotels.map((hotel, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                    <span>{hotel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
