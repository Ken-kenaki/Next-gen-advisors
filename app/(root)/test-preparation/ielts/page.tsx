// app/test-preparation/ielts/page.tsx
"use client";

import {
  motion,
  useAnimation,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaClock,
  FaChartLine,
  FaUniversity,
  FaGlobeAmericas,
  FaHeadphones,
  FaPenAlt,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function IELTSPreparation() {
  const controls = useAnimation();

  const testTypes = [
    {
      name: "IELTS Academic",
      purpose: "For university admissions",
      description:
        "Measures English language proficiency for academic environments.",
      icon: <FaUniversity className="text-blue-500 text-xl" />,
    },
    {
      name: "IELTS General Training",
      purpose: "For work/migration (UK, Canada, Australia)",
      description:
        "Focuses on basic survival skills in broad social and workplace contexts.",
      icon: <FaGlobeAmericas className="text-blue-500 text-xl" />,
    },
    {
      name: "IELTS UKVI",
      purpose: "UK visa applications",
      description: "Approved for UK Visa and Immigration (UKVI) applications.",
      icon: <FaBookOpen className="text-blue-500 text-xl" />,
    },
    {
      name: "IELTS Life Skills",
      purpose: "UK family/spouse visas",
      description:
        "Tests only Speaking and Listening skills at A1 or B1 level.",
      icon: <FaComments className="text-blue-500 text-xl" />,
    },
  ];

  const examFormat = [
    {
      section: "Listening",
      duration: "30 minutes",
      details: "4 sections, 40 questions",
      icon: <FaHeadphones className="text-green-500 text-xl" />,
    },
    {
      section: "Reading",
      duration: "60 minutes",
      details: "3 long passages (Academic) / real-life texts (General)",
      icon: <FaBookOpen className="text-green-500 text-xl" />,
    },
    {
      section: "Writing",
      duration: "60 minutes",
      details: "Report/Letter + Essay",
      icon: <FaPenAlt className="text-green-500 text-xl" />,
    },
    {
      section: "Speaking",
      duration: "11-14 minutes",
      details: "Face-to-face interview",
      icon: <FaComments className="text-green-500 text-xl" />,
    },
  ];

  const scoreBands = [
    { band: "9", level: "Expert" },
    { band: "8", level: "Very Good" },
    { band: "7", level: "Good" },
    { band: "6", level: "Competent" },
    { band: "5", level: "Modest" },
    { band: "4", level: "Limited" },
  ];

  const preparationTimeline = [
    { week: "1-2", focus: "Assessment & Foundation" },
    { week: "3-4", focus: "Skill Development" },
    { week: "5-6", focus: "Practice Tests" },
    { week: "7-8", focus: "Test Strategies" },
  ];

  const faqs = [
    {
      question: "How often can I take the IELTS test?",
      answer:
        "There's no limit to how many times you can take IELTS. You can retake the test as soon as you feel ready.",
    },
    {
      question: "How long is my IELTS score valid?",
      answer: "IELTS scores are valid for 2 years from the test date.",
    },
    {
      question: "Can I combine scores from multiple tests?",
      answer:
        "No, you can't combine scores. You must achieve all your required band scores in a single test.",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial="hidden"
        animate={controls}
        onViewportEnter={() => controls.start("visible")}
        variants={containerVariants}
        className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/ielts-logo.png"
                alt="IELTS"
                width={200}
                height={100}
                className="object-contain"
              />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              IELTS Preparation 🌍
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-3xl mx-auto text-xl text-gray-500"
            >
              The world's most popular English proficiency test for study, work,
              and migration.
            </motion.p>
          </motion.div>

          {/* What is IELTS Section */}
          <motion.div
            variants={scaleUp}
            className="bg-white shadow-lg rounded-lg overflow-hidden mb-16"
          >
            <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-500 to-blue-600">
              <motion.h2
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-extrabold text-white mb-4"
              >
                What is IELTS?
              </motion.h2>
              <p className="text-lg text-blue-100">
                The International English Language Testing System (IELTS) is
                recognized by over 10,000 institutions worldwide. It evaluates
                your Listening, Reading, Writing, and Speaking skills in
                English.
              </p>
            </div>
            <div className="p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-gray-900 mb-6 flex items-center"
                  >
                    <FaBookOpen className="mr-2 text-blue-500" /> Test Types
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-6"
                  >
                    {testTypes.map((type, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg"
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">{type.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {type.name}
                            </h4>
                            <p className="text-sm text-blue-600">
                              {type.purpose}
                            </p>
                            <p className="mt-1 text-gray-600">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <div>
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-gray-900 mb-6 flex items-center"
                  >
                    <FaClock className="mr-2 text-green-500" /> Exam Format
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="space-y-6"
                  >
                    {examFormat.map((section, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r-lg"
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">{section.icon}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {section.section}
                            </h4>
                            <p className="text-sm text-green-600">
                              {section.duration}
                            </p>
                            <p className="mt-1 text-gray-600">
                              {section.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Score Bands Section */}
          <motion.div
            variants={scaleUp}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FaChartLine className="mr-2 text-purple-500" /> IELTS Band Scores
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {scoreBands.map((band, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-purple-600">
                    {band.band}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{band.level}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            {/* Fees Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Exam Fees in Nepal (2024)
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">Computer-Based</span>
                  <span className="text-gray-700 font-semibold">
                    NPR 33,000
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">Paper-Based</span>
                  <span className="text-gray-700 font-semibold">
                    NPR 36,200
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium">UKVI</span>
                  <span className="text-gray-700 font-semibold">
                    NPR 34,000
                  </span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="font-medium">Life Skills</span>
                  <span className="text-gray-700 font-semibold">
                    NPR 28,000
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Preparation Timeline */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                8-Week Preparation Plan
              </h3>
              <div className="space-y-4">
                {preparationTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start border-l-4 border-green-500 pl-4 py-2"
                  >
                    <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mr-4">
                      Week {item.week}
                    </div>
                    <div className="text-gray-700">{item.focus}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div variants={scaleUp} className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Anita Shrestha",
                  score: "Band 8.5",
                  quote:
                    "The writing strategies helped me improve from 6.5 to 7.5 in just 4 weeks!",
                  image: "/images/testimonial1.jpg",
                },
                {
                  name: "Rajiv Gurung",
                  score: "Band 7.5",
                  quote:
                    "Excellent speaking practice sessions with native speakers boosted my confidence.",
                  image: "/images/testimonial2.jpg",
                },
                {
                  name: "Priya Basnet",
                  score: "Band 8.0",
                  quote:
                    "The detailed feedback on my writing tasks was invaluable for my improvement.",
                  image: "/images/testimonial3.jpg",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <div className="text-blue-600 font-medium">
                        {testimonial.score}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={scaleUp}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1">
                  <motion.h2
                    whileHover={{ scale: 1.01 }}
                    className="text-2xl font-extrabold text-white sm:text-3xl"
                  >
                    Ready to start your IELTS journey?
                  </motion.h2>
                  <motion.p
                    whileHover={{ scale: 1.01 }}
                    className="mt-3 max-w-3xl text-lg text-blue-100"
                  >
                    Join our expert-led IELTS preparation classes and get the
                    score you need.
                  </motion.p>
                </div>
                <div className="mt-8 flex md:mt-0 md:ml-8 space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href="/apply"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-100"
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <a
                      href="tel:+9771234567890"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                    >
                      Call Now
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
}
