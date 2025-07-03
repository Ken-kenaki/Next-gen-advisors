"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestPreparation() {
  return (
    <div className="bg-gray-900 p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-[#35B354]">Test Preparation</span> Support
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We help students prepare for all major international entrance
                exams with expert guidance and resources.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#35B354] mb-2">IELTS</h3>
                  <p className="text-gray-600 text-sm">
                    English proficiency test
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#35B354] mb-2">TOEFL</h3>
                  <p className="text-gray-600 text-sm">American English test</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#35B354] mb-2">SAT</h3>
                  <p className="text-gray-600 text-sm">
                    Undergraduate admissions
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#35B354] mb-2">GRE</h3>
                  <p className="text-gray-600 text-sm">Graduate admissions</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-[#35B354] text-white font-medium rounded-lg hover:bg-[#2e9b4a] transition-colors shadow-md">
                Learn About Test Prep
              </button>
            </div>
            <div className="order-2 lg:order-1 relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/test.jpg"
                alt="Test Preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
