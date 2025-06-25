"use client";

import { motion } from "framer-motion";
import {
  Users,
  Globe,
  BookOpen,
  Target,
  Heart,
  Star,
  CheckCircle,
  Award,
  GraduationCap,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { icon: Users, number: "5,000+", label: "Students Guided" },
    { icon: Globe, number: "10+", label: "Countries" },
    { icon: BookOpen, number: "300+", label: "Universities" },
    { icon: Award, number: "95%", label: "Success Rate" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We maintain the highest standards in our services, ensuring quality guidance for every student.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We provide honest advice and transparent processes to build trust with our students.",
    },
    {
      icon: Rocket,
      title: "Empowerment",
      description:
        "We equip students with the knowledge and tools to make informed decisions about their future.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Nextgen Advisors helped me secure admission to my dream university in Canada. Their guidance was invaluable!",
      author: "Ramesh Shrestha",
      program: "Masters in Computer Science, University of Toronto",
    },
    {
      quote:
        "The visa process seemed daunting, but my counselor walked me through every step patiently. Thank you Nextgen!",
      author: "Priya Gurung",
      program: "Bachelor of Business, University of Sydney",
    },
    {
      quote:
        "I got scholarship recommendations I didn't even know existed. Their expertise saved me thousands of dollars.",
      author: "Anil Kumar",
      program: "PhD in Engineering, University of Manchester",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full pt-30 h-96 flex items-center justify-center bg-gradient-to-r from-[#35B354] to-[#2a8f44]">
        <div className="container mx-auto text-center px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About Nextgen Advisors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Empowering students to achieve global education dreams through
            expert guidance and personalized support.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#35B354] mb-6">
                Who Are We?
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Nextgen Advisors is a premier educational consultancy helping
                  students pursue their dreams of studying abroad. We provide
                  end-to-end guidance, from selecting the right course and
                  university to visa processing and pre-departure preparation.
                </p>
                <p>
                  We guide students to the right path by offering expert
                  counseling, personalized support, and access to top
                  international universities. Our team of experienced advisors
                  understands the challenges students face and provides tailored
                  solutions for each individual.
                </p>
                <p>
                  With offices in Manbhawan, Lalitpur, we've helped thousands of
                  Nepali students achieve their academic goals abroad since our
                  establishment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                fill
                src="/about-team.jpg"
                alt="Nextgen Advisors team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#35B354] text-center mb-16"
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#35B354]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-[#35B354]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#35B354] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[#35B354] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg">
                "To empower the next generation by providing access to quality
                education and global career opportunities that truly make a
                difference in their lives."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <Rocket className="w-10 h-10 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg">
                "To deliver honest, efficient, and personalized guidance that
                empowers students to make informed decisions, achieve their
                academic goals, and unlock global opportunities through trusted
                education consultancy services."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#35B354] text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#35B354]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#35B354]" />
                </div>
                <h3 className="text-xl font-bold text-[#35B354] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#35B354] text-center mb-16"
          >
            Student Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#35B354]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#35B354] text-center mb-16"
          >
            Why Choose Nextgen Advisors?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Personalized counseling tailored to each student's goals",
              "Experienced advisors with firsthand study abroad knowledge",
              "Strong partnerships with 300+ universities worldwide",
              "High visa success rate (95%)",
              "Comprehensive test preparation guidance (IELTS, PTE, TOEFL)",
              "Scholarship and financial aid assistance",
              "Pre-departure orientation and post-arrival support",
              "Regular workshops and education fairs",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-[#35B354] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#35B354]">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Begin Your Study Abroad Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of successful students who have achieved their
            international education dreams with our guidance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#35B354] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Apply Online
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
