"use client"; // if using in Next.js app router

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedCategories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    { name: "Cake & Milk", link: "#" },
    { name: "Coffes & Teas", link: "#" },
    { name: "Pet Foods", link: "#" },
    { name: "Vegetables", link: "#" },
  ];

  return (
    <section className="py-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">Featured Categories</h2>

        {/* Categories */}
        <div className="flex-1 mx-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <a
                  href={cat.link}
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  {cat.name}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      
      </div>
    </section>
  );
}
