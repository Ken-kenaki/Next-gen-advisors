// app/test-preparation/sat/page.tsx
"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBook,FaCheckCircle, FaCalculator, FaPenAlt, FaChartLine } from "react-icons/fa";

export default function SATPreparation() {
  const sections = [
    {
      name: "Reading",
      duration: "65 min",
      questions: "52 questions",
      icon: <FaBook className="text-indigo-500 text-xl" />,
    },
    {
      name: "Writing & Language",
      duration: "35 min",
      questions: "44 questions",
      icon: <FaPenAlt className="text-indigo-500 text-xl" />,
    },
    {
      name: "Math (No Calculator)",
      duration: "25 min",
      questions: "20 questions",
      icon: <FaCalculator className="text-indigo-500 text-xl" />,
    },
    {
      name: "Math (Calculator)",
      duration: "55 min",
      questions: "38 questions",
      icon: <FaCalculator className="text-indigo-500 text-xl" />,
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
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/sat-logo.png"
                alt="SAT"
                width={200}
                height={100}
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
            >
              SAT Preparation 📚
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The standardized test for college admissions in the United States
            </p>
          </div>

          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">SAT Test Format</h2>
              <p>
                Digital adaptive test measuring reading, writing, and math
                skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="border-l-4 border-indigo-500 pl-4 py-4 bg-indigo-50 rounded"
                >
                  <div className="flex items-center mb-2">
                    {section.icon}
                    <h3 className="text-lg font-bold ml-2">{section.name}</h3>
                  </div>
                  <p className="text-sm text-indigo-600">{section.duration}</p>
                  <p className="text-gray-700 mt-1">{section.questions}</p>
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
              <FaChartLine className="mr-2 text-indigo-500" /> SAT Scoring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scoreInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600 text-center"
                >
                  <h4 className="font-bold text-lg">{item.section}</h4>
                  <p className="text-indigo-700 text-xl font-bold mt-2">
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
            <h3 className="text-2xl font-bold text-center mb-8">SAT FAQs</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start">
                    <FaCheckCircle className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-indigo-600 mb-2">
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
            className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Ace the SAT?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our 10-week program covers all sections with proven strategies
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                Free Diagnostic
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
