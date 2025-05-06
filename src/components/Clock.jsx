import React, { useEffect, useRef } from 'react';
import '../css/clock.css';

export default function Clock() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourDeg = (hours * 30) + (minutes * 0.5);
      const minuteDeg = (minutes * 6) + (seconds * 0.1);
      const secondDeg = seconds * 6;

      if (hourRef.current) hourRef.current.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
      if (minuteRef.current) minuteRef.current.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
      if (secondRef.current) secondRef.current.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    };

    updateClock(); // set awal
    const interval = setInterval(updateClock, 1000); // per detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        {/* Jarum jam */}
        <div ref={hourRef} id="hour" className="hand hour"></div>
        <div ref={minuteRef} id="minute" className="hand minute"></div>
        <div ref={secondRef} id="second" className="hand second"></div>
        <div className="center"></div>
  
        {/* Angka 1-12 */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          const radius = 130;
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const y = -radius * Math.cos((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="number"
              style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
            >
              {i + 1}
            </div>
          );
        })}
  
        {/* Titik menit */}
        {[...Array(60)].map((_, i) => {
          const angle = i * 6;
          const radius = 145;
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const y = -radius * Math.cos((angle * Math.PI) / 180);
          return (
            <div
              key={`dot-${i}`}
              className="dot"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                width: i % 5 === 0 ? "4px" : "2px",
                height: i % 5 === 0 ? "4px" : "2px",
                backgroundColor: i % 5 === 0 ? "#000" : "#555",
              }}
            />
          );
        })}
      </div>
    </div>
  );
  
}
