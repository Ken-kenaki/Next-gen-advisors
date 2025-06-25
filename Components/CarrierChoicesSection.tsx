"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface CareerOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  countries: string[];
  salaryRange: string;
}

export default function CareerChoicesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const careerOptions: CareerOption[] = [
    {
      title: "AI & Data Science",
      description:
        "Master machine learning, neural networks, and big data analytics at world-leading tech institutes.",
      icon: (
        <svg
          className="w-8 h-8 text-[#35B354]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      countries: ["USA", "Canada", "Germany", "Singapore"],
      salaryRange: "$80K - $150K",
    },
    {
      title: "Sustainable Energy",
      description:
        "Pioneer renewable energy solutions with specialized programs in solar, wind, and green tech engineering.",
      icon: (
        <svg
          className="w-8 h-8 text-[#35B354]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      countries: ["Germany", "Netherlands", "Sweden", "Australia"],
      salaryRange: "$65K - $120K",
    },
    {
      title: "Biotechnology",
      description:
        "Merge biology with technology through cutting-edge programs in genetic engineering and pharmaceutical sciences.",
      icon: (
        <svg
          className="w-8 h-8 text-[#35B354]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      countries: ["USA", "Switzerland", "UK", "Japan"],
      salaryRange: "$70K - $130K",
    },
    {
      title: "FinTech & Blockchain",
      description:
        "Revolutionize finance with programs in cryptocurrency, algorithmic trading, and digital banking systems.",
      icon: (
        <svg
          className="w-8 h-8 text-[#35B354]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      countries: ["UK", "USA", "UAE", "Hong Kong"],
      salaryRange: "$90K - $160K",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#35B354]/10 text-[#35B354] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Future-Ready Careers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Next Generation Career Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover high-growth fields where global education meets emerging
            market demands
          </p>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: ".career-pagination",
              bulletClass: "career-bullet",
              bulletActiveClass: "career-bullet-active",
            }}
            className="!pb-16"
          >
            {careerOptions.map((career, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="p-2 bg-[#35B354]/10 flex justify-center">
                    {career.icon}
                  </div>
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{career.description}</p>

                    <div className="mt-auto space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#35B354] mb-2">
                          TOP STUDY DESTINATIONS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.countries.map((country, i) => (
                            <span
                              key={i}
                              className="bg-[#35B354]/10 text-[#35B354] px-3 py-1 rounded-full text-xs"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#35B354] mb-1">
                          AVERAGE SALARY
                        </h4>
                        <p className="font-medium">{career.salaryRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="career-pagination !bottom-0 mt-8 flex justify-center gap-2" />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/career-assessment"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#35B354] to-[#2a8a43] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Take Our Career Aptitude Test
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .career-bullet {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
        }
        .career-bullet-active {
          background: #35b354;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
