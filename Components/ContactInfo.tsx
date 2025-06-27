import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        Contact Nextgen Advisors
      </h3>
      <ul className="space-y-3">
        <motion.li className="flex items-start" whileHover={{ x: 5 }}>
          <svg
            className="h-5 w-5 text-green-500 mt-0.5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>015413555 | 9709195734 | 9709195735</span>
        </motion.li>
        <motion.li className="flex items-start" whileHover={{ x: 5 }}>
          <svg
            className="h-5 w-5 text-green-500 mt-0.5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Manbhawan, Lalitpur, Nepal</span>
        </motion.li>
        <motion.li className="flex items-start" whileHover={{ x: 5 }}>
          <svg
            className="h-5 w-5 text-green-500 mt-0.5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>nextgenadvisors7@gmail.com</span>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;
