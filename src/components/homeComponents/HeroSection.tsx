import { Link } from "react-router-dom"
import bgImage from "../../assets/images/middle.png"

const HeroSection = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Premium Granite & Quartz Solutions</h1>
        <p>Delivering Quality Natural Stones for<br />Timeless Beauty & Durability</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            Explore Our Products
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
