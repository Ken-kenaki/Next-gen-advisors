"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Check,
  BookOpen,
  Clock,
  Briefcase,
  PoundSterling,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function StudyInUK() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const universities = [
    "University of Oxford",
    "University of Cambridge",
    "University College London (UCL)",
    "University of Manchester",
    "University of Edinburgh",
    "University of Birmingham",
    "University of Glasgow",
    "Cardiff Metropolitan University",
    "Middlesex University",
    "Newcastle University",
    "University of Essex",
    "University of Exeter",
    "London South Bank University",
    "Northumbria University",
  ];

  const faqs = [
    {
      question: "How much does it cost to study in the UK?",
      answer:
        "Tuition fees in the UK vary depending on the university and course, but on average: Undergraduate: £10,000 – £20,000 per year, Postgraduate: £12,000 – £25,000 per year. Additional costs include accommodation, food, travel, and other living expenses, which typically range between £800 – £1,200 per month, depending on the city.",
    },
    {
      question: "Can I work while studying in the UK?",
      answer:
        "Yes. International students on a Student Visa can work up to 20 hours per week during term time and full-time during holidays. This helps students gain experience and support their living costs. Always check your visa and university regulations.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Absolutely. Many UK universities offer merit-based, need-based, and course-specific scholarships. Additionally, government-funded options like the Chevening Scholarships, GREAT Scholarships, and Commonwealth Scholarships are available for eligible Nepali students.",
    },
    {
      question: "Is the cost of living high in the UK?",
      answer:
        "It depends on the location. London and other major cities have higher living costs, while smaller towns and rural areas tend to be more affordable. Students can save by choosing university accommodations or shared housing and by taking advantage of student discounts.",
    },
    {
      question: "What documents do I need to apply for a UK Student Visa?",
      answer:
        "You'll need a valid passport, CAS (Confirmation of Acceptance for Studies) from your university, proof of finances, English language test results, TB test results (if applicable), a visa application form, passport-sized photos, and payment of the visa fee.",
    },
  ];

  return (
    <div className="bg-white pt-30">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/uk.jpg"
            alt="UK University Campus"
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
                Study in the{" "}
                <span className="text-[#35B354]">United Kingdom</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-xl text-gray-300"
              >
                World-class education with global recognition. The UK offers
                exceptional academic opportunities with some of the oldest and
                most prestigious universities in the world.
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
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>USA</option>
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
            Experience <span className="text-[#35B354]">UK Education</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes UK universities among the best in the world
          </p>
        </div>

        {/* Video Container - This will give the video a fixed aspect ratio */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Video/uk.mp4"
            title="UK University Experience"
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
              Top <span className="text-[#35B354]">Universities</span> in the UK
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner institutions with global recognition and academic
              excellence
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
              UK Study <span className="text-[#35B354]">Requirements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential criteria for Nepali students planning to study in the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#35B354]"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-[#35B354]/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#35B354]" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  University Acceptance (CAS)
                </h3>
              </div>
              <p className="text-gray-600">
                Receive a formal offer and Confirmation of Acceptance for
                Studies (CAS) from a UK university to begin your visa process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#35B354]"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-[#35B354]/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-[#35B354]" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  English Language Proficiency
                </h3>
              </div>
              <p className="text-gray-600">
                Submit valid English test scores such as IELTS, TOEFL, or PTE
                Academic, as required by your chosen university.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#35B354]"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-[#35B354]/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <PoundSterling className="h-6 w-6 text-[#35B354]" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Financial Requirements
                </h3>
              </div>
              <p className="text-gray-600">
                Provide proof of sufficient funds to cover tuition and living
                expenses through bank statements or sponsorship letters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#35B354]"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-[#35B354]/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-[#35B354]" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Student Visa & Health Insurance
                </h3>
              </div>
              <p className="text-gray-600">
                Apply for a UK Student Visa (Tier 4/Student Route) with all
                required documents and register for NHS healthcare if studying
                for over 6 months.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Intakes */}
      <div id="intakes" className="bg-[#35B354]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UK University <span className="text-[#35B354]">Intakes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan your application according to the intake periods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="text-[#35B354] mr-2" /> Major Intakes in the
                UK
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    September/October Intake (Main Intake)
                  </h4>
                  <p className="text-gray-600">
                    This is the primary intake, offering the widest range of
                    courses and university options. Most undergraduate and
                    postgraduate programs accept students during this period.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    January/February Intake (Secondary Intake)
                  </h4>
                  <p className="text-gray-600">
                    A limited number of programs are available during this
                    intake. Ideal for students who missed the main deadline or
                    need extra preparation time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="text-[#35B354] mr-2" /> Application
                Deadlines
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    September/October Intake
                  </h4>
                  <p className="text-gray-600">Apply between May and June</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    January/February Intake
                  </h4>
                  <p className="text-gray-600">
                    Apply between September and October
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Rolling Admissions
                  </h4>
                  <p className="text-gray-600">
                    Some UK universities offer rolling admissions, meaning
                    applications are accepted and reviewed throughout the year
                    until programs are full. However, applying early increases
                    your chances of receiving scholarships, visa approvals, and
                    preferred course selections.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Answers to common questions about studying in the UK
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
            Ready to Begin Your UK Education Journey?
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

function Calendar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
