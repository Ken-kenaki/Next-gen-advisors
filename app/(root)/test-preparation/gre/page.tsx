"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalculator,
  FaBook,
  FaPenFancy,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
  FaUniversity,
} from "react-icons/fa";

export default function GREPreparation() {
  const sections = [
    {
      name: "Verbal Reasoning",
      duration: "Two 30-min sections",
      tasks: "Text completion, reading comprehension",
      icon: <FaBook className="text-[#35B354] text-2xl" />,
    },
    {
      name: "Quantitative",
      duration: "Two 35-min sections",
      tasks: "Problem solving, data analysis",
      icon: <FaCalculator className="text-[#35B354] text-2xl" />,
    },
    {
      name: "Analytical Writing",
      duration: "60 minutes",
      tasks: "Analyze an issue and argument",
      icon: <FaPenFancy className="text-[#35B354] text-2xl" />,
    },
  ];

  const quantTopics = [
    "Algebra (35%)",
    "Geometry (25%)",
    "Data Analysis (25%)",
    "Arithmetic (15%)",
  ];

  const verbalSkills = [
    "Vocabulary Building",
    "Reading Comprehension",
    "Text Completion",
    "Sentence Equivalence",
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

  const features = [
    {
      title: "Personalized Study Plan",
      description: "Customized to your strengths and weaknesses",
      icon: <FaCheckCircle className="text-[#35B354] text-2xl" />,
    },
    {
      title: "Expert Instructors",
      description: "Experienced GRE tutors with proven results",
      icon: <FaUniversity className="text-[#35B354] text-2xl" />,
    },
    {
      title: "Full-Length Practice Tests",
      description: "Simulated GRE testing environment",
      icon: <FaChartLine className="text-[#35B354] text-2xl" />,
    },
    {
      title: "Score Improvement Guarantee",
      description: "Or get additional coaching at no extra cost",
      icon: <FaCheckCircle className="text-[#35B354] text-2xl" />,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50"
      >
        {/* Enhanced Hero Section */}
        <div className="relative bg-gradient-to-r from-[#35B354] to-green-800 pt-44 pb-22 sm:px-6 lg:px-8 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/gre.jpg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block mb-8"
            >
              <FaUniversity className="text-white text-6xl mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6"
            >
              Master the <span className="text-green-200">GRE</span>
            </motion.h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10">
              Comprehensive preparation for graduate school admission success
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/apply-online"
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-all"
              >
                Start Your Preparation
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Test Structure Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GRE Test Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Computer-adaptive test measuring verbal, quantitative, and
                analytical writing skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#35B354] hover:shadow-xl transition-all"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {section.icon}
                      <h3 className="text-xl font-bold ml-3">{section.name}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <FaCheckCircle className="text-[#35B354] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">
                          {section.duration}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <FaCheckCircle className="text-[#35B354] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{section.tasks}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quantitative Focus Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FaCalculator className="mr-3 text-[#35B354] text-3xl" />
                    Quantitative Section
                  </h3>
                  <p className="text-gray-700 mb-6">
                    The GRE Quantitative Reasoning section measures your ability
                    to understand, interpret, and analyze quantitative
                    information and solve problems using mathematical concepts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quantTopics.map((topic, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-green-50 p-4 rounded-lg border-l-4 border-[#35B354]"
                      >
                        <p className="font-medium">{topic}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FaBook className="mr-3 text-[#35B354] text-3xl" />
                    Verbal Section
                  </h3>
                  <p className="text-gray-700 mb-6">
                    The GRE Verbal Reasoning section measures your ability to
                    analyze and evaluate written material and synthesize
                    information obtained from it.
                  </p>
                  <div className="space-y-4">
                    {verbalSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <FaCheckCircle className="text-[#35B354] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our GRE Program Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to achieve your target score
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="text-[#35B354] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Answers to common questions about GRE preparation
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#35B354]"
                >
                  <div className="flex items-start">
                    <FaChartLine className="text-[#35B354] mt-1 mr-4 text-xl flex-shrink-0" />
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

          {/* CTA Section */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#35B354] to-green-700 text-white p-12 rounded-xl text-center shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to conquer the GRE?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our proven strategies and expert guidance will help you achieve
              your best possible score
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition-all"
              >
                <Link href="apply-online">Get Started Today</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-white/10 transition-all"
              >
                <FaHeadset className="inline mr-2" />
                <Link href="tel:015413555">Speak to an Advisor</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
