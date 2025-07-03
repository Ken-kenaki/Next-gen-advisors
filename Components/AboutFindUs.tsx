"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FindUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-[#35B354]">Find</span> Us
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-[#35B354] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Address
                  </h3>
                  <p className="text-gray-600">Manbhawan, Lalitpur, Nepal</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-[#35B354] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">
                    015413555 | 9709195734 | 9709195735
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#35B354] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">nextgenadvisors7@gmail.com</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+97715413555"
              className="inline-flex items-center px-6 py-3 bg-[#35B354] text-white font-medium rounded-lg hover:bg-[#2e9b4a] transition-colors shadow-md"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>

          <div className="h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.383715447057!2d85.3124665!3d27.6695539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c0ec6b1f6b%3A0x5149ab49a5c9b8d!2sManbhawan%2C%20Lalitpur%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
