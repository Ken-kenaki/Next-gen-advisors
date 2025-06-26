// app/test-preparation/pte/page.tsx
"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaRobot,
  FaClock,
  FaLaptop,
  FaBook,
  FaHeadphones,
  FaCheckCircle,
} from "react-icons/fa";

export default function PTEPreparation() {
  const sections = [
    {
      name: "Speaking & Writing",
      duration: "77-93 min",
      tasks: "Personal introduction, read aloud, describe image, essay",
      icon: <FaRobot className="text-blue-500 text-xl" />,
    },
    {
      name: "Reading",
      duration: "32-40 min",
      tasks: "Multiple choice, re-order paragraphs",
      icon: <FaBook className="text-blue-500 text-xl" />,
    },
    {
      name: "Listening",
      duration: "45-57 min",
      tasks: "Summarize spoken text, highlight correct summary",
      icon: <FaHeadphones className="text-blue-500 text-xl" />,
    },
  ];

  const advantages = [
    "Results in 2-5 business days",
    "Unbiased AI scoring",
    "Flexible test dates",
    "Accepted by 100% of Australian universities",
  ];

  const faqs = [
    {
      question: "How is PTE different from IELTS?",
      answer:
        "PTE is fully computer-based with AI scoring, while IELTS has human examiners.",
    },
    {
      question: "Which countries accept PTE?",
      answer: "Australia, New Zealand, UK, Canada, and many US universities.",
    },
    {
      question: "Can I reschedule my PTE test?",
      answer:
        "Yes, you can reschedule up to 14 days before your test without fee.",
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
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity },
              }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/pte-logo.png"
                alt="PTE"
                width={200}
                height={100}
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
            >
              PTE Academic Preparation 💻
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fastest computer-based English test with AI scoring
            </p>
          </div>

          {/* Test Advantages */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <FaLaptop className="text-blue-500 text-2xl" />
                </div>
                <p className="font-medium">{advantage}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">PTE Test Format</h2>
              <p>Three-part computer-based test with AI scoring</p>
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
                  className="border-l-4 border-blue-500 pl-4 py-4 bg-blue-50 rounded"
                >
                  <div className="flex items-center mb-2">
                    {section.icon}
                    <h3 className="text-lg font-bold ml-2">{section.name}</h3>
                  </div>
                  <p className="text-sm text-blue-600">{section.duration}</p>
                  <p className="text-gray-700 mt-1">{section.tasks}</p>
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
            <h3 className="text-2xl font-bold text-center mb-8">PTE FAQs</h3>
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
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-blue-600 mb-2">
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
            className="bg-blue-600 rounded-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Master the Computer Format
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our PTE preparation includes AI-scored practice tests
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium"
              >
                Free Demo Test
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
