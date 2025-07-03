"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaChalkboardTeacher,
  FaClock,
  FaFileAlt,
  FaHeadset,
  FaRegLightbulb,
  FaUniversity,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const tests = [
  {
    id: "ielts",
    name: "IELTS",
    description:
      "World's most popular English proficiency test for study, work, and migration.",
    features: [
      "Recognized by institutions worldwide",
      "Comprehensive assessment of all language skills",
      "Flexible test format options",
    ],
    color: "from-green-50 to-white",
    borderColor: "border-[#35B354]",
    icon: <FaUniversity className="text-[#35B354] text-4xl" />,
  },
  {
    id: "toefl",
    name: "TOEFL",
    description:
      "Preferred by universities, fully computer-based academic English test.",
    features: [
      "Widely accepted by institutions",
      "Computer-based testing",
      "Quick results turnaround",
    ],
    color: "from-green-50 to-white",
    borderColor: "border-[#35B354]",
    icon: <FaFileAlt className="text-[#35B354] text-4xl" />,
  },
  {
    id: "pte",
    name: "PTE",
    description:
      "Fast, computer-scored test accepted for study and visa purposes.",
    features: [
      "Quick results availability",
      "Objective scoring system",
      "Accepted by many institutions",
    ],
    color: "from-green-50 to-white",
    borderColor: "border-[#35B354]",
    icon: <FaRegLightbulb className="text-[#35B354] text-4xl" />,
  },
  {
    id: "gre",
    name: "GRE",
    description:
      "Comprehensive test for graduate and business school applicants.",
    features: [
      "Assesses verbal and quantitative skills",
      "Accepted for advanced programs",
      "Computer-based format",
    ],
    color: "from-green-50 to-white",
    borderColor: "border-[#35B354]",
    icon: <FaChalkboardTeacher className="text-[#35B354] text-4xl" />,
  },
];

const features = [
  {
    name: "Expert Instructors",
    description: "Learn from certified trainers with extensive experience",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Flexible Scheduling",
    description: "Multiple batch timings to suit your availability",
    icon: FaClock,
  },
  {
    name: "Personalized Feedback",
    description: "Individual attention to improve your performance",
    icon: FaHeadset,
  },
  {
    name: "Comprehensive Materials",
    description: "Up-to-date study guides and practice resources",
    icon: FaFileAlt,
  },
];

export default function TestPreparationOverview() {
  return (
    <div className="pt-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/test.jpg" // Replace with your actual image path
            alt="Students studying for tests"
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#35B354]/70 to-green-800/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center min-h-[500px]">
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-lg">
              Achieve Your <span className="text-green-200">Dream</span> Test
              Scores
            </h1>
            <p className="mt-6 text-2xl max-w-3xl mx-auto text-green-100 font-medium">
              Comprehensive test preparation with expert guidance to maximize
              your potential
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/apply"
              className="flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-lg shadow-lg text-[#35B354] bg-white hover:bg-gray-50 md:py-5 md:text-xl md:px-12 transition-all hover:scale-105 transform"
            >
              Get Started
            </Link>
            <a
              href="tel:+9771234567890"
              className="flex items-center justify-center px-10 py-4 border-2 border-white text-lg font-bold rounded-lg shadow-lg text-white bg-transparent hover:bg-white/10 md:py-5 md:text-xl md:px-12 transition-all hover:scale-105 transform"
            >
              <FaHeadset className="mr-3" /> Contact Our Experts
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Tests Grid Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Test Preparation Programs
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto">
              Tailored programs to help you excel in your chosen test
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            {tests.map((test) => (
              <motion.div
                key={test.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`flex flex-col rounded-xl shadow-xl overflow-hidden border-t-4 ${test.borderColor} bg-gradient-to-b ${test.color} hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-center h-24 mb-6">
                      {test.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                      {test.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {test.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-3">
                      {test.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="h-5 w-5 text-[#35B354] mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-6 bg-white bg-opacity-70">
                  <Link
                    href={`/test-preparation/${test.id}`}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#35B354] hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Why Choose Our Preparation Programs?
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto">
              We provide everything you need to achieve your target score
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#35B354] text-white mx-auto mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#35B354] to-green-600"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-1 p-10 sm:p-12 bg-gradient-to-b from-white to-gray-50">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Need help choosing the right test?
                </h2>
                <p className="mt-5 text-xl text-gray-600">
                  Our expert advisors will analyze your goals and recommend the
                  best test for your needs.
                </p>
                <div className="mt-10">
                  <div className="inline-flex rounded-lg shadow-lg">
                    <a
                      href="tel:+9771234567890"
                      className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#35B354] hover:bg-green-700"
                    >
                      <FaHeadset className="mr-3" /> Call Our Advisors
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 p-10 sm:p-12 bg-green-800 text-white">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Ready to start your preparation?
                </h2>
                <p className="mt-5 text-xl text-green-100">
                  Join our next batch and get access to all study materials and
                  expert guidance.
                </p>
                <div className="mt-10">
                  <div className="inline-flex rounded-lg shadow-lg">
                    <Link
                      href="/apply"
                      className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-[#35B354] bg-white hover:bg-gray-100"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Test Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Which Test is Right For You?
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto">
              Compare the tests to find your best fit
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="bg-white shadow-xl rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      IELTS
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      TOEFL
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      PTE
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      GRE
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <motion.tr variants={itemVariants}>
                    <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                      Best For
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      UK/Australia/Canada
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      USA/Europe
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Fast Results
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Master's/PhD
                    </td>
                  </motion.tr>
                  <motion.tr variants={itemVariants}>
                    <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                      Format
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Paper/Computer
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Computer-only
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Computer-only
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Computer-based
                    </td>
                  </motion.tr>
                  <motion.tr variants={itemVariants}>
                    <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                      Scoring
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Band scoring system
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Point-based system
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      AI-scored system
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-500">
                      Section-based scoring
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
