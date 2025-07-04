"use client";

import { motion } from "framer-motion";
import { Target, Globe, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
import GlimpseThroughImages from "@/Components/Glimpse";
import ConnectWithUs from "@/Components/ConnectWithUs";
import FindUs from "@/Components/AboutFindUs";

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function AboutSection() {
  const stats = [
    { label: "Students Guided" },
    { label: "Countries Served" },
    { label: "University Partners" },
    { label: "Visa Success" },
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
    <section className="bg-white pt-45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center pt-16">
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
                About <span className="text-[#35B354]">Nextgen</span> Advisors
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
                    {/* Empty value - number removed */}
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
              src="/about-2.jpg"
              alt="Students at university"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
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
              Our Core Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              What <span className="text-[#35B354]">Defines</span> Us
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
                With partnerships across multiple countries and relationships
                with universities worldwide, we continue to expand opportunities
                while maintaining the personalized touch that sets us apart.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <StudentSuccessCarousel />
        </motion.div>

        {/* Glimpse Through Images Section */}
        <GlimpseThroughImages />

        {/* Additional Sections */}
        <FindUs />
      </div>
    </section>
  );
}
