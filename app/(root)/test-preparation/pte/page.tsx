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
  FaHeadset,
} from "react-icons/fa";

export default function PTEPreparation() {
  const sections = [
    {
      name: "Speaking & Writing",
      duration: "77-93 min",
      tasks: "Personal introduction, read aloud, describe image, essay",
      icon: <FaRobot className="text-[#35B354] text-xl" />,
    },
    {
      name: "Reading",
      duration: "32-40 min",
      tasks: "Multiple choice, re-order paragraphs",
      icon: <FaBook className="text-[#35B354] text-xl" />,
    },
    {
      name: "Listening",
      duration: "45-57 min",
      tasks: "Summarize spoken text, highlight correct summary",
      icon: <FaHeadphones className="text-[#35B354] text-xl" />,
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
        className="min-h-screen bg-gray-50 pt-30"
      >
        {/* Enhanced Hero Section with Background Image */}
        <div className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-gradient-to-r from-[#35B354]/90 to-green-800/90">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pte.jpg" // Your PTE background image
              alt="PTE Academic Test"
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
              PTE Academic <span className="text-green-200">Preparation</span>
            </motion.h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10">
              Fast, fair, and convenient computer-based English test with AI
              scoring
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                Book Your Test
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
              >
                <FaHeadset className="inline mr-2" /> Free Consultation
              </motion.button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
                className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-[#35B354] hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  <FaLaptop className="text-[#35B354] text-3xl" />
                </div>
                <p className="font-medium text-lg">{advantage}</p>
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
            <div className="bg-gradient-to-r from-[#35B354] to-green-700 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">PTE Test Format</h2>
              <p className="text-lg">
                Three-part computer-based test with AI scoring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
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
                  <p className="text-gray-700 mt-2">{section.tasks}</p>
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
            <h3 className="text-3xl font-bold text-center mb-12">PTE FAQs</h3>
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
            className="bg-gradient-to-r from-[#35B354] to-green-700 rounded-xl p-12 text-white text-center shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to take the PTE Academic?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the fastest English test results with our expert preparation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                Free Demo Test
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
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
