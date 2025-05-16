import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignments[align]} ${className}`}>
      {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
