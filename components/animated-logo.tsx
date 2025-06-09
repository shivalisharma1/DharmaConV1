"use client"

import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

        {/* Main logo container */}
        <div
          className={`relative bg-white rounded-2xl p-8 shadow-2xl border border-orange-100 transform transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <div className="text-center">
            {/* Animated DharmaCon text */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-4">
              {["D", "H", "A", "R", "M", "A", "C", "O", "N"].map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-110 ${
                    isVisible ? "animate-bounce" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: "2s",
                    animationIterationCount: "1",
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* Animated 2025 */}
            <div
              className={`text-4xl md:text-6xl font-bold text-orange-600 mb-4 transform transition-all duration-1000 delay-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              2025
            </div>

            {/* Animated subtitle */}
            <div
              className={`text-xl md:text-2xl font-semibold text-gray-700 transform transition-all duration-1000 delay-1500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              CNCH Hindu Youth Leadership Conference
            </div>
          </div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
