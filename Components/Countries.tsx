"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

interface Country {
  name: string;
  flag: string;
  image: string;
  description: string;
}

export default function CountriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const countries: Country[] = [
    {
      name: "UK",
      flag: "🇬🇧",
      image: "/uk.jpg",
      description:
        "Home to world-renowned universities with centuries of academic excellence",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "/australia.jpg",
      description: "High-quality education with post-study work opportunities",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "/canada.jpg",
      description: "Welcoming environment with excellent research facilities",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      image: "/usa.jpg",
      description: "Diverse programs at top-ranked global institutions",
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      image: "/new-zealand.jpg",
      description: "Innovative education in breathtaking natural surroundings",
    },
  ];

  return (
    <div className="bg-[#F5F4F5] py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#35B354] mb-4">
            Explore Study Destinations
          </h2>
          <p className="text-[#35B354]/80 text-lg max-w-3xl mx-auto">
            Discover countries offering world-class education and exceptional
            opportunities for international students.
          </p>
        </div>

        {/* Country Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            onSlideChange={(swiper: SwiperType) =>
              setActiveIndex(swiper.activeIndex)
            }
            className="!pb-12"
          >
            {countries.map((country, index) => (
              <SwiperSlide key={country.name}>
                <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
                  {/* Country Image */}
                  <div className="absolute inset-0 bg-gray-200">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-black/70">
                    {/* Always Visible Info */}
                    <div className="mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{country.flag}</span>
                        <h3 className="text-xl font-bold text-white">
                          {country.name}
                        </h3>
                      </div>
                    </div>

                    {/* Hidden Details - Reveals on Hover */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                      <div className="pt-4 border-t border-[#B2ACCE]/30 space-y-3">
                        <div className="text-white/90">
                          {country.description}
                        </div>
                      </div>
                      <Link
                        href={`/study-destinations/${country.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="mt-4 group flex items-center text-[#B2ACCE] hover:text-white transition-colors"
                      >
                        <span>Explore {country.name}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/study-destinations"
            className="group inline-flex items-center bg-[#35B354] text-[#F5F4F5] px-8 py-3 rounded-lg font-semibold hover:bg-[#2C3C81] transition-colors"
          >
            View All Countries
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
