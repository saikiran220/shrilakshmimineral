import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Mary Karter",
    position: "Manager",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "From conservation to renewable energy generation, our company's employees have developed and implemented over $3 billion in energy savings solutions that help our customers utilize clean and sustainable resources."
  },
  {
    name: "Adam Smith",
    position: "Accountant",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "From conservation to renewable energy generation, our company's employees have developed and implemented over $3 billion in energy savings solutions that help our customers utilize clean and sustainable resources."
  },
  {
    name: "Tom Ford",
    position: "Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "From conservation to renewable energy generation, our company's employees have developed and implemented over $3 billion in energy savings solutions that help our customers utilize clean and sustainable resources."
  }
];

const TestimonialsComponent = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3>{testimonial.name}</h3>
                  <span className="position">{testimonial.position}</span>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsComponent;