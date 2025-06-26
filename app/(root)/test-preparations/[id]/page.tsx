"use client";

import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Type definitions
type SyllabusItem = {
  title: string;
  items: string[];
};

type TestPreparation = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  longDescription: string;
  duration: string;
  students: string;
  rating: number;
  features: string[];
  syllabus: SyllabusItem[];
  image: string;
  color: string;
};

const testPreparations = {
  ielts: {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "Master the IELTS exam with our comprehensive preparation program designed to help you achieve your target band score.",
    longDescription:
      "Nextgen Advisors' IELTS preparation program is meticulously crafted to help students achieve their desired band scores. We offer comprehensive training across all four modules: Listening, Reading, Writing, and Speaking. Our certified instructors provide personalized feedback and proven strategies tailored to your strengths and weaknesses. With regular mock tests and performance analysis, we ensure you're fully prepared to excel in your IELTS exam.",
    duration: "8-12 weeks",
    students: "1,200+",
    rating: 4.9,
    features: [
      "Personalized study plan based on diagnostic test",
      "Expert instructors with 10+ years experience",
      "Speaking practice with IELTS examiners",
      "Writing tasks with detailed feedback",
      "Full-length computer-based mock tests",
      "Score improvement guarantee",
    ],
    syllabus: [
      {
        title: "Listening Module",
        items: [
          "Understanding various English accents",
          "Effective note-taking strategies",
          "Predicting answers from context",
          "Time management techniques",
        ],
      },
      {
        title: "Reading Module",
        items: [
          "Skimming and scanning methods",
          "Dealing with complex academic texts",
          "Answering different question types",
          "Vocabulary building exercises",
        ],
      },
      {
        title: "Writing Module",
        items: [
          "Task 1 (Academic/General) structure",
          "Task 2 essay planning and execution",
          "Academic vocabulary enhancement",
          "Grammar accuracy and range",
        ],
      },
      {
        title: "Speaking Module",
        items: [
          "Fluency and coherence development",
          "Lexical resource expansion",
          "Grammatical range and accuracy",
          "Pronunciation improvement",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    color: "from-blue-500 to-[#35B354]",
  },
  toefl: {
    id: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description:
      "Excel in TOEFL with our specialized preparation for academic English proficiency.",
    longDescription:
      "Nextgen Advisors' TOEFL program focuses on the skills needed to succeed in academic English environments. We provide targeted training for each section of the test: Reading, Listening, Speaking, and Writing. Our program includes practice with authentic TOEFL materials, proven strategies for each question type, and personalized feedback to help you achieve your target score. With our computer-based test simulations, you'll be fully prepared for the actual exam environment.",
    duration: "6-10 weeks",
    students: "950+",
    rating: 4.8,
    features: [
      "Academic English skill development",
      "Integrated speaking and writing tasks",
      "Computer-based test simulations",
      "Personalized scoring and feedback",
      "Full-length practice tests",
      "Time management strategies",
    ],
    syllabus: [
      {
        title: "Reading Section",
        items: [
          "Academic passage comprehension strategies",
          "Vocabulary in context techniques",
          "Question type approaches",
          "Passage mapping methods",
        ],
      },
      {
        title: "Listening Section",
        items: [
          "Lecture comprehension strategies",
          "Conversation analysis techniques",
          "Effective note-taking systems",
          "Answer prediction methods",
        ],
      },
      {
        title: "Speaking Section",
        items: [
          "Integrated tasks practice",
          "Independent speaking organization",
          "Pronunciation refinement",
          "Response timing strategies",
        ],
      },
      {
        title: "Writing Section",
        items: [
          "Integrated writing task strategies",
          "Independent essay structure",
          "Academic grammar and vocabulary",
          "Essay scoring criteria",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    color: "from-green-500 to-[#35B354]",
  },
  gmat: {
    id: "gmat",
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description:
      "Comprehensive GMAT preparation for business school applicants with quant and verbal focus.",
    longDescription:
      "Nextgen Advisors' GMAT program is designed to help you achieve a competitive score for top business schools. We cover all sections of the test: Quantitative, Verbal, Integrated Reasoning, and Analytical Writing. Our expert instructors provide targeted strategies for each question type, with special emphasis on data sufficiency, critical reasoning, and sentence correction. With our adaptive learning platform and regular full-length practice tests, you'll be fully prepared to tackle the computer-adaptive GMAT exam.",
    duration: "10-14 weeks",
    students: "800+",
    rating: 4.8,
    features: [
      "Quantitative problem solving techniques",
      "Verbal reasoning strategies",
      "Integrated reasoning practice",
      "Analytical writing assessment",
      "Computer-adaptive test simulations",
      "Personalized performance tracking",
    ],
    syllabus: [
      {
        title: "Quantitative Section",
        items: [
          "Problem solving approaches",
          "Data sufficiency strategies",
          "Algebra and arithmetic concepts",
          "Geometry and word problems",
        ],
      },
      {
        title: "Verbal Section",
        items: [
          "Reading comprehension techniques",
          "Critical reasoning methods",
          "Sentence correction rules",
          "Time management strategies",
        ],
      },
      {
        title: "Integrated Reasoning",
        items: [
          "Multi-source reasoning approaches",
          "Graphics interpretation",
          "Two-part analysis techniques",
          "Table analysis methods",
        ],
      },
      {
        title: "Analytical Writing",
        items: [
          "Argument analysis structure",
          "Essay organization techniques",
          "Time management for writing",
          "Scoring criteria breakdown",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    color: "from-purple-500 to-[#35B354]",
  },
  pte: {
    id: "pte",
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    description:
      "Excel in PTE Academic with our AI-powered preparation for computer-based English testing.",
    longDescription:
      "Nextgen Advisors' PTE Academic preparation program leverages cutting-edge technology to help you achieve your best possible score. We focus on the unique requirements of this computer-based test, providing specialized training for each question type. Our AI-powered tools give you instant feedback on your speaking and writing responses, while our expert instructors guide you through the most effective test-taking strategies. With our realistic test environment simulations, you'll gain the confidence and skills needed to excel on test day.",
    duration: "6-10 weeks",
    students: "700+",
    rating: 4.7,
    features: [
      "AI-powered speaking evaluation",
      "Computer-based test environment",
      "Automated writing scoring",
      "Integrated skills training",
      "Real exam simulations",
      "Personalized study roadmap",
    ],
    syllabus: [
      {
        title: "Speaking & Writing",
        items: [
          "Read aloud techniques",
          "Repeat sentence strategies",
          "Describe image templates",
          "Essay writing structure",
        ],
      },
      {
        title: "Reading",
        items: [
          "Multiple-choice approaches",
          "Re-order paragraphs methods",
          "Fill in the blanks techniques",
          "Reading time management",
        ],
      },
      {
        title: "Listening",
        items: [
          "Summarize spoken text strategies",
          "Multiple-choice answer techniques",
          "Fill in the blanks approaches",
          "Highlight correct summary methods",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    color: "from-orange-500 to-[#35B354]",
  },
} as const;

type TestId = keyof typeof testPreparations;

interface PageProps {
  params: {
    id: string;
  };
}

export default function TestPreparationDetailPage({ params }: PageProps) {
  const test = testPreparations[params.id as TestId];

  if (!test) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#35B354] mb-4">
            Test preparation not found
          </h1>
          <Link
            href="/test-preparations"
            className="text-[#35B354] hover:underline"
          >
            Back to Test Preparations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-white via-[#f5faf5] to-[#e8f5e9]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/test-preparations"
            className="flex items-center text-[#35B354] hover:text-[#2a8e43] transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Test Preparations
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-96 rounded-xl overflow-hidden mb-12 shadow-lg"
        >
          <img
            src={test.image}
            alt={test.name}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${test.color} opacity-85`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {test.name} Preparation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/90 max-w-3xl mx-auto"
              >
                {test.fullName}
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#35B354] mb-4">
                Program Overview
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {test.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Clock size={20} className="text-[#35B354] mr-2" />
                    <span className="font-medium text-gray-800">Duration</span>
                  </div>
                  <p className="text-gray-600">{test.duration}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-[#35B354] mr-2" />
                    <span className="font-medium text-gray-800">Students</span>
                  </div>
                  <p className="text-gray-600">{test.students}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Star size={20} className="text-[#35B354] mr-2" />
                    <span className="font-medium text-gray-800">Rating</span>
                  </div>
                  <p className="text-gray-600">{test.rating}/5</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#35B354] mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {test.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#35B354] mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#35B354] mb-4">
                Detailed Syllabus
              </h2>
              <div className="space-y-4">
                {test.syllabus.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-[#35B354] text-white px-4 py-3 font-medium">
                      {section.title}
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-[#35B354] mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-8 mb-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#35B354] mb-4">
                Program Highlights
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <BookOpen
                    size={20}
                    className="text-[#35B354] mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Comprehensive {test.name} curriculum
                  </span>
                </div>
                <div className="flex items-start">
                  <Target
                    size={20}
                    className="text-[#35B354] mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Score improvement guarantee
                  </span>
                </div>
                <div className="flex items-start">
                  <Award
                    size={20}
                    className="text-[#35B354] mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Certified expert instructors
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#35B354] text-white py-3 rounded-lg hover:bg-[#2a8e43] transition-colors mb-4 font-medium shadow-md hover:shadow-lg">
                <Link href="/contact">Get Free Consultation</Link>
              </button>

              <button className="w-full border-2 border-[#35B354] text-[#35B354] py-3 rounded-lg hover:bg-[#35B354] hover:text-white transition-colors font-medium">
                Download Complete Syllabus
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#35B354] mb-4">
                Why Choose Nextgen Advisors?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#35B354] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">95% success rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35B354] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">10+ years experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35B354] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">Personalized coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35B354] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#35B354] mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">University partnerships</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
