import React, { useEffect, useRef, useState } from "react";

const Slider = ({
  min,
  max,
  step = 1,
  value = [min, max],
  onChange,
  disabled = false,
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const getPercentage = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || disabled) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percentage = Math.min(
      Math.max(0, (e.clientX - rect.left) / rect.width),
      1
    );
    const newValue = Math.round((percentage * (max - min) + min) / step) * step;

    const newValues = [...localValue];
    if (isDragging === "min") {
      if (newValue <= localValue[1]) {
        newValues[0] = newValue;
      }
    } else {
      if (newValue >= localValue[0]) {
        newValues[1] = newValue;
      }
    }

    setLocalValue(newValues);
    onChange(newValues);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (handle) => (e) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(handle);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={sliderRef}
      className={`
        relative 
        h-2 
        bg-gray-200 
        rounded-full 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {/* Track filled */}
      <div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{
          left: `${getPercentage(localValue[0])}%`,
          right: `${100 - getPercentage(localValue[1])}%`,
        }}
      />

      {/* Handles */}
      {[
        { value: localValue[0], handle: "min" },
        { value: localValue[1], handle: "max" },
      ].map(({ value, handle }) => (
        <div
          key={handle}
          onMouseDown={handleMouseDown(handle)}
          className={`
            absolute
            top-1/2
            -translate-y-1/2
            -translate-x-1/2
            w-4
            h-4
            bg-white
            border-2
            border-blue-500
            rounded-full
            shadow
            ${
              disabled
                ? "cursor-not-allowed"
                : "cursor-grab active:cursor-grabbing"
            }
            ${isDragging === handle ? "ring-2 ring-blue-300" : ""}
          `}
          style={{
            left: `${getPercentage(value)}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Slider;
