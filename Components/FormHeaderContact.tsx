import { motion } from "framer-motion";

const FormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >
      <motion.h1
        className="text-4xl font-bold text-green-600 mb-2"
        whileHover={{ scale: 1.02 }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg text-gray-600"
      >
        Get in touch with our team for any inquiries
      </motion.p>
    </motion.div>
  );
};

export default FormHeader;
