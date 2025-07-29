
const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Shri Lakshmi Minerals</h1>
          <p>Leading the Natural Stone Industry with Excellence and Innovation</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>With over two decades of experience in the natural stone industry, Shri Lakshmi Minerals has established itself as a leading manufacturer and exporter of premium quality stones. Our journey began in 2001 with a vision to provide the finest quality natural stones to customers worldwide.</p>
            
            <h2>Our Mission</h2>
            <p>To deliver exceptional quality natural stones while maintaining the highest standards of customer service and environmental responsibility. We strive to be the most trusted name in the global stone industry.</p>

            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control measures at every stage of production</p>
              </div>
              <div className="feature">
                <h3>Global Reach</h3>
                <p>Exporting to over 25 countries with reliable shipping partners</p>
              </div>
              <div className="feature">
                <h3>Expert Team</h3>
                <p>Skilled professionals with years of industry experience</p>
              </div>
              <div className="feature">
                <h3>Modern Technology</h3>
                <p>State-of-the-art machinery and processing facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="competitors-section">
        <div className="about-container">
          <h2>What Makes Us Different</h2>
          <div className="competitors-content">
            <img src="/src/assets/images/COMPETITORS.jpg" alt="Our Advantage" className="competitors-image" />
            <div className="competitors-text">
              <div className="advantage">
                <h3>Understanding Customer Expectations</h3>
                <p>We prioritize understanding your specific needs and delivering solutions that exceed expectations.</p>
              </div>
              <div className="advantage">
                <h3>Well-Defined Management System</h3>
                <p>Our systematic approach ensures smooth operations and consistent quality in every project.</p>
              </div>
              <div className="advantage">
                <h3>Stakeholder Commitment</h3>
                <p>Strong relationships with stakeholders built on trust and mutual growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage