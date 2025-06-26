"use client";

import { motion } from "framer-motion";
import {
  Target,
  Globe,
  Users,
  BookOpen,
  Heart,
  MessageSquare,
  ChevronRight,
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
    <section className="bg-white pt-25 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#35B354]/10 text-[#35B354] mb-4">
                Trusted Education Partner
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="text-[#35B354]">Nextgen</span> Advisors
              </h1>
              <p className="text-lg text-gray-600">
                A premier educational consultancy helping students pursue their
                dreams of studying abroad. We provide end-to-end guidance, from
                selecting the right course and university to visa processing and
                pre-departure preparation.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg border border-[#35B354]/20 hover:bg-[#35B354]/5 transition-colors shadow-sm hover:shadow-md"
                >
                  <p className="text-2xl font-bold text-[#35B354]">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <button className="mt-6 px-6 py-3 bg-[#35B354] text-white font-medium rounded-lg hover:bg-[#2e9b4a] transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Students studying abroad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#35B354]/10 text-[#35B354] mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Our Core <span className="text-[#35B354]">Principles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-[#35B354]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#35B354]/20">
                  <value.icon className="w-8 h-8 text-[#35B354] transition-all duration-300 group-hover:scale-110" />
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#35B354]/5 to-[#2e9b4a]/5 rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#35B354]/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#35B354]/10 blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#35B354]/20 text-[#35B354] mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#35B354]">Story</span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-gray-700">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Founded with a simple mission: to make international education
                accessible to every deserving student. What started as a small
                consultancy has grown into Nepal's most trusted education
                partner.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our team, having experienced the challenges of studying abroad
                firsthand, understood the need for comprehensive support that
                goes beyond just application assistance. Today, we provide
                end-to-end services that ensure our students not only get
                admitted to their dream universities but also thrive in their
                new academic environment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                With partnerships across 15+ countries and relationships with
                over 500 universities worldwide, we continue to expand
                opportunities while maintaining the personalized touch that sets
                us apart.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#35B354]/10 text-[#35B354] mb-4">
              Student Voices
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Success <span className="text-[#35B354]">Stories</span>
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#35B354]/10 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#35B354]/10 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-[#35B354]" />
              </div>
            </div>
            <blockquote className="text-gray-600 italic text-lg mb-6">
              "Testimonials from our students will appear here. We're collecting
              inspiring stories of students who achieved their dreams through
              our guidance."
            </blockquote>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full ${
                    item === 1 ? "bg-[#35B354]" : "bg-[#35B354]/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
