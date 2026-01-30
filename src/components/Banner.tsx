import React from "react";
import bg from "../assets/bg/bg.png";

const Banner = ({ title, subtitle, ctaText, isDark = false }: any) => {
  return (
    <div
      className="relative h-auto bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className={`absolute inset-0 ${isDark ? "bg-black/60" : "bg-white/30"}`}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {title}
          </h2>

          <p
            className={`text-lg mb-6 ${isDark ? "text-gray-200" : "text-gray-600"}`}
          >
            {subtitle}
          </p>

          <button
            className={`px-6 py-3 rounded font-medium transition ${
              isDark
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
