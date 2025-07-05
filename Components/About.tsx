"use client";

import { motion } from "framer-motion";
import { Target, Globe, Users, Heart } from "lucide-react";
import Image from "next/image";

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function AboutSection() {
  const strengths = [
    {
      icon: Users,
      title: "Student Focused",
      description:
        "We've successfully guided countless students towards their academic dreams",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Our extensive partnerships span across numerous countries worldwide",
    },
    {
      icon: Heart,
      title: "Proven Success",
      description:
        "Consistently high approval rates for our students' applications",
    },
    {
      icon: Target,
      title: "Trusted Experience",
      description:
        "Years of dedicated service in the education consultancy field",
    },
  ];

  const values: ValueItem[] = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To empower the next generation by providing access to quality education and global career opportunities that truly make a difference in their lives.",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "To deliver honest, efficient, and personalized guidance that empowers students to make informed decisions, achieve their academic goals, and unlock global opportunities through trusted education consultancy services.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Empowering students to embrace a global mindset and thrive in today's interconnected world.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-[#35B354] mb-6">
              Who Are We?
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Nextgen Advisors
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nextgen Advisors is a premier educational consultancy helping
              students pursue their dreams of studying abroad. We provide
              end-to-end guidance, from selecting the right course and
              university to visa processing and pre-departure preparation. We
              guide students to the right path by offering expert counseling,
              personalized support, and access to top international
              universities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#35B354]/10 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <strength.icon className="w-6 h-6 text-[#35B354]" />
                    <h3 className="font-bold text-gray-800">
                      {strength.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-80 sm:h-96 lg:h-full rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/connect.jpeg"
              alt="Students studying abroad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#35B354]/20 to-transparent" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-[#35B354] mb-12"
          >
            Our Core Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#35B354]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#35B354]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
