import { motion } from "framer-motion";
import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string | string[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  options?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  required = false,
  value,
  onChange,
  placeholder,
  options,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-green-600">*</span>}
      </label>
      {type === "select" ? (
        <motion.div whileHover={{ scale: 1.005 }}>
          <select
            id={name}
            name={name}
            required={required}
            value={value as string}
            onChange={onChange}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjYxODJmNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_0.5rem]"
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </motion.div>
      ) : type === "textarea" ? (
        <motion.textarea
          id={name}
          name={name}
          required={required}
          value={value as string}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder={placeholder}
          whileFocus={{
            scale: 1.01,
            boxShadow: "0 0 0 3px rgba(53, 179, 84, 0.2)",
          }}
        />
      ) : (
        <motion.input
          type={type}
          id={name}
          name={name}
          required={required}
          value={value as string}
          onChange={onChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder={placeholder}
          whileFocus={{
            scale: 1.01,
            boxShadow: "0 0 0 3px rgba(53, 179, 84, 0.2)",
          }}
        />
      )}
    </div>
  );
};

export default FormField;
