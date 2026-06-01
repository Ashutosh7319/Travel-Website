import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../data/packages';
import { CreditCard, Smartphone, Globe, Lock } from 'lucide-react';

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === id);
  const [paymentMode, setPaymentMode] = useState('upi');

  if (!pkg) return <div className="container section">Package not found.</div>;

  const gstRate = 0.05; // 5% GST for tour packages
  const gstAmount = pkg.price * gstRate;
  const totalAmount = pkg.price + gstAmount;

  const handlePay = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate('/success', { state: { pkg, totalAmount, paymentMode } });
    }, 1500);
  };

  return (
    <div className="container section">
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Complete Your Booking</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Left Col: Order Summary */}
        <div>
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Order Summary</h2>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src={pkg.image} alt={pkg.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.5rem' }} />
              <div>
                <h3 style={{ fontWeight: 600 }}>{pkg.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{pkg.duration} • {pkg.location}</p>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Package Base Price</span>
                <span>₹{pkg.price.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>GST (5%)</span>
                <span>₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700 }}>
              <span>Total Amount</span>
              <span style={{ color: 'var(--accent-color)' }}>₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Right Col: Payment Options */}
        <div>
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Payment Method</h2>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => setPaymentMode('upi')}
                style={{ 
                  flex: 1, padding: '1rem', borderRadius: '0.5rem', 
                  border: `2px solid ${paymentMode === 'upi' ? 'var(--accent-color)' : 'var(--border-color)'}`,
                  backgroundColor: paymentMode === 'upi' ? 'var(--bg-secondary)' : 'transparent',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                <Smartphone size={24} color={paymentMode === 'upi' ? 'var(--accent-color)' : 'var(--text-secondary)'} />
                <span style={{ fontWeight: 500 }}>UPI</span>
              </button>
              <button 
                onClick={() => setPaymentMode('card')}
                style={{ 
                  flex: 1, padding: '1rem', borderRadius: '0.5rem', 
                  border: `2px solid ${paymentMode === 'card' ? 'var(--accent-color)' : 'var(--border-color)'}`,
                  backgroundColor: paymentMode === 'card' ? 'var(--bg-secondary)' : 'transparent',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                <CreditCard size={24} color={paymentMode === 'card' ? 'var(--accent-color)' : 'var(--text-secondary)'} />
                <span style={{ fontWeight: 500 }}>Card</span>
              </button>
              <button 
                onClick={() => setPaymentMode('netbanking')}
                style={{ 
                  flex: 1, padding: '1rem', borderRadius: '0.5rem', 
                  border: `2px solid ${paymentMode === 'netbanking' ? 'var(--accent-color)' : 'var(--border-color)'}`,
                  backgroundColor: paymentMode === 'netbanking' ? 'var(--bg-secondary)' : 'transparent',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--text-primary)'
                }}
              >
                <Globe size={24} color={paymentMode === 'netbanking' ? 'var(--accent-color)' : 'var(--text-secondary)'} />
                <span style={{ fontWeight: 500 }}>Netbanking</span>
              </button>
            </div>

            <form onSubmit={handlePay}>
              {paymentMode === 'upi' && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>UPI ID</label>
                  <input type="text" className="input" placeholder="username@upi" required />
                </div>
              )}
              
              {paymentMode === 'card' && (
                <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Card Number</label>
                    <input type="text" className="input" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Expiry Date</label>
                      <input type="text" className="input" placeholder="MM/YY" required />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>CVV</label>
                      <input type="password" className="input" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              {paymentMode === 'netbanking' && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Select Bank</label>
                  <select className="input" required style={{ appearance: 'none' }}>
                    <option value="">Choose your bank...</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                  </select>
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <Lock size={20} /> Pay ₹{totalAmount.toLocaleString('en-IN')}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
