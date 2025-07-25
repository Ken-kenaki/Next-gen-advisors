"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselItem {
  title: string;
  description: string;
}

export default function TextCarousel() {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const items: CarouselItem[] = [
    {
      title: "University Fair 2024",
      description:
        "Meet representatives from 50+ international universities at our annual education fair.",
    },
    {
      title: "New Scholarship Program",
      description:
        "Exclusive scholarships now available for STEM programs in Canada and Germany.",
    },
    {
      title: "IELTS Masterclass",
      description:
        "Free intensive workshop with our band 9.0 scoring instructors.",
    },
    {
      title: "Visa Policy Updates",
      description:
        "Important changes to student visa requirements for Australia and UK.",
    },
  ];

  return (
    <div className="bg-[#F5F4F5] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#35B354] mb-4 md:mb-0">
            Explore News & Events
          </h2>
          <div className="flex items-center space-x-4">
            <button
              ref={navigationPrevRef}
              className="p-2 rounded-full bg-[#35B354] text-white hover:bg-[#2a8a43] transition-colors"
              aria-label="Previous slide"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={navigationNextRef}
              className="p-2 rounded-full bg-[#35B354] text-white hover:bg-[#2a8a43] transition-colors"
              aria-label="Next slide"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-[#35B354]",
          }}
          autoplay={{ delay: 5000 }}
          onInit={(swiper) => {
            if (navigationPrevRef.current && navigationNextRef.current) {
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSwiper={(swiper) => {
            if (navigationPrevRef.current && navigationNextRef.current) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="!pb-12"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto border-t-4 border-[#35B354]">
                <h3 className="text-2xl font-bold text-[#35B354] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <Link
            href="/events-news"
            className="group inline-flex items-center bg-[#35B354] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a8a43] transition-colors"
          >
            View All Updates
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
