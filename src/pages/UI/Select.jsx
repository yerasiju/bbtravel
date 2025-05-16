import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  value,
  onChange,
  options,
  className = "",
  placeholder = "Выберите...",
  disabled = false,
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          appearance-none
          w-full
          px-4
          py-2
          bg-white
          border
          border-gray-300
          rounded-md
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default Select;
