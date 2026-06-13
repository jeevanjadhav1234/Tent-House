"use client";

import React from "react";

export default function Garlands({ top = 0 }: { top?: number }) {
  // We will generate positions for garlands and lights across the top of the screen
  return (
    <div 
      className="absolute left-0 w-full overflow-hidden pointer-events-none z-30 h-24"
      style={{ top }}
    >
      {/* Central Garland SVG String */}
      <svg
        className="w-full h-12 absolute top-0 left-0 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main string path */}
        <path
          d="M0 5 Q 150 25 300 5 Q 450 25 600 5 Q 750 25 900 5 Q 1050 25 1200 5"
          stroke="#5c3f15"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Marigold and Leaf Nodes along the curves */}
        {Array.from({ length: 41 }).map((_, i) => {
          const t = i / 40;
          // Calculate x and y coordinates along the quadratic Bezier curves
          const x = t * 1200;
          let y = 5;
          const curveIdx = Math.floor(t * 4); // 4 curves total
          const localT = (t * 4) % 1;
          
          if (curveIdx === 0) {
            y = 5 * (1 - localT) * (1 - localT) + 2 * 25 * localT * (1 - localT) + 5 * localT * localT;
          } else if (curveIdx === 1) {
            y = 5 * (1 - localT) * (1 - localT) + 2 * 25 * localT * (1 - localT) + 5 * localT * localT;
          } else if (curveIdx === 2) {
            y = 5 * (1 - localT) * (1 - localT) + 2 * 25 * localT * (1 - localT) + 5 * localT * localT;
          } else {
            y = 5 * (1 - localT) * (1 - localT) + 2 * 25 * localT * (1 - localT) + 5 * localT * localT;
          }

          // Alternate orange and gold marigolds
          const isOrange = i % 2 === 0;
          const color = isOrange ? "#FF8C00" : "#FFD700";
          const strokeColor = isOrange ? "#E05A00" : "#D4AF37";

          return (
            <g key={i} className="animate-sway-slow" style={{ transformOrigin: `${x}px 0px`, animationDelay: `${i * 0.1}s` }}>
              {/* Leaf */}
              {i % 3 === 0 && (
                <path
                  d={`M ${x} ${y} Q ${x - 5} ${y + 10} ${x} ${y + 16} Q ${x + 5} ${y + 10} ${x} ${y}`}
                  fill="#2e7d32"
                />
              )}
              {/* Marigold Flower */}
              <circle cx={x} cy={y + 4} r="5.5" fill={color} stroke={strokeColor} strokeWidth="1" />
              <circle cx={x} cy={y + 4} r="3" fill={isOrange ? "#FFD700" : "#FF8C00"} />
              <circle cx={x} cy={y + 4} r="1" fill="#FFFFFF" />
            </g>
          );
        })}
      </svg>

      {/* Hanging Vertical Flower Strings (garlands) at intervals */}
      <div className="absolute top-0 left-0 w-full h-16 flex justify-around px-4">
        {[10, 25, 40, 55, 70, 85].map((left, idx) => {
          const delay = idx * 0.4;
          const height = idx % 2 === 0 ? "h-10" : "h-12";
          const animationClass = idx % 2 === 0 ? "animate-sway-slow" : "animate-sway-fast";
          
          return (
            <div
              key={idx}
              className={`flex flex-col items-center ${height} ${animationClass}`}
              style={{
                left: `${left}%`,
                transformOrigin: "top center",
                animationDelay: `${delay}s`,
              }}
            >
              {/* Thin brown string */}
              <div className="w-[1.5px] bg-[#5c3f15] h-full flex flex-col justify-between items-center relative">
                {/* Flower nodes stacked vertically */}
                {Array.from({ length: idx % 2 === 0 ? 3 : 4 }).map((_, fIdx) => {
                  const isRose = fIdx === (idx % 2 === 0 ? 1 : 2);
                  const isMarigoldGold = fIdx % 2 === 0;
                  
                  return (
                    <div
                      key={fIdx}
                      className="absolute"
                      style={{
                        top: `${fIdx * 12}px`,
                      }}
                    >
                      {isRose ? (
                        // Rose flower (Red/Pink)
                        <svg width="15" height="15" viewBox="0 0 100 100" className="drop-shadow-[0_1px_3px_rgba(224,17,95,0.6)]">
                          <circle cx="50" cy="50" r="40" fill="#E0115F" />
                          <circle cx="50" cy="50" r="28" fill="#FF1493" />
                          <path d="M50 20 C40 35, 60 35, 50 50 C40 65, 60 65, 50 80" stroke="#FFF" strokeWidth="6" fill="none" opacity="0.3" />
                          <circle cx="50" cy="50" r="12" fill="#FFD700" />
                        </svg>
                      ) : (
                        // Marigold flower (Gold/Orange)
                        <svg width="14" height="14" viewBox="0 0 100 100" className="drop-shadow-[0_1px_3px_rgba(212,175,55,0.6)]">
                          <circle cx="50" cy="50" r="45" fill={isMarigoldGold ? "#FFD700" : "#FF8C00"} />
                          <polygon points="50,15 60,35 80,35 65,50 75,75 50,60 25,75 35,50 20,35 40,35" fill={isMarigoldGold ? "#FF8C00" : "#FFD700"} />
                          <circle cx="50" cy="50" r="15" fill="#FFFFFF" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Blinking Festival Bulbs hanging at intervals */}
      <div className="absolute top-2 left-0 w-full flex justify-between px-16 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => {
          const blinkClass = i % 3 === 0 ? "animate-blink-1" : i % 3 === 1 ? "animate-blink-2" : "animate-blink-3";
          
          return (
            <div key={i} className="flex flex-col items-center">
              {/* Wire */}
              <div className="w-[1px] h-6 bg-neutral-600"></div>
              {/* Bulb */}
              <div
                className={`w-3 h-4 rounded-full ${blinkClass} bg-amber-400`}
                style={{
                  borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                  boxShadow: "0 0 8px rgba(251,191,36,0.6)",
                }}
              >
                {/* Filament */}
                <div className="w-1 h-[2px] bg-white mx-auto mt-[1px] opacity-70"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
