import { motion } from "framer-motion";
import React from "react";

interface SubmitButtonProps {
  isSubmitting?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting = false,
}) => {
  return (
    <motion.button
      type="submit"
      className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-70"
      whileHover={{
        scale: isSubmitting ? 1 : 1.02,
        background: isSubmitting
          ? undefined
          : "linear-gradient(to right, #2a9d4f, #1e7e34)",
      }}
      whileTap={{
        scale: isSubmitting ? 1 : 0.98,
      }}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </div>
      ) : (
        <>
          <span>Submit Application</span>
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </>
      )}
    </motion.button>
  );
};

export default SubmitButton;
