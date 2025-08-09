"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // August 15, 2024 at noon Central Time (UTC-5/UTC-6)
    // Using UTC time and adjusting for Central Time (UTC-6 during standard time)
    const targetDate = new Date("2024-08-15T18:00:00.000Z"); // 12:00 PM Central = 6:00 PM UTC

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <section className="py-16 bg-dashboard-border/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-4">
            Launch Date
          </h2>
          <p className="text-dashboard-text/80 font-mono">
            RootFuse is now available. Join the cannabis revolution!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-dashboard-border/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-digital text-dashboard-text mb-8">
          Launch Date
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
            <div className="text-3xl font-bold font-digital text-dashboard-text">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-dashboard-text/70 font-mono text-sm uppercase tracking-wide">
              Days
            </div>
          </div>

          <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
            <div className="text-3xl font-bold font-digital text-dashboard-text">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-dashboard-text/70 font-mono text-sm uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
            <div className="text-3xl font-bold font-digital text-dashboard-text">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-dashboard-text/70 font-mono text-sm uppercase tracking-wide">
              Minutes
            </div>
          </div>

          <div className="bg-dashboard-bg border border-dashboard-border rounded-lg p-4">
            <div className="text-3xl font-bold font-digital text-dashboard-text">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-dashboard-text/70 font-mono text-sm uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>

        <p className="text-dashboard-text/80 font-mono mt-6">
          Until RootFuse goes live - August 15th at Noon Central Time
        </p>
      </div>
    </section>
  );
}
