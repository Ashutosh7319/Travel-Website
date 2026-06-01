import React, { useState, useEffect } from 'react';
import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import { ArrowRight, Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import priyanshuImg from '../assets/priyanshu.jpeg';

const heroImages = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=2000&q=80"
];

const Home = () => {
  const domesticPackages = packages.filter(p => p.type === 'domestic');
  const internationalPackages = packages.filter(p => p.type === 'international');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMessageSent, setIsMessageSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Slide changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsMessageSent(false);
      e.target.reset();
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <section style={{ 
        position: 'relative', 
        height: '75vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000' // Base fallback
      }}>
        {heroImages.map((img, index) => (
          <div 
            key={index} 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }} 
          />
        ))}
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            Discover the Unseen.
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Premium, minimalist travel packages curated for the modern wanderer. Hand-picked destinations, zero hassle.
          </p>
          <a href="#destinations" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Explore Packages <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
        
        {/* Slider Indicators */}
        <div style={{ position: 'absolute', bottom: '2rem', display: 'flex', gap: '0.75rem', zIndex: 1 }}>
          {heroImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{ 
                width: '12px', height: '12px', borderRadius: '50%', 
                backgroundColor: currentSlide === index ? 'var(--accent-color)' : 'rgba(255,255,255,0.5)',
                transition: 'background-color 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Packages Sections */}
      <section id="destinations" className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          
          <div style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Incredible India</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Discover the rich heritage and diverse landscapes of India.</p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '2rem' 
            }}>
              {domesticPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>International Escapes</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.125rem' }}>Experience the world's most iconic destinations.</p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '2rem' 
            }}>
              {internationalPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>About Design.in Tours</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              At Design.in Tours, we believe that travel should be more than just visiting a place—it should be an immersive experience. 
              We curate premium, minimalist travel itineraries that cut out the noise and focus on what truly matters: breathtaking landscapes, authentic culture, and seamless logistics. 
              Whether you're exploring the hidden gems of India or venturing across the globe, we design your journey with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            maxWidth: '900px', margin: '0 auto', padding: '3rem', 
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' 
          }}>
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden',
                border: '4px solid var(--accent-color)', boxShadow: 'var(--shadow-lg)'
              }}>
                <img 
                  src={priyanshuImg} 
                  alt="Priyanshu Saha" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
            <div style={{ flex: '2 1 400px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem' }}>Priyanshu Saha</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.125rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Founder & Designer, Design.in
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>
                "I designed this platform to bridge the gap between aesthetic digital experiences and real-world exploration. 
                As the founder of Design.in, my vision is to provide touring businesses with beautifully crafted digital storefronts 
                that inspire travelers the moment they land on the page. This demo showcases the perfect blend of minimalist design and robust functionality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Contact Us</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
              Have questions about our packages or want to list your touring business? Reach out to us.
            </p>
          </div>

          <div className="card" style={{ padding: '2.5rem' }}>
            {isMessageSent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Our team at Design.in will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                    <User size={18} /> Name
                  </label>
                  <input type="text" className="input" placeholder="Your Full Name" required />
                </div>
                
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                    <Mail size={18} /> Email Address
                  </label>
                  <input type="email" className="input" placeholder="you@example.com" required />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                    <MessageSquare size={18} /> Message
                  </label>
                  <textarea className="input" rows="5" placeholder="How can we help you?" required style={{ resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '1rem', marginTop: '0.5rem' }}>
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
