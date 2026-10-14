
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">🚕 CabGo</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">YOUR RIDE, YOUR WAY</p>

          <h1>
            Go Anywhere.
            <br />
            <span>Anytime.</span>
          </h1>

          <p className="description">
            Book your ride in seconds. Safe, comfortable and
            affordable journeys start here.
          </p>

          <div className="booking-card">
            <h3>Book Your Ride</h3>

            <label>Pickup Location</label>
            <input type="text" placeholder="Enter pickup location" />

            <label>Drop Location</label>
            <input type="text" placeholder="Enter destination" />

            <button
              className="book-btn"
              onClick={() =>
                alert('Booking feature coming soon!')
              }
            >
              Find My Ride →
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circle">
            <span className="car">🚕</span>
          </div>
          <div className="floating-card">
            ⭐ 4.9 Rating
            <br />
            <small>Trusted by riders</small>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Why Choose CabGo?</h2>

        <div className="service-grid">
          <div className="service-card">
            <span>⚡</span>
            <h3>Quick Booking</h3>
            <p>Book your ride in just a few clicks.</p>
          </div>

          <div className="service-card">
            <span>🛡️</span>
            <h3>Safe Rides</h3>
            <p>Your safety and comfort matter to us.</p>
          </div>

          <div className="service-card">
            <span>💰</span>
            <h3>Affordable Prices</h3>
            <p>Enjoy comfortable rides at great prices.</p>
          </div>
        </div>
      </section>

      <footer>
        © 2026 CabGo. Your journey, our priority.
      </footer>
    </div>
  )
}

export default App