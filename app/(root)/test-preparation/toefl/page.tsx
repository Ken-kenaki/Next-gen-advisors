// app/test-preparation/toefl/page.tsx
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
} from "react-icons/fa";

export default function TOEFLPreparation() {
  const sections = [
    {
      name: "Reading",
      duration: "54-72 min",
      tasks: "3-4 academic passages",
      icon: <FaBook className="text-red-500 text-xl" />,
    },
    {
      name: "Listening",
      duration: "41-57 min",
      tasks: "Lectures & conversations",
      icon: <FaHeadphones className="text-red-500 text-xl" />,
    },
    {
      name: "Speaking",
      duration: "17 min",
      tasks: "4 recorded responses",
      icon: <FaMicrophone className="text-red-500 text-xl" />,
    },
    {
      name: "Writing",
      duration: "50 min",
      tasks: "2 essays",
      icon: <FaPenAlt className="text-red-500 text-xl" />,
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
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/toefl-logo.png"
                alt="TOEFL"
                width={200}
                height={100}
              />
            </motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
            >
              TOEFL Preparation 🇺🇸
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The premier English test for study in the US and Canada
            </p>
          </div>

          {/* Test Structure */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">TOEFL iBT Test Format</h2>
              <p>Computer-based test measuring academic English skills</p>
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
                  className="border-l-4 border-red-500 pl-4 py-4 bg-red-50 rounded"
                >
                  <div className="flex items-center mb-2">
                    {section.icon}
                    <h3 className="text-lg font-bold ml-2">{section.name}</h3>
                  </div>
                  <p className="text-sm text-red-600">{section.duration}</p>
                  <p className="text-gray-700 mt-1">{section.tasks}</p>
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
              <FaCheckCircle className="mr-2 text-red-500" /> Scoring System
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-red-50">
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
                      whileHover={{ backgroundColor: "#fef2f2" }}
                      className="hover:bg-red-50"
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
            <h3 className="text-2xl font-bold text-center mb-8">TOEFL FAQs</h3>
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
                    <FaCheckCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-red-600 mb-2">
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
            className="bg-red-600 rounded-lg p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready for TOEFL Success?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join our 6-week intensive TOEFL preparation program
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                Free Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
