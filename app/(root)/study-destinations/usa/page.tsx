"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Clock,
  Briefcase,
  DollarSign,
  FileText,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function StudyInUSA() {
  const universities = [
    "Harvard University",
    "Massachusetts Institute of Technology (MIT)",
    "Stanford University",
    "University of California – Berkeley (UC Berkeley)",
    "New York University (NYU)",
    "University of Illinois Chicago (UIC)",
    "Arizona State University (affordable & popular)",
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "University Admission",
      description:
        "Gain admission to a SEVP-certified U.S. college/university to receive Form I-20 for visa process.",
    },
    {
      icon: BookOpen,
      title: "Academic Requirements",
      description:
        "Submit transcripts and standardized test scores (SAT/ACT for undergrad, GRE/GMAT for grad).",
    },
    {
      icon: Briefcase,
      title: "English Proficiency",
      description:
        "Provide IELTS/TOEFL/PTE scores meeting university requirements.",
    },
    {
      icon: DollarSign,
      title: "Financial Proof",
      description:
        "Show sufficient funds for tuition and living expenses through bank statements or sponsorship.",
    },
    {
      icon: FileText,
      title: "F-1 Visa Process",
      description:
        "Complete DS-160 form, pay SEVIS fee, and attend visa interview with required documents.",
    },
  ];

  const intakes = [
    {
      name: "Fall Intake",
      timeframe: "August – December",
      application: "November – April (Previous year)",
      note: "Primary intake with most programs",
    },
    {
      name: "Spring Intake",
      timeframe: "January – May",
      application: "July – October (Previous year)",
      note: "Secondary intake with limited programs",
    },
    {
      name: "Summer Intake",
      timeframe: "May – August",
      application: "January – March (Same year)",
      note: "Limited courses available",
    },
  ];

  const faqs = [
    {
      question: "How much does it cost to study in the USA?",
      answer:
        "Costs vary by university and program: Undergraduate: USD 20,000 – USD 40,000 per year, Graduate: USD 25,000 – USD 50,000 per year. Living expenses are typically USD 10,000 – USD 15,000 per year, depending on the location.",
    },
    {
      question: "Can international students work while studying in the USA?",
      answer:
        "Yes. Students with an F-1 visa can work: On-campus: up to 20 hours/week during semesters, Full-time during holidays. For off-campus work, CPT (Curricular Practical Training) and OPT (Optional Practical Training) are available after meeting eligibility.",
    },
    {
      question: "Are scholarships available for Nepali/international students?",
      answer:
        "Yes. Many universities offer merit-based scholarships, assistantships, and need-based aid. Top options include: Fulbright Scholarships, University-specific awards, and International student grants.",
    },
    {
      question: "When should I apply to U.S. universities?",
      answer:
        "Start applying 10–12 months in advance of your intended intake. Fall Intake (August): Apply by November – April of the previous year, Spring Intake (January): Apply by July – October.",
    },
    {
      question: "What documents are needed for a U.S. student visa?",
      answer:
        "Key documents include: Form I-20 (from the university), DS-160 visa application, Passport, Proof of funds, SEVIS fee receipt, Visa interview appointment confirmation, Academic records and English test scores.",
    },
  ];

  // FAQ Accordion State
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-25">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/usa.jpg"
            alt="American University Campus"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Study in the <span className="text-[#35B354]">USA</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-xl text-gray-300"
              >
                World-leading education with unparalleled opportunities. The
                U.S. offers cutting-edge research facilities and global
                recognition.
              </motion.p>
            </div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Apply Online
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Study Destination
                  </label>
                  <select
                    id="destination"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#35B354] hover:bg-[#2e9b4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35B354]"
                >
                  Apply Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#35B354]/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#universities"
              className="text-sm font-medium text-gray-700 hover:text-[#35B354]"
            >
              Top Universities
            </a>
            <a
              href="#requirements"
              className="text-sm font-medium text-gray-700 hover:text-[#35B354]"
            >
              Study Requirements
            </a>
            <a
              href="#intakes"
              className="text-sm font-medium text-gray-700 hover:text-[#35B354]"
            >
              Intakes
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-700 hover:text-[#35B354]"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience <span className="text-[#35B354]">USA Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes American universities among the best in the
            world
          </p>
        </div>

        {/* Video Container - This will give the video a fixed aspect ratio */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Video/usa.mp4"
            title="USA University Experience"
            controls
            loop
            muted
            playsInline
            autoPlay
          >
            <p>Your browser does not support HTML5 video.</p>
          </video>
        </div>
      </div>

      {/* Top Universities */}
      <div id="universities" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top <span className="text-[#35B354]">Universities</span> in the
              USA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              World-renowned institutions offering exceptional education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-[#35B354]/10 h-10 w-10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-[#35B354]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {university}
                    </h3>
                    {university.includes("Arizona State") && (
                      <span className="inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full bg-[#35B354]/10 text-[#35B354]">
                        Affordable Option
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Study Requirements */}
      <div id="requirements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              U.S. Study <span className="text-[#35B354]">Requirements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential criteria for Nepali students planning to study in the
              USA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {studyRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#35B354]"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-[#35B354]/10 h-12 w-12 rounded-full flex items-center justify-center">
                    <requirement.icon className="h-6 w-6 text-[#35B354]" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    {requirement.title}
                  </h3>
                </div>
                <p className="text-gray-600">{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Intakes */}
      <div id="intakes" className="bg-[#35B354]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              U.S. University <span className="text-[#35B354]">Intakes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan your application according to the intake periods
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Header */}
              <div className="bg-[#35B354] p-4 text-white font-bold">
                Intake
              </div>
              <div className="bg-[#35B354] p-4 text-white font-bold">
                Timeframe
              </div>
              <div className="bg-[#35B354] p-4 text-white font-bold">
                Application Period
              </div>
              <div className="bg-[#35B354] p-4 text-white font-bold">Notes</div>

              {/* Rows */}
              {intakes.map((intake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contents"
                >
                  <div
                    className={`p-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {intake.name}
                  </div>
                  <div
                    className={`p-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {intake.timeframe}
                  </div>
                  <div
                    className={`p-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {intake.application}
                  </div>
                  <div
                    className={`p-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {intake.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#35B354]">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about studying in the USA
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                    whileTap={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-[#35B354]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#35B354] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your American Education Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our expert advisors are here to guide you through every step of the
            application process.
          </p>
          <button className="bg-white text-[#35B354] px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
