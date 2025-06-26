// app/test-preparation/page.tsx
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
      "Recognized by 10,000+ institutions",
      "Listening, Reading, Writing, Speaking",
      "Paper or Computer-based options",
    ],
    fee: "NPR 33,000 - 36,200",
    color: "from-blue-100 to-blue-50",
    borderColor: "border-blue-400",
    icon: <FaUniversity className="text-blue-500 text-4xl" />,
  },
  {
    id: "toefl",
    name: "TOEFL",
    description:
      "Preferred by US and European universities, fully computer-based academic English test.",
    features: [
      "Accepted in US and Europe",
      "Computer-based only",
      "Results in 6 days",
    ],
    fee: "$195 (~NPR 26,000)",
    color: "from-red-100 to-red-50",
    borderColor: "border-red-400",
    icon: <FaFileAlt className="text-red-500 text-4xl" />,
  },
  {
    id: "pte",
    name: "PTE",
    description:
      "Fast, AI-scored test accepted for study in Australia, NZ, and UK visas.",
    features: [
      "Results in 2-5 days",
      "Unbiased AI scoring",
      "100% Australian universities accept",
    ],
    fee: "$205 (~NPR 26,500)",
    color: "from-purple-100 to-purple-50",
    borderColor: "border-purple-400",
    icon: <FaRegLightbulb className="text-purple-500 text-4xl" />,
  },
  {
    id: "gre",
    name: "GRE",
    description:
      "Required for Master's and PhD programs (especially in the USA).",
    features: [
      "Verbal, Quantitative, Analytical",
      "Accepted for most graduate programs",
      "Computer-based test",
    ],
    fee: "$220 (~NPR 29,000)",
    color: "from-green-100 to-green-50",
    borderColor: "border-green-400",
    icon: <FaChalkboardTeacher className="text-green-500 text-4xl" />,
  },
];

const stats = [
  { id: 1, name: "Students Trained", value: "10,000+" },
  { id: 2, name: "Success Rate", value: "98%" },
  { id: 3, name: "Test Centers", value: "15+" },
  { id: 4, name: "Years Experience", value: "12+" },
];

const features = [
  {
    name: "Expert Instructors",
    description: "Learn from certified trainers with 10+ years of experience",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Flexible Scheduling",
    description: "Morning, evening and weekend batches available",
    icon: FaClock,
  },
  {
    name: "Personalized Feedback",
    description: "One-on-one sessions to improve weak areas",
    icon: FaHeadset,
  },
  {
    name: "Comprehensive Materials",
    description: "Updated study guides and practice tests",
    icon: FaFileAlt,
  },
];

export default function TestPreparationOverview() {
  return (
    <div className="pt-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative bg-gradient-to-r from-[#35B354] to-green-600 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div variants={fadeIn} className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-20"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your Pathway to Global Education
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Comprehensive test preparation for IELTS, TOEFL, PTE & GRE with
              expert guidance
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/apply"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#35B354] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105"
            >
              Apply Now
            </Link>
            <a
              href="tel:+9771234567890"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105"
            >
              <FaHeadset className="mr-2" /> Call Now
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
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Test
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Select the right test for your academic and career goals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {tests.map((test) => (
              <motion.div
                key={test.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`flex flex-col rounded-xl shadow-lg overflow-hidden border-t-4 ${test.borderColor} bg-gradient-to-b ${test.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-center h-20 mb-4">
                      {test.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
                      {test.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">
                      {test.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-2">
                      {test.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center font-medium text-gray-900">
                      Exam Fee:{" "}
                      <span className="text-gray-700">{test.fee}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white bg-opacity-70">
                  <Link
                    href={`/test-preparation/${test.id}`}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#35B354] hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Trusted by Thousands of Students
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
              Our proven track record speaks for itself
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gray-800 rounded-lg"
              >
                <div className="text-4xl font-extrabold text-[#35B354] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-300">
                  {stat.name}
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
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Preparation Programs?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
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
                className="text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#35B354] text-white mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Test Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Which Test is Right For You?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Compare the tests to find your best fit
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      IELTS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      TOEFL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      PTE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      GRE
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <motion.tr variants={itemVariants}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Best For
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      UK/Australia/Canada
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      USA/Europe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Fast Results
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Master's/PhD
                    </td>
                  </motion.tr>
                  <motion.tr variants={itemVariants}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Format
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Paper/Computer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Computer-only
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Computer-only
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Computer-based
                    </td>
                  </motion.tr>
                  <motion.tr variants={itemVariants}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Scoring
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Band 0-9
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0-120
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      10-90 (AI scored)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      130-170 per section
                    </td>
                  </motion.tr>
                  <motion.tr variants={itemVariants}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Results Time
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      13 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      6 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2-5 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      10-15 days
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#35B354] to-green-600"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-1 p-8 sm:p-10 bg-gradient-to-b from-white to-gray-50">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Need help choosing the right test?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our expert advisors will analyze your goals and recommend the
                  best test for your needs.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="tel:+9771234567890"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#35B354] hover:bg-green-700"
                    >
                      <FaHeadset className="mr-2" /> Call Our Advisors
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 p-8 sm:p-10 bg-gray-900 text-white">
                <h2 className="text-3xl font-extrabold">
                  Ready to start your preparation?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Join our next batch and get access to all study materials and
                  expert guidance.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      href="/apply"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#35B354] bg-white hover:bg-gray-100"
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

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Hear from our students who achieved their dream scores
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">
                    {item}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Student Name
                    </h4>
                    <p className="text-gray-500">IELTS Band 8.5</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The instructors were incredibly knowledgeable and the
                  practice materials were exactly what I needed. I improved my
                  score by 1.5 bands in just 6 weeks!"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
