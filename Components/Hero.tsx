"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface StatData {
  value: string;
  label: string;
}

interface FloatingCard {
  position: string;
  bg: string;
  text: string;
  title: string;
  value: string;
}

export default function HeroSection(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showJourneyModal, setShowJourneyModal] = useState(false);

  const addToRefs = useCallback(
    (
        refsArray: React.MutableRefObject<(HTMLElement | null)[]>,
        index: number
      ) =>
      (el: HTMLElement | null): void => {
        refsArray.current[index] = el;
      },
    []
  );

  const addToFloatingRefs = useCallback(
    (index: number) =>
      (el: HTMLDivElement | null): void => {
        floatingCardsRef.current[index] = el;
      },
    []
  );

  const handleConsultationSubmit = useCallback((): void => {
    alert("Consultation booked! We will contact you soon.");
    setShowConsultationModal(false);
  }, []);

  const handleJourneyStart = useCallback((): void => {
    setShowJourneyModal(false);
    setShowConsultationModal(true);
  }, []);

  useEffect(() => {
    const animateElements = (): void => {
      // Animate text elements
      textElementsRef.current.forEach((el, index) => {
        if (el) {
          el.style.opacity = "0";
          el.style.transform = "translateY(30px)";
          setTimeout(() => {
            el.style.transition = "all 0.8s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 100);
        }
      });

      // Animate image container
      if (imageContainerRef.current) {
        imageContainerRef.current.style.opacity = "0";
        imageContainerRef.current.style.transform = "scale(0.9)";
        setTimeout(() => {
          if (imageContainerRef.current) {
            imageContainerRef.current.style.transition = "all 1s ease-out";
            imageContainerRef.current.style.opacity = "1";
            imageContainerRef.current.style.transform = "scale(1)";
          }
        }, 400);
      }

      // Animate buttons
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.children;
        Array.from(buttons).forEach((button, index) => {
          const buttonElement = button as HTMLElement;
          buttonElement.style.opacity = "0";
          buttonElement.style.transform = "translateY(20px)";
          setTimeout(() => {
            buttonElement.style.transition = "all 0.6s ease-out";
            buttonElement.style.opacity = "1";
            buttonElement.style.transform = "translateY(0)";
          }, 600 + index * 100);
        });
      }

      // Animate floating cards
      floatingCardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.opacity = "0";
          card.style.transform = `translateY(50px) translateX(${
            index % 2 === 0 ? "30px" : "-30px"
          }) scale(0.8)`;
          setTimeout(() => {
            if (card) {
              card.style.transition =
                "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
              card.style.opacity = "1";
              card.style.transform = "translateY(0) translateX(0) scale(1)";
            }
          }, 800 + index * 150);
        }
      });
    };

    animateElements();
  }, []);

  const ConsultationModal = useCallback(
    (): JSX.Element => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 transform transition-all">
          <h3 className="text-xl font-bold text-[#35B354] mb-4">
            Book Free Consultation
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35B354]"
                placeholder="Enter your full name"
                aria-label="Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35B354]"
                placeholder="Enter your email"
                aria-label="Email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35B354]"
                placeholder="Enter your phone number"
                aria-label="Phone Number"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Country
              </label>
              <select
                id="country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#35B354]"
                aria-label="Preferred Country"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowConsultationModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              type="button"
              aria-label="Cancel consultation booking"
            >
              Cancel
            </button>
            <button
              onClick={handleConsultationSubmit}
              className="flex-1 px-4 py-2 bg-[#35B354] text-white rounded-md hover:bg-[#2a8e43] transition-colors"
              type="button"
              aria-label="Confirm consultation booking"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    ),
    [handleConsultationSubmit]
  );

  const JourneyModal = useCallback(
    (): JSX.Element => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 transform transition-all">
          <h3 className="text-xl font-bold text-[#35B354] mb-4">
            Start Your Education Journey
          </h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              Choose your path to global education excellence with Nextgen
              Advisors:
            </p>
            <div className="grid grid-cols-1 gap-3">
              <button
                className="p-4 border rounded-lg hover:border-[#35B354] hover:bg-green-50 transition-all text-left"
                type="button"
                aria-label="Undergraduate Programs"
              >
                <div className="font-semibold text-[#35B354]">
                  🎓 Undergraduate Programs
                </div>
                <div className="text-sm text-gray-600">
                  Bachelor's degree programs worldwide
                </div>
              </button>
              <button
                className="p-4 border rounded-lg hover:border-[#35B354] hover:bg-green-50 transition-all text-left"
                type="button"
                aria-label="Graduate Programs"
              >
                <div className="font-semibold text-[#35B354]">
                  📚 Graduate Programs
                </div>
                <div className="text-sm text-gray-600">
                  Master's and PhD programs
                </div>
              </button>
              <button
                className="p-4 border rounded-lg hover:border-[#35B354] hover:bg-green-50 transition-all text-left"
                type="button"
                aria-label="Test Preparation"
              >
                <div className="font-semibold text-[#35B354]">
                  📝 Test Preparation
                </div>
                <div className="text-sm text-gray-600">
                  IELTS, TOEFL, GRE, GMAT prep
                </div>
              </button>
              <button
                className="p-4 border rounded-lg hover:border-[#35B354] hover:bg-green-50 transition-all text-left"
                type="button"
                aria-label="Visa Assistance"
              >
                <div className="font-semibold text-[#35B354]">
                  ✈️ Visa Assistance
                </div>
                <div className="text-sm text-gray-600">
                  Comprehensive visa guidance
                </div>
              </button>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setShowJourneyModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              type="button"
              aria-label="Close journey modal"
            >
              Close
            </button>
            <button
              onClick={handleJourneyStart}
              className="flex-1 px-4 py-2 bg-[#35B354] text-white rounded-md hover:bg-[#2a8e43] transition-colors"
              type="button"
              aria-label="Get started with education journey"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    ),
    [handleJourneyStart]
  );

  const statsData: StatData[] = [
    { value: "95%", label: "Visa Success Rate" },
    { value: "100+", label: "Partner Universities" },
    { value: "10,000+", label: "Students Helped" },
  ];

  const floatingCardsData: FloatingCard[] = [
    {
      position: "top-4 right-0",
      bg: "bg-[#35B354]",
      text: "text-white",
      title: "Expert",
      value: "Counseling",
    },
    {
      position: "top-1/2 left-0",
      bg: "bg-white",
      text: "text-[#35B354]",
      title: "Personalized",
      value: "Guidance",
    },
    {
      position: "bottom-1/3 right-0",
      bg: "bg-[#35B354]",
      text: "text-white",
      title: "Visa",
      value: "Assistance",
    },
    {
      position: "bottom-4 left-0",
      bg: "bg-white",
      text: "text-[#35B354]",
      title: "Since",
      value: "2010",
    },
  ];

  return (
    <>
      <div
        ref={heroRef}
        className="bg-white min-h-screen lg:pt-50 pt-24 pb-8 md:pb-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div
                  ref={addToRefs(textElementsRef, 0)}
                  className="inline-block bg-[#35B354]/20 text-[#35B354] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium"
                >
                  Trusted by 10,000+ Students Worldwide
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span
                    ref={addToRefs(textElementsRef, 1)}
                    className="text-gray-800 block"
                  >
                    Empowering Your{" "}
                  </span>
                  <span
                    ref={addToRefs(textElementsRef, 2)}
                    className="text-[#35B354] block"
                  >
                    Global Education
                  </span>
                  <span
                    ref={addToRefs(textElementsRef, 3)}
                    className="text-gray-800 block"
                  >
                    Journey with{" "}
                  </span>
                  <span
                    ref={addToRefs(textElementsRef, 4)}
                    className="text-[#35B354] block"
                  >
                    Nextgen Advisors
                  </span>
                </h1>

                <p
                  ref={addToRefs(textElementsRef, 5)}
                  className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed"
                >
                  Premier educational consultancy providing end-to-end guidance
                  for studying abroad. Expert counseling, personalized support,
                  and access to top international universities to help you
                  achieve your academic dreams.
                </p>
              </div>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowJourneyModal(true)}
                  className="group flex items-center justify-center space-x-2 bg-[#35B354] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#2a8e43] hover:shadow-lg transition-all duration-300 shadow-md"
                  type="button"
                  aria-label="Start your education journey"
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="group flex items-center justify-center space-x-2 bg-transparent border-2 border-[#35B354] text-[#35B354] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#35B354] hover:text-white hover:shadow-lg transition-all duration-300"
                  type="button"
                  aria-label="Book free consultation"
                >
                  <span>📞</span>
                  <span className="text-sm md:text-base">
                    BOOK FREE CONSULTATION
                  </span>
                </button>
              </div>

              {/* Success Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
                {statsData.map((stat, index) => (
                  <div
                    key={`stat-${index}`}
                    ref={addToRefs(textElementsRef, 6 + index)}
                    className="text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-[#35B354]">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image with Floating Elements */}
            <div className="relative mt-8 lg:mt-0">
              <div
                ref={imageContainerRef}
                className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden flex items-center justify-center"
              >
                {/* Hero Image */}
                <Image
                  src="/girl.png"
                  alt="Students studying abroad - Nextgen Advisors"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Enhanced Floating Cards */}
                {floatingCardsData.map((card, index) => (
                  <div
                    key={`card-${index}`}
                    ref={addToFloatingRefs(index)}
                    className={`absolute ${card.position} ${card.bg} ${card.text} px-4 py-3 rounded-xl shadow-lg transition-all duration-300 cursor-pointer z-10 hover:z-20 hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
                    aria-label={`${card.title}: ${card.value}`}
                  >
                    <div className="text-xs opacity-80">{card.title}</div>
                    <div className="font-bold text-sm">{card.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showConsultationModal && <ConsultationModal />}
      {showJourneyModal && <JourneyModal />}
    </>
  );
}
