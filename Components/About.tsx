"use client";

import { motion } from "framer-motion";
import {
  Target,
  Globe,
  Users,
  BookOpen,
  Heart,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function AboutSection() {
  const stats = [
    { value: "10,000+", label: "Students Guided" },
    { value: "15+", label: "Countries" },
    { value: "500+", label: "Universities" },
    { value: "98%", label: "Success Rate" },
  ];

  const values: ValueItem[] = [
    {
      icon: Target,
      title: "Our Vision",
      description:
        "To empower the next generation by providing access to quality education and global career opportunities.",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "To deliver honest, efficient, and personalized guidance that empowers students to make informed decisions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We help students think globally and prepare them for success in an interconnected world.",
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
            <h1 className="text-4xl sm:text-5xl font-bold text-[#35B354] mb-6">
              Nextgen Advisors
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A premier educational consultancy helping students pursue their
              dreams of studying abroad. We provide end-to-end guidance, from
              selecting the right course and university to visa processing and
              pre-departure preparation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#35B354]/10 p-4 rounded-lg"
                >
                  <p className="text-2xl font-bold text-[#35B354]">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
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
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
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

        {/* Story Section */}
        <div className="bg-[#35B354]/5 rounded-2xl p-8 sm:p-12 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#35B354] mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded with a simple mission: to make international education
                accessible to every deserving student. What started as a small
                consultancy has grown into Nepal's most trusted education
                partner.
              </p>
              <p>
                Our team, having experienced the challenges of studying abroad
                firsthand, understood the need for comprehensive support that
                goes beyond just application assistance. Today, we provide
                end-to-end services that ensure our students not only get
                admitted to their dream universities but also thrive in their
                new academic environment.
              </p>
              <p>
                With partnerships across 15+ countries and relationships with
                over 500 universities worldwide, we continue to expand
                opportunities while maintaining the personalized touch that sets
                us apart.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#35B354] mb-12">
            Student Success Stories
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-inner border border-[#35B354]/20">
            <MessageSquare className="w-12 h-12 text-[#35B354] mx-auto mb-6" />
            <p className="text-gray-600 italic mb-6">
              "Testimonials from our students will appear here. We're collecting
              inspiring stories of students who achieved their dreams through
              our guidance."
            </p>
            <div className="flex justify-center space-x-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-3 h-3 rounded-full bg-[#35B354]/30"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
