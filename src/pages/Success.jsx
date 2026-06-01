import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Mail, Download, ArrowRight } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const state = location.state;

  // Fallback if accessed directly without state
  if (!state || !state.pkg) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>No booking data found.</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Go to Home</Link>
      </div>
    );
  }

  const { pkg, totalAmount, paymentMode } = state;
  const bookingId = `BKG-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <CheckCircle2 size={64} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Booking Confirmed!</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          Thank you for choosing Design.in Tours. Your booking ID is <strong style={{ color: 'var(--text-primary)' }}>{bookingId}</strong>.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          <Mail size={20} />
          <span>Mock Email Receipt Sent to your Inbox</span>
        </div>
        
        {/* Mock Email Container */}
        <div style={{ 
          backgroundColor: '#fff', 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.5rem', 
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          color: '#1f2937' // Forcing light colors for the email mock to look like an actual email regardless of theme
        }}>
          {/* Email Header */}
          <div style={{ backgroundColor: '#f9fafb', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong>From:</strong> <span>bookings@design.in</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong>To:</strong> <span>traveler@example.com</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Subject:</strong> <span>Booking Confirmation - {pkg.title} ({bookingId})</span>
            </div>
          </div>
          
          {/* Email Body */}
          <div style={{ padding: '2rem 1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#f59e0b' }}>
              Design.in Tours
            </h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Dear Traveler,<br/><br/>
              Your booking for <strong>{pkg.title}</strong> has been successfully confirmed. Get ready for an unforgettable {pkg.duration} adventure!
            </p>

            <div style={{ backgroundColor: '#f3f4f6', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem', borderBottom: '1px solid #d1d5db', paddingBottom: '0.5rem' }}>
                Booking Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.875rem' }}>
                <div>
                  <div style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Booking ID</div>
                  <div style={{ fontWeight: 600 }}>{bookingId}</div>
                </div>
                <div>
                  <div style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Payment Method</div>
                  <div style={{ fontWeight: 600, textTransform: 'uppercase' }}>{paymentMode}</div>
                </div>
                <div>
                  <div style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Location</div>
                  <div style={{ fontWeight: 600 }}>{pkg.location}</div>
                </div>
                <div>
                  <div style={{ color: '#6b7280', marginBottom: '0.25rem' }}>Total Amount Paid</div>
                  <div style={{ fontWeight: 600 }}>₹{totalAmount.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '2rem' }}>
              Our support team will reach out to you shortly with the finalized tickets and hotel vouchers. If you have any questions, reply to this email or call our 24/7 helpline at 1800-123-456.
            </p>

            <div style={{ textAlign: 'center' }}>
              <button className="btn" style={{ backgroundColor: '#111827', color: '#fff' }}>
                <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Invoice
              </button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" className="btn btn-outline">
            <ArrowRight size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
