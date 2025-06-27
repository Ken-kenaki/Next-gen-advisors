import { motion } from "framer-motion";

const ProgressSteps = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Personal Info", "Academic Details", "Additional Info"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10">
          <motion.div
            className="h-full bg-green-600"
            initial={{ width: "0%" }}
            animate={{
              width: `${(currentStep - 1) * 50}%`,
              transition: { duration: 0.5 },
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-medium ${
                currentStep > index
                  ? "bg-green-600"
                  : currentStep === index
                  ? "bg-green-400"
                  : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {index + 1}
            </motion.div>
            <span
              className={`mt-2 text-sm font-medium ${
                currentStep >= index ? "text-green-600" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgressSteps;
