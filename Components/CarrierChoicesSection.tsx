"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface StudyDestination {
  title: string;
  description: string;
  icon: React.ReactNode;
  topUniversities: string[];
  intakes: string;
}

export default function StudyDestinationsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const destinations: StudyDestination[] = [
    {
      title: "Study in UK",
      description:
        "Home to world-renowned institutions like Oxford and Cambridge, offering globally recognized degrees with emphasis on independent research.",
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
            d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
          />
        </svg>
      ),
      topUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
      ],
      intakes: "September/October (Main), January/February",
    },
    {
      title: "Study in Australia",
      description:
        "Renowned for flexible education, research opportunities, and post-study work options in a multicultural environment.",
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
            d="M8 7l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      ),
      topUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
      ],
      intakes: "February (Semester 1), July (Semester 2)",
    },
    {
      title: "Study in Canada",
      description:
        "High-quality education with affordable living costs, work opportunities during studies, and pathways to permanent residency.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      topUniversities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
      ],
      intakes: "September (Fall), January (Winter)",
    },
    {
      title: "Study in USA",
      description:
        "World's top-ranked universities with cutting-edge research facilities, flexible education system, and OPT work opportunities.",
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
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      topUniversities: ["Harvard University", "MIT", "Stanford University"],
      intakes: "August (Fall), January (Spring)",
    },
    {
      title: "Study in New Zealand",
      description:
        "Student-focused education with breathtaking landscapes, safe environment, and clear pathways to residency after graduation.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      topUniversities: [
        "University of Otago",
        "Victoria University",
        "University of Canterbury",
      ],
      intakes: "February (Semester 1), July (Semester 2)",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#35B354]/10 text-[#35B354] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Global Study Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Education Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top study destinations that offer excellent academic
            programs and post-study work opportunities
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
              el: ".destination-pagination",
              bulletClass: "destination-bullet",
              bulletActiveClass: "destination-bullet-active",
            }}
            className="!pb-16"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="p-6 bg-[#35B354]/10 flex justify-center">
                    {destination.icon}
                  </div>
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {destination.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {destination.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#35B354] mb-2">
                          TOP UNIVERSITIES
                        </h4>
                        <ul className="space-y-1">
                          {destination.topUniversities.map((uni, i) => (
                            <li key={i} className="text-gray-700 text-sm">
                              • {uni}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#35B354] mb-1">
                          MAIN INTAKES
                        </h4>
                        <p className="font-medium">{destination.intakes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="destination-pagination !bottom-0 mt-8 flex justify-center gap-2" />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/study-destinations"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#35B354] to-[#2a8a43] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Explore Courses & Universities
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
        .destination-bullet {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
        }
        .destination-bullet-active {
          background: #35b354;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
