import graniteImg from '../../assets/images/granite.png';
import quartzImg from '../../assets/images/quartz.png';
import marbleImg from '../../assets/images/marble.png';
import sandstoneImg from '../../assets/images/sandstone.png';
import { BsBuilding } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoConstructOutline } from 'react-icons/io5';

const OurProductsComponent = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h1>Our Products</h1>
        <p className="products-description">
          Shri Lakshmi Minerals is a trusted name in the natural stone industry, known for its
          commitment to excellence, quality, and innovation. We offer a wide variety of natural stones
          including Granite, Quartz, Marble, and Sandstone — perfect for countertops, flooring, wall
          cladding, and architectural applications.
        </p>

        <div className="product-cards">
          <div className="product-card">
            <div className="card-content">
              <h3>Granite</h3>
              <p>Durable, elegant, & naturally beautiful — ideal for countertops, flooring, and exterior applications.</p>
            </div>
            <div className="card-image">
              <img src={graniteImg} alt="Granite" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Quartz</h3>
              <p>Engineered for perfection — a modern alternative to marble with superior strength and consistency.</p>
            </div>
            <div className="card-image">
              <img src={quartzImg} alt="Quartz" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Marble</h3>
              <p>Classic and luxurious, ideal for premium interior designs and sculptures</p>
            </div>
            <div className="card-image">
              <img src={marbleImg} alt="Marble" />
            </div>
          </div>

          <div className="product-card">
            <div className="card-content">
              <h3>Sandstone & Limestone</h3>
              <p>Rustic and timeless — perfect for outdoor landscaping, garden paths, and traditional structures</p>
            </div>
            <div className="card-image">
              <img src={sandstoneImg} alt="Sandstone" />
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <BsBuilding className="stat-icon" />
            <div className="stat-content">
              <div className="stat-number">345</div>
              <div className="stat-label">PROJECTS</div>
            </div>
          </div>

          <div className="stat-item">
            <BiTime className="stat-icon" />
            <div className="stat-content">
              <div className="stat-number">22</div>
              <div className="stat-label">YEARS OF EXPERIENCE</div>
            </div>
          </div>

          <div className="stat-item">
            <HiOutlineDocumentText className="stat-icon" />
            <div className="stat-content">
              <div className="stat-number">413</div>
              <div className="stat-label">QUALIFIED STAFF</div>
            </div>
          </div>

          <div className="stat-item">
            <IoConstructOutline className="stat-icon" />
            <div className="stat-content">
              <div className="stat-number">4078</div>
              <div className="stat-label">MACHINERIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductsComponent;
