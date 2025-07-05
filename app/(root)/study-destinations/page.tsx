"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  GraduationCap,
  BookOpen,
  Home,
  Briefcase,
  DollarSign,
  Users,
  Calendar,
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights: {
    icon: React.ReactNode;
    text: string;
  }[];
  image: string;
  color: string;
}

export default function StudyDestinationsPage() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const destinations: Destination[] = [
    {
      id: "uk",
      name: "Study in the UK",
      title: "United Kingdom",
      description:
        "The United Kingdom has earned a reputation as a top study destination, boasting storied institutions such as Oxford, Cambridge, and Imperial College London. Its degrees carry weight around the globe, because classes emphasise independent thought, hands-on research, and high academic standards. Incoming learners can pick from countless paths, whether they want to study business, engineering, the humanities, or medicine.",
      highlights: [
        { icon: <GraduationCap size={20} />, text: "World-class universities" },
        {
          icon: <BookOpen size={20} />,
          text: "Emphasis on independent research",
        },
        { icon: <Home size={20} />, text: "Diverse communities" },
        {
          icon: <Briefcase size={20} />,
          text: "Generous post-study work schemes",
        },
        { icon: <DollarSign size={20} />, text: "Scholarships available" },
        { icon: <Users size={20} />, text: "Friendly and secure environment" },
      ],
      image:
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=500&fit=crop",
      color: "from-[#1E429F] to-[#35B354]",
    },
    {
      id: "australia",
      name: "Study in Australia",
      title: "Australia",
      description:
        "Australia has built a strong reputation for higher learning, with schools like the University of Melbourne, ANU, and the University of Sydney regularly earning spots on global rankings. Students there enjoy flexible timetables, project-based classes, and ample research opportunities that aim to shape job-ready graduates.",
      highlights: [
        {
          icon: <GraduationCap size={20} />,
          text: "Globally ranked universities",
        },
        { icon: <BookOpen size={20} />, text: "Project-based learning" },
        { icon: <Home size={20} />, text: "Relaxed lifestyle" },
        {
          icon: <Briefcase size={20} />,
          text: "Generous post-study work visas",
        },
        { icon: <DollarSign size={20} />, text: "Part-time work allowed" },
        { icon: <Users size={20} />, text: "Multicultural society" },
      ],
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop",
      color: "from-[#1D4ED8] to-[#35B354]",
    },
    {
      id: "canada",
      name: "Study in Canada",
      title: "Canada",
      description:
        "Canada often ranks near the top for safe, affordable living and high-quality education. Schools such as the University of Toronto, UBC, and McGill blend rigorous academics with research and hands-on projects, giving students real-world skills.",
      highlights: [
        { icon: <GraduationCap size={20} />, text: "High-quality education" },
        { icon: <BookOpen size={20} />, text: "Hands-on learning" },
        { icon: <Home size={20} />, text: "Safe and affordable" },
        { icon: <Briefcase size={20} />, text: "Path to permanent residency" },
        { icon: <DollarSign size={20} />, text: "Work while studying" },
        { icon: <Users size={20} />, text: "Inclusive atmosphere" },
      ],
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
      color: "from-[#DC2626] to-[#35B354]",
    },
    {
      id: "usa",
      name: "Study in the USA",
      title: "United States",
      description:
        "The United States hosts more elite colleges than any other nation, offering vast academic choices and cutting-edge research facilities. Institutions like Harvard, Stanford, and MIT attract scholars from every corner of the globe, creating dynamic classrooms where ideas thrive.",
      highlights: [
        { icon: <GraduationCap size={20} />, text: "Elite colleges" },
        { icon: <BookOpen size={20} />, text: "Cutting-edge research" },
        { icon: <Home size={20} />, text: "Dynamic learning environment" },
        { icon: <Briefcase size={20} />, text: "Optional Practical Training" },
        { icon: <DollarSign size={20} />, text: "Campus jobs available" },
        { icon: <Users size={20} />, text: "Global student community" },
      ],
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
      color: "from-[#1E40AF] to-[#35B354]",
    },
    {
      id: "new-zealand",
      name: "Study in New Zealand",
      title: "New Zealand",
      description:
        "New Zealand gives students first-rate study options set against stunning mountains, beaches, and lush green farmland. Places such as the University of Auckland and Victoria University of Wellington combine strong teaching, active research, and a friendly, student-focused atmosphere.",
      highlights: [
        { icon: <GraduationCap size={20} />, text: "First-rate education" },
        { icon: <BookOpen size={20} />, text: "Student-focused approach" },
        { icon: <Home size={20} />, text: "Safe and welcoming" },
        { icon: <Briefcase size={20} />, text: "Path to residency" },
        { icon: <DollarSign size={20} />, text: "Reasonable tuition fees" },
        { icon: <Users size={20} />, text: "Warm local community" },
      ],
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=500&fit=crop",
      color: "from-[#065F46] to-[#35B354]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen pt-48 bg-gradient-to-br from-white to-[#f0f7f1]">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#1a3a1e] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Study Destinations
          </motion.h1>
          <motion.p
            className="text-lg text-[#2a5242] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover the best countries for international education and find
            your perfect study abroad destination
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-4 text-center border-t-4 border-[#35B354]"
          >
            <Globe size={32} className="mx-auto text-[#35B354] mb-2" />
            <div className="text-[#2a5242]">Countries</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-4 text-center border-t-4 border-[#35B354]"
          >
            <GraduationCap size={32} className="mx-auto text-[#35B354] mb-2" />
            <div className="text-[#2a5242]">Top Universities</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-4 text-center border-t-4 border-[#35B354]"
          >
            <Users size={32} className="mx-auto text-[#35B354] mb-2" />
            <div className="text-[#2a5242]">Nepali Students</div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-4 text-center border-t-4 border-[#35B354]"
          >
            <Briefcase size={32} className="mx-auto text-[#35B354] mb-2" />
            <div className="text-[#2a5242]">Post-Study Work</div>
          </motion.div>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedDestination(destination)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${destination.color} opacity-80`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#1a3a1e] mb-2">
                  {destination.title}
                </h4>
                <p className="text-[#2a5242] mb-4 line-clamp-3">
                  {destination.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {destination.highlights
                    .slice(0, 4)
                    .map((highlight, index) => (
                      <div key={index} className="flex items-center">
                        <div className="text-[#35B354] mr-2">
                          {highlight.icon}
                        </div>
                        <div className="text-sm text-[#2a5242] line-clamp-1">
                          {highlight.text}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/study-destinations/${destination.id}`}
                    className="text-[#35B354] hover:text-[#2a8e43] font-medium"
                  >
                    Learn More
                  </Link>
                  <div className="flex space-x-2">
                    {destinations
                      .filter((d) => d.id !== destination.id)
                      .slice(0, 2)
                      .map((d) => (
                        <Link
                          key={d.id}
                          href={`/study-destinations/${d.id}`}
                          className="text-xs bg-gray-100 hover:bg-[#35B354] hover:text-white px-2 py-1 rounded transition-colors"
                        >
                          {d.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#35B354] to-[#2a8e43] rounded-xl p-8 text-center text-white mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Choosing a Study Destination?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Our education consultants will help you select the best country
            based on your academic goals, budget, and career aspirations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#35B354] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </motion.div>

        {/* Destination Detail Modal */}
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${selectedDestination.color} opacity-80`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-2">
                      {selectedDestination.name}
                    </h2>
                    <p className="text-xl">{selectedDestination.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#35B354] rounded-full p-2 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a3a1e] mb-4">
                      Overview
                    </h3>
                    <p className="text-[#2a5242] mb-6">
                      {selectedDestination.description}
                    </p>

                    <h3 className="text-xl font-bold text-[#1a3a1e] mb-4">
                      Why Choose {selectedDestination.title}?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedDestination.highlights.map(
                        (highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start bg-gray-50 p-3 rounded-lg"
                          >
                            <div className="text-[#35B354] mr-3 mt-0.5">
                              {highlight.icon}
                            </div>
                            <span className="text-[#2a5242]">
                              {highlight.text}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1a3a1e] mb-4">
                      Popular Universities
                    </h3>
                    <div className="space-y-3 mb-6">
                      {getPopularUniversities(selectedDestination.id).map(
                        (uni, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-gray-50 p-3 rounded-lg"
                          >
                            <GraduationCap
                              size={20}
                              className="text-[#35B354] mr-3"
                            />
                            <span className="text-[#2a5242]">{uni}</span>
                          </div>
                        )
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#1a3a1e] mb-4">
                      Other Destinations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {destinations
                        .filter((d) => d.id !== selectedDestination.id)
                        .map((d) => (
                          <Link
                            key={d.id}
                            href={`/study-destinations/${d.id}`}
                            className="px-3 py-1 bg-gray-100 hover:bg-[#35B354] hover:text-white rounded-full text-sm transition-colors"
                          >
                            {d.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Link
                    href={`/study-destinations/${selectedDestination.id}`}
                    className="flex-1 bg-[#35B354] text-white py-3 rounded-lg hover:bg-[#2a8e43] transition-colors text-center"
                  >
                    View Full Details
                  </Link>
                  <button className="flex-1 border border-[#35B354] text-[#35B354] py-3 rounded-lg hover:bg-[#35B354] hover:text-white transition-colors">
                    <Link href="/contact">Get Consultation</Link>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function getPopularUniversities(destinationId: string): string[] {
  switch (destinationId) {
    case "uk":
      return [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
        "LSE",
      ];
    case "australia":
      return [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
        "UNSW",
      ];
    case "canada":
      return [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
        "University of Alberta",
      ];
    case "usa":
      return [
        "Harvard University",
        "Stanford University",
        "MIT",
        "California Institute of Technology",
      ];
    case "new-zealand":
      return [
        "University of Auckland",
        "Victoria University of Wellington",
        "University of Otago",
        "Massey University",
      ];
    default:
      return [];
  }
}
