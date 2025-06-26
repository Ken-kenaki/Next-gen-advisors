// app/test-preparation/gre/page.tsx
"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalculator, FaBook, FaPenFancy, FaChartLine } from "react-icons/fa";

export default function GREPreparation() {
  const sections = [
    {
      name: "Verbal Reasoning",
      duration: "Two 30-min sections",
      tasks: "Text completion, reading comprehension",
      icon: <FaBook className="text-purple-500 text-xl" />,
    },
    {
      name: "Quantitative",
      duration: "Two 35-min sections",
      tasks: "Problem solving, data analysis",
      icon: <FaCalculator className="text-purple-500 text-xl" />,
    },
    {
      name: "Analytical Writing",
      duration: "60 minutes",
      tasks: "Analyze an issue and argument",
      icon: <FaPenFancy className="text-purple-500 text-xl" />,
    },
  ];

  const quantTopics = [
    "Algebra (35%)",
    "Geometry (25%)",
    "Data Analysis (25%)",
    "Arithmetic (15%)",
  ];

  const faqs = [
    {
      question: "How is GRE different from GMAT?",
      answer:
        "GRE is accepted by more programs and has stronger verbal focus, while GMAT is business-school focused.",
    },
    {
      question: "Can I use a calculator on GRE?",
      answer:
        "Yes, an on-screen calculator is provided for the Quantitative section.",
    },
    {
      question: "How long should I prepare for GRE?",
      answer: "Most students need 2-3 months of dedicated preparation.",
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
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/gre-logo.png"
                alt="GRE"
                width={200}
                height={100}
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
            >
              GRE Preparation 🔬
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gateway to graduate and business schools worldwide
            </p>
          </div>

          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">GRE Test Format</h2>
              <p>
                Computer-adaptive test measuring verbal, quantitative, and
                analytical writing skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="border-l-4 border-purple-500 pl-4 py-4 bg-purple-50 rounded"
                >
                  <div className="flex items-center mb-2">
                    {section.icon}
                    <h3 className="text-lg font-bold ml-2">{section.name}</h3>
                  </div>
                  <p className="text-sm text-purple-600">{section.duration}</p>
                  <p className="text-gray-700 mt-1">{section.tasks}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quantitative Focus */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaCalculator className="mr-2 text-purple-500" /> Quantitative
              Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quantTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600"
                >
                  <p className="font-medium">{topic}</p>
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
            <h3 className="text-2xl font-bold text-center mb-8">GRE FAQs</h3>
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
                    <FaChartLine className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-purple-600 mb-2">
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
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Start Your GRE Journey</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our 12-week program covers all sections with expert instructors
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold shadow-lg"
            >
              Get Study Plan
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
