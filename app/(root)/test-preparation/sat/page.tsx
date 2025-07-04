"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaBook,
  FaCheckCircle,
  FaCalculator,
  FaPenAlt,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

export default function SATPreparation() {
  const sections = [
    {
      name: "Reading",
      duration: "65 min",
      questions: "52 questions",
      icon: <FaBook className="text-[#35B354] text-xl" />,
    },
    {
      name: "Writing & Language",
      duration: "35 min",
      questions: "44 questions",
      icon: <FaPenAlt className="text-[#35B354] text-xl" />,
    },
    {
      name: "Math (No Calculator)",
      duration: "25 min",
      questions: "20 questions",
      icon: <FaCalculator className="text-[#35B354] text-xl" />,
    },
    {
      name: "Math (Calculator)",
      duration: "55 min",
      questions: "38 questions",
      icon: <FaCalculator className="text-[#35B354] text-xl" />,
    },
  ];

  const scoreInfo = [
    { section: "Total", range: "400-1600" },
    { section: "Reading/Writing", range: "200-800" },
    { section: "Math", range: "200-800" },
  ];

  const faqs = [
    {
      question: "How is SAT scored?",
      answer:
        "The SAT is scored on a 400-1600 scale, combining Reading/Writing (200-800) and Math (200-800).",
    },
    {
      question: "When should I take the SAT?",
      answer:
        "Most students take it in spring of junior year and again in fall of senior year.",
    },
    {
      question: "How long is the SAT valid?",
      answer:
        "SAT scores don't expire, but colleges typically want scores from the last 5 years.",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 pt-25"
      >
        {/* Enhanced Hero Section with Background Image */}
        <div className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-gradient-to-r from-[#35B354]/90 to-green-800/90">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sat.jpg" // Your SAT background image
              alt="SAT Test Preparation"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block mb-8"
            ></motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6"
            >
              SAT <span className="text-green-200">Preparation</span>
            </motion.h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10">
              The standardized test for college admissions in the United States
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                <Link href="/apply-online">Get Started</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
              >
                <FaHeadset className="inline mr-2" />
                <Link href="/contact">Free Consultation</Link>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-[#35B354] to-green-700 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">SAT Test Format</h2>
              <p className="text-lg">
                Digital adaptive test measuring reading, writing, and math
                skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="border-l-4 border-[#35B354] pl-6 py-6 bg-green-50 rounded-lg hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-xl font-bold ml-3">{section.name}</h3>
                  </div>
                  <p className="text-sm text-[#35B354] font-medium">
                    {section.duration}
                  </p>
                  <p className="text-gray-700 mt-2">{section.questions}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scoring */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-2 text-[#35B354]" /> SAT Scoring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scoreInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-green-50 p-6 rounded-lg border-l-4 border-[#35B354] text-center"
                >
                  <h4 className="font-bold text-lg">{item.section}</h4>
                  <p className="text-[#35B354] text-xl font-bold mt-2">
                    {item.range}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">SAT FAQs</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#35B354]"
                >
                  <div className="flex items-start">
                    <FaCheckCircle className="text-[#35B354] mt-1 mr-4 text-xl flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#35B354] mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#35B354] to-green-700 text-white p-12 rounded-xl text-center shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Ace the SAT?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our 10-week program covers all sections with proven strategies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                <Link href="/apply-online">Get Started</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
              >
                <Link href="/services">Our Services</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
