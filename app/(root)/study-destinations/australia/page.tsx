"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, Clock, Briefcase, DollarSign, FileText, Calendar } from "lucide-react";
import Image from "next/image";

export default function StudyInAustralia() {
  const universities = [
    "University of Melbourne",
    "Australian National University (ANU)",
    "University of Sydney",
    "University of Queensland (UQ)",
    "Monash University",
    "UNSW Sydney",
    "Deakin University (popular among Nepali students)"
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "Offer Letter Required",
      description: "You must have an offer of admission from a recognized Australian educational institution and meet academic and English language standards."
    },
    {
      icon: DollarSign,
      title: "Proof of Funds",
      description: "Show evidence that you can cover tuition fees, living costs, and health insurance during your stay."
    },
    {
      icon: BookOpen,
      title: "English Proficiency",
      description: "Take an accepted English test like IELTS, TOEFL, or PTE to meet the language requirement."
    },
    {
      icon: Briefcase,
      title: "GTE Statement",
      description: "Provide a Genuine Temporary Entrant (GTE) statement showing your intent to study temporarily and return home after your course."
    }
  ];

  const intakes = [
    {
      name: "Semester 1",
      timeframe: "February to June",
      application: "August to November (previous year)"
    },
    {
      name: "Semester 2",
      timeframe: "July to November",
      application: "December to April (same year)"
    },
    {
      name: "Summer Intake (limited courses)",
      timeframe: "December to February",
      application: "May to July (same year)"
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to study in Australia?",
      answer: "Tuition fees vary by course and university: Undergraduate: AUD 20,000 – AUD 45,000 per year, Postgraduate: AUD 22,000 – AUD 50,000 per year. Living expenses are around AUD 1,500 – AUD 2,500 per month, depending on the city."
    },
    {
      question: "Can international students work while studying in Australia?",
      answer: "Yes! Student visa holders can work up to 48 hours per fortnight during study periods and full-time during scheduled holidays. This helps with living costs and gaining work experience."
    },
    {
      question: "Are scholarships available for Nepali students in Australia?",
      answer: "Absolutely. Many universities offer merit-based scholarships, and the Australian Government provides options like: Australia Awards, Destination Australia Scholarships, and university-specific financial aid."
    },
    {
      question: "What are the main intakes in Australian universities?",
      answer: "There are two main intakes: Semester 1: February – June (apply by Aug–Nov), Semester 2: July – Nov (apply by Dec–Apr). Some institutions also offer a Summer Intake in December."
    },
    {
      question: "What documents are required for an Australian student visa?",
      answer: "Confirmation of Enrollment (CoE), Valid passport, Proof of funds, English language test results (IELTS, TOEFL, etc.), Genuine Temporary Entrant (GTE) statement, OSHC (health insurance), Visa application and biometrics."
    }
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
                src="https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Australian University Campus"
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
                  Study in <span className="text-[#35B354]">Australia</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-xl text-gray-300"
                >
                  World-class education with stunning landscapes. Australia offers innovative teaching methods and globally recognized qualifications.
                </motion.p>
              </div>

              {/* Application Form */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">Apply Online</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]" />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input type="tel" id="mobile" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]" />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Study Destination</label>
                    <select id="destination" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#35B354] focus:border-[#35B354]">
                      <option>Australia</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#35B354] hover:bg-[#2e9b4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35B354]">
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
              <a href="#universities" className="text-sm font-medium text-gray-700 hover:text-[#35B354]">Top Universities</a>
              <a href="#requirements" className="text-sm font-medium text-gray-700 hover:text-[#35B354]">Study Requirements</a>
              <a href="#intakes" className="text-sm font-medium text-gray-700 hover:text-[#35B354]">Intakes</a>
              <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-[#35B354]">FAQ</a>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience <span className="text-[#35B354]">Australian Education</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover why Australia is a top destination for international students</p>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <iframe
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/YoX8vQdWk6w"
                title="Australian University Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Top Universities */}
        <div id="universities" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top <span className="text-[#35B354]">Universities</span> in Australia</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Partner institutions with global recognition and academic excellence</p>
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
                        <h3 className="text-lg font-medium text-gray-900">{university}</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Australia Study <span className="text-[#35B354]">Requirements</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Essential criteria for Nepali students planning to study in Australia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <h3 className="ml-3 text-lg font-medium text-gray-900">{requirement.title}</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Australian University <span className="text-[#35B354]">Intakes</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Plan your application according to the intake periods</p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                {/* Header */}
                <div className="bg-[#35B354] p-4 text-white font-bold">Intake</div>
                <div className="bg-[#35B354] p-4 text-white font-bold">Timeframe</div>
                <div className="bg-[#35B354] p-4 text-white font-bold">Application Period</div>
                <div className="bg-[#35B354] p-4 text-white font-bold">Best For</div>

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
                      <div className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{intake.name}</div>
                      <div className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{intake.timeframe}</div>
                      <div className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{intake.application}</div>
                      <div className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        {index === 0 ? "Most courses available" :
                            index === 1 ? "Mid-year starters" :
                                "Short courses/summer programs"}
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
                Answers to common questions about studying in Australia
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Australian Education Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Our expert advisors are here to guide you through every step of the application process.</p>
            <button className="bg-white text-[#35B354] px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
  );
}