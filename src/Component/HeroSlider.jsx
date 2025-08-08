"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const slides = [
    {
      id: 1,
      backgroundImage: 'https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-1-min.png',
      title: "Don't miss amazing<br>grocery deals",
      description: 'Sign up for the daily rewards',
    },
    {
      id: 2,
      backgroundImage: 'https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png',
      title: 'Fresh Vegetables<br>Big discount',
      description: 'Save up to 50% off on your first order',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Subscribed with email:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-8" data-id="62fa712" data-element_type="section">
      <div className="container mx-auto px-4">
        <div className="w-full" data-id="7dc0e2c" data-element_type="column">
          <div className="w-full">
            <div className="w-full" data-id="1eca70d" data-element_type="widget" data-widget_type="nest-slider-v1.default">
              <div className="w-full">
                <section className="relative">
                  <div className="relative">
                    <Swiper
                      navigation={false}
                      pagination={false}
                      className="h-[538px]"
                      spaceBetween={10}
                      slidesPerView={1}
                    >
                      {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                          <div
                            className="flex items-center justify-start h-full rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                          >
                            <div className="max-w-lg pl-[85px]">
                              <h2
                                className="text-black text-4xl font-bold mb-6"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                              />
                              <p className="text-black
                               text-lg mb-8">{slide.description}</p>
                              <div className="flex">
                                <form onSubmit={handleSubmit} className="flex w-full">
                                  <input
                                    type="email"
                                    name="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    disabled={isSubmitting}
                                    className="text-black border-none bg-white flex-grow px-4 py-2 border border-gray-300 rounded-l-lg  rounded focus:border-none"
                                  />
                                  <input
                                    type="submit"
                                    value={isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;