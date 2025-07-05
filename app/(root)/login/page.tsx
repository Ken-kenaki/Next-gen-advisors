"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        const errorData = await response.json();
        setError(
          errorData.error || "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-inter text-[#231F20] bg-[#BBE4FF] overflow-hidden px-4 py-8">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E3F4FF] z-0"></div>
      <svg
        className="absolute top-1/2 left-0 w-full h-[150px] z-[1]"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path d="M0,96 C360,0 1080,200 1440,96 L1440,0 L0,0 Z" fill="#E3F4FF" />
      </svg>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#35B354] z-0"></div>

      {/* Login container */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[850px] relative z-10">
        {/* Left Panel - Hidden on small screens, shown on medium and up */}
        <div className="hidden md:flex md:w-[40%] bg-[#F9FAFB] p-4 md:p-8 flex-col items-center justify-center border-r border-[#E5E7EB]">
          <Image
            src="/logo.png"
            alt="Next Gen Logo Logo"
            width={230}
            height={200}
            className="mb-4 w-auto h-auto max-w-[180px] md:max-w-[230px]"
          />
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl m-0 mb-2 text-[#231F20]">
            Welcome
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-[0.95rem] mb-6 sm:mb-8">
            Log in to your Admin account
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-left font-semibold text-[#374151] text-sm sm:text-base"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
                  size={18}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 sm:py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4374BA] focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-left font-semibold text-[#374151] text-sm sm:text-base"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="****"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-2 sm:py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4374BA] focus:border-transparent text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-[#374151]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full py-2 sm:py-3 bg-[#35B354] text-white font-semibold rounded-lg hover:bg-[#355ea1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base mt-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
