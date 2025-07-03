"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeadphones,
  FaBook,
  FaMicrophone,
  FaPenAlt,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

export default function TOEFLPreparation() {
  const sections = [
    {
      name: "Reading",
      duration: "54-72 min",
      tasks: "3-4 academic passages",
      icon: <FaBook className="text-[#35B354] text-xl" />,
    },
    {
      name: "Listening",
      duration: "41-57 min",
      tasks: "Lectures & conversations",
      icon: <FaHeadphones className="text-[#35B354] text-xl" />,
    },
    {
      name: "Speaking",
      duration: "17 min",
      tasks: "4 recorded responses",
      icon: <FaMicrophone className="text-[#35B354] text-xl" />,
    },
    {
      name: "Writing",
      duration: "50 min",
      tasks: "2 essays",
      icon: <FaPenAlt className="text-[#35B354] text-xl" />,
    },
  ];

  const scoreRanges = [
    { skill: "Reading", max: 30 },
    { skill: "Listening", max: 30 },
    { skill: "Speaking", max: 30 },
    { skill: "Writing", max: 30 },
    { skill: "Total", max: 120 },
  ];

  const faqs = [
    {
      question: "How is TOEFL scored?",
      answer:
        "Each section is scored 0-30, totaling 0-120. Most universities require 80-100.",
    },
    {
      question: "Can I take TOEFL online?",
      answer:
        "Yes, the TOEFL iBT Home Edition is available with remote proctoring.",
    },
    {
      question: "How long are scores valid?",
      answer: "TOEFL scores are valid for 2 years from the test date.",
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
              src="/toefl.jpg" // Your TOEFL background image
              alt="TOEFL Test Preparation"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="flex justify-center mb-8"
            ></motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6"
            >
              TOEFL <span className="text-green-200">Preparation</span>
            </motion.h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10">
              The premier English test for study in the US and Canada
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                Enroll Now
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
          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-[#35B354] to-green-700 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">TOEFL iBT Test Format</h2>
              <p className="text-lg">
                Computer-based test measuring academic English skills
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
                  <p className="text-gray-700 mt-2">{section.tasks}</p>
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
              <FaCheckCircle className="mr-2 text-[#35B354]" /> Scoring System
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium">Skill</th>
                    <th className="px-6 py-3 text-left font-medium">
                      Score Range
                    </th>
                    <th className="px-6 py-3 text-left font-medium">
                      Good Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scoreRanges.map((item, index) => (
                    <motion.tr
                      key={index}
                      whileHover={{ backgroundColor: "#f0fdf4" }}
                      className="hover:bg-green-50"
                    >
                      <td className="px-6 py-4 font-medium">{item.skill}</td>
                      <td className="px-6 py-4">0-{item.max}</td>
                      <td className="px-6 py-4">
                        {item.skill === "Total" ? "100+" : "24+"}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">TOEFL FAQs</h3>
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
            <h2 className="text-3xl font-bold mb-6">
              Ready for TOEFL Success?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our 6-week intensive TOEFL preparation program
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
              >
                Free Demo Class
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
