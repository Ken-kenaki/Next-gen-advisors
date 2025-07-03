"use client";

import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  BookOpen,
  Star,
  ArrowRight,
  Filter,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp,
  Globe,
  GraduationCap,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { appwriteConfig, getImageUrl } from "@/utils/appwrite";

interface University {
  $id: string;
  name: string;
  country: string;
  intake: string;
  programs: string;
  ranking: string;
  description?: string;
  imageId?: string;
  website?: string;
  tuition?: string;
  scholarship?: string;
  students?: string;
  established?: string;
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");
  const [expandedFilters, setExpandedFilters] = useState(false);

  const countries = [
    "all",
    "South Korea",
    "United States",
    "Australia",
    "Japan",
    "UK",
    "Malta",
    "Canada",
    "Germany",
  ];

  const sortOptions = [
    { value: "default", label: "Recommended" },
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "ranking-asc", label: "Ranking (Low to High)" },
    { value: "ranking-desc", label: "Ranking (High to Low)" },
  ];

  const programTypes = [
    "All Programs",
    "Engineering",
    "Business",
    "Arts",
    "Medicine",
    "Computer Science",
    "Law",
  ];

  useEffect(() => {
    fetchUniversities();
    const savedFavorites = localStorage.getItem("universityFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    filterAndSortUniversities();
  }, [universities, searchTerm, selectedCountry, sortOption]);

  useEffect(() => {
    localStorage.setItem("universityFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/universities");
      if (response.ok) {
        const data = await response.json();
        setUniversities(data.documents || []);
      }
    } catch (error) {
      console.error("Failed to fetch universities:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortUniversities = () => {
    let filtered = [...universities];

    if (searchTerm) {
      filtered = filtered.filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.programs.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCountry !== "all") {
      filtered = filtered.filter(
        (uni) => uni.country.toLowerCase() === selectedCountry.toLowerCase()
      );
    }

    switch (sortOption) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "ranking-asc":
        filtered.sort((a, b) => parseInt(a.ranking) - parseInt(b.ranking));
        break;
      case "ranking-desc":
        filtered.sort((a, b) => parseInt(b.ranking) - parseInt(a.ranking));
        break;
      default:
        break;
    }

    setFilteredUniversities(filtered);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const shareUniversity = (university: University) => {
    if (navigator.share) {
      navigator.share({
        title: university.name,
        text: `Check out ${university.name} in ${university.country}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(
        `${university.name} - ${window.location.href}`
      );
      alert("University link copied to clipboard!");
    }
  };

  const getUniversityImageUrl = (imageId?: string) => {
    if (!imageId) return "/university-placeholder.jpg";
    return getImageUrl(imageId, appwriteConfig.buckets.universities, 400, 300);
  };

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
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 bg-gradient-to-br from-[#F5F7F5] via-white to-[#E8F5E9]">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#35B354]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-52 bg-gradient-to-br from-[#F5F7F5] via-white to-[#E8F5E9]">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-4">
            Discover Global Universities
          </h1>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto">
            Find your perfect academic destination among our partner
            institutions worldwide
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="bg-[#35B354]/10 text-[#35B354] px-4 py-2 rounded-full flex items-center">
              <Globe size={16} className="mr-2" />
              <span>100+ Universities</span>
            </div>
            <div className="bg-[#35B354]/10 text-[#35B354] px-4 py-2 rounded-full flex items-center">
              <GraduationCap size={16} className="mr-2" />
              <span>500+ Programs</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100"
        >
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search universities, countries, or programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setExpandedFilters(!expandedFilters)}
                className="flex items-center justify-between text-[#35B354] font-medium"
              >
                <span>Advanced Filters</span>
                {expandedFilters ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {expandedFilters && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B354] focus:border-transparent bg-white"
                      >
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country === "all" ? "All Countries" : country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Program Type
                    </label>
                    <div className="relative">
                      <select className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B354] focus:border-transparent bg-white">
                        {programTypes.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sort By
                    </label>
                    <div className="relative">
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35B354] focus:border-transparent bg-white"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div className="bg-[#35B354] text-white rounded-xl p-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Top Universities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">90%</div>
              <div className="text-sm">Acceptance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Universities Grid */}
        {filteredUniversities.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Showing {filteredUniversities.length} Universities
              </h2>
              <div className="text-sm text-gray-500">
                Sorted by:{" "}
                {sortOptions.find((o) => o.value === sortOption)?.label}
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredUniversities.map((university) => (
                <motion.div
                  key={university.$id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group border border-gray-100 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getUniversityImageUrl(university.imageId)}
                      alt={university.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/university-placeholder.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(university.$id);
                        }}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Heart
                          size={20}
                          className={
                            favorites.includes(university.$id)
                              ? "fill-[#35B354] text-[#35B354]"
                              : "text-gray-700"
                          }
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          shareUniversity(university);
                        }}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Share2 size={20} className="text-gray-700" />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className="bg-[#35B354] text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {university.country}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#35B354] transition-colors">
                        {university.name}
                      </h3>
                      <div className="flex items-center bg-[#35B354]/10 text-[#35B354] px-2 py-1 rounded text-xs font-semibold">
                        <Star size={12} className="mr-1 fill-[#35B354]" />
                        {university.ranking}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {university.programs.split(",").map((program, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {program.trim()}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={14} className="mr-2 text-[#35B354]" />
                        <span>{university.intake}</span>
                      </div>
                      {university.tuition && (
                        <div className="flex items-center text-gray-600">
                          <BookOpen size={14} className="mr-2 text-[#35B354]" />
                          <span>{university.tuition}</span>
                        </div>
                      )}
                      {university.students && (
                        <div className="flex items-center text-gray-600">
                          <Users size={14} className="mr-2 text-[#35B354]" />
                          <span>{university.students}</span>
                        </div>
                      )}
                      {university.established && (
                        <div className="flex items-center text-gray-600">
                          <Clock size={14} className="mr-2 text-[#35B354]" />
                          <span>Est. {university.established}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedUniversity(university)}
                      className="w-full bg-[#35B354] text-white py-2 rounded-lg hover:bg-[#2D8B4E] transition-colors group flex items-center justify-center"
                    >
                      <span>View Details</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-sm p-8"
          >
            <div className="text-gray-500 text-lg mb-6">
              No universities found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCountry("all");
                setSortOption("default");
              }}
              className="bg-[#35B354] text-white px-6 py-3 rounded-lg hover:bg-[#2D8B4E] transition-colors"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <div className="bg-[#35B354] text-white rounded-xl mt-25 p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Our education consultants are ready to help you find and apply to
            the perfect university.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#35B354] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* University Detail Modal */}
        {selectedUniversity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedUniversity(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <Image
                  src={getUniversityImageUrl(selectedUniversity.imageId)}
                  alt={selectedUniversity.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/university-placeholder.jpg";
                  }}
                />
                <button
                  onClick={() => setSelectedUniversity(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedUniversity.name}
                    </h2>
                    <div className="flex items-center text-[#35B354] mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{selectedUniversity.country}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleFavorite(selectedUniversity.$id)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Heart
                        size={20}
                        className={
                          favorites.includes(selectedUniversity.$id)
                            ? "fill-[#35B354] text-[#35B354]"
                            : "text-gray-500"
                        }
                      />
                    </button>
                    <button
                      onClick={() => shareUniversity(selectedUniversity)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Share2 size={20} className="text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                      University Overview
                    </h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-1/3 text-gray-600">Ranking</div>
                        <div className="w-2/3 font-medium flex items-center">
                          <Star
                            size={16}
                            className="mr-2 text-[#35B354] fill-[#35B354]"
                          />
                          {selectedUniversity.ranking}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-1/3 text-gray-600">Intake</div>
                        <div className="w-2/3 font-medium">
                          {selectedUniversity.intake}
                        </div>
                      </div>
                      {selectedUniversity.established && (
                        <div className="flex">
                          <div className="w-1/3 text-gray-600">Established</div>
                          <div className="w-2/3 font-medium">
                            {selectedUniversity.established}
                          </div>
                        </div>
                      )}
                      {selectedUniversity.students && (
                        <div className="flex">
                          <div className="w-1/3 text-gray-600">Students</div>
                          <div className="w-2/3 font-medium">
                            {selectedUniversity.students}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                      Academic Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-1/3 text-gray-600">Programs</div>
                        <div className="w-2/3 font-medium">
                          {selectedUniversity.programs
                            .split(",")
                            .map((program, i) => (
                              <span key={i} className="block">
                                {program.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
                      {selectedUniversity.tuition && (
                        <div className="flex">
                          <div className="w-1/3 text-gray-600">
                            Tuition Fees
                          </div>
                          <div className="w-2/3 font-medium">
                            {selectedUniversity.tuition}
                          </div>
                        </div>
                      )}
                      {selectedUniversity.scholarship && (
                        <div className="flex">
                          <div className="w-1/3 text-gray-600">
                            Scholarships
                          </div>
                          <div className="w-2/3 font-medium">
                            {selectedUniversity.scholarship}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {selectedUniversity.description && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                      About the University
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedUniversity.description}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                  {selectedUniversity.website && (
                    <a
                      href={selectedUniversity.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#35B354] text-white py-3 rounded-lg hover:bg-[#2D8B4E] transition-colors text-center flex items-center justify-center"
                    >
                      <Globe size={16} className="mr-2" />
                      Visit Official Website
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="flex-1 border border-[#35B354] text-[#35B354] py-3 rounded-lg hover:bg-[#35B354]/10 transition-colors text-center flex items-center justify-center"
                  >
                    <GraduationCap size={16} className="mr-2" />
                    Request Application Assistance
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
