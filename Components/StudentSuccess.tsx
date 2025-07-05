"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  User,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { appwriteConfig, getImageUrl } from "@/utils/appwrite";

interface Testimonial {
  $id: string;
  name: string;
  program: string;
  university: string;
  content: string;
  rating: number;
  imageId?: string;
  status: string;
}

interface FormData {
  name: string;
  program: string;
  university: string;
  content: string;
  rating: number;
  file: File | null;
}

export default function StudentTestimonialsCarousel(): JSX.Element {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    program: "",
    university: "",
    content: "",
    rating: 5,
    file: null,
  });

  const TESTIMONIALS_BUCKET = appwriteConfig.buckets.stories;

  const getTestimonialImageUrl = (imageId?: string) => {
    if (!imageId) return null;
    return getImageUrl(imageId, TESTIMONIALS_BUCKET, 200, 200);
  };

  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/stories?status=approved&t=${Date.now()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Request failed with status ${response.status}`
        );
      }

      const data = await response.json();
      setTestimonials(Array.isArray(data?.documents) ? data.documents : []);
    } catch (error) {
      console.error("Fetch Testimonials Error:", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files?.[0] || null,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("program", formData.program);
        formDataToSend.append("university", formData.university);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("rating", formData.rating.toString());

        if (formData.file) {
          formDataToSend.append("file", formData.file);
        }

        const response = await fetch("/api/stories", {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) throw new Error("Failed to submit testimonial");

        setIsPopupOpen(false);
        setFormData({
          name: "",
          program: "",
          university: "",
          content: "",
          rating: 5,
          file: null,
        });
        alert("Thank you! Your testimonial has been submitted for review.");
        await fetchTestimonials();
      } catch (error) {
        alert("Failed to submit testimonial. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, fetchTestimonials]
  );

  if (loading) {
    return (
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#35B354] mx-auto" />
          <p className="mt-4 text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="testimonials" className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-[#35B354]">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            What our students say about their international education journey
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.$id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-100"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-200 flex items-center justify-center">
                    {testimonial.imageId ? (
                      <img
                        src={getTestimonialImageUrl(testimonial.imageId) || ""}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/placeholder-user.jpg";
                        }}
                      />
                    ) : (
                      <User className="w-10 h-10 text-gray-400" />
                    )}
                  </div>

                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonial.rating
                            ? "text-[#35B354] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.program} at {testimonial.university}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <button className="testimonial-prev p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6 text-[#35B354]" />
            </button>
            <button className="testimonial-next p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6 text-[#35B354]" />
            </button>
          </div>
        </motion.div>

        {/* Add Your Testimonial Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center bg-[#35B354] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2e9b4a] transition-colors shadow-md"
          >
            Share Your Experience
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Popup Form */}
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Share Your Experience
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Program
                  </label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    University
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Your Photo (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#35B354]/10 file:text-[#35B354] hover:file:bg-[#35B354]/20"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Your Testimonial
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Rating
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#35B354] focus:border-transparent"
                  >
                    {[5, 4, 3, 2, 1].map((num) => (
                      <option key={num} value={num}>
                        {num} Star{num !== 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#35B354] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2e9b4a] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Your Testimonial"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
