"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  badge?: string;
  buttonText: string;
  buttonLink: string;
}

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target, {
              y: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".feature-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const features: FeatureItem[] = [
    {
      title: "Proven Track Record",
      description:
        "Our established history of helping students achieve their academic dreams speaks for itself through countless success stories.",
      image: "/sucess.jpg",
      badge: "Trusted",
      buttonText: "See Success Stories",
      buttonLink: "#stories",
    },
    {
      title: "Personalized Guidance",
      description:
        "Every student receives one-on-one counseling tailored specifically to their unique goals and aspirations.",
      image: "/guide.jpg",
      badge: "Tailored",
      buttonText: "Meet Our Advisors",
      buttonLink: "/about",
    },
    {
      title: "Comprehensive Support",
      description:
        "From initial research to final enrollment, we provide complete assistance at every step of your educational journey.",
      image: "/support.jpg",
      badge: "Complete",
      buttonText: "View Our Services",
      buttonLink: "/services",
    },
  ];

  return (
    <div className="bg-white py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#35B354]/10 text-[#35B354] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Your Success, Our Priority
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Next Gen Advisors?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise with personalized attention to create pathways
            to academic success.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="feature-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-60">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
                {feature.badge && (
                  <span className="absolute top-4 right-4 bg-[#35B354] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  href={feature.buttonLink}
                  className="inline-flex items-center text-[#35B354] font-semibold group-hover:text-[#2a8a43] transition-colors"
                >
                  <span>{feature.buttonText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#35B354] text-white font-semibold rounded-lg hover:bg-[#2a8a43] transition-colors shadow-md hover:shadow-lg"
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
