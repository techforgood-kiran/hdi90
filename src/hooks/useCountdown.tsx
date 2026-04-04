import { useState, useEffect } from 'react';

interface CountdownTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalMilliseconds: number;
}

export const useCountdown = (targetDate: Date): CountdownTime => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    totalMilliseconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        // Calculate years, months, days using calendar math for accuracy
        let years = targetDate.getFullYear() - now.getFullYear();
        let months = targetDate.getMonth() - now.getMonth();
        let days = targetDate.getDate() - now.getDate();

        // Adjust for negative days
        if (days < 0) {
          months--;
          const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
          days += prevMonth.getDate();
        }
        // Adjust for negative months
        if (months < 0) {
          years--;
          months += 12;
        }

        // For the time portion, compute remainder after full calendar days
        const futureDate = new Date(now);
        futureDate.setFullYear(futureDate.getFullYear() + years);
        futureDate.setMonth(futureDate.getMonth() + months);
        futureDate.setDate(futureDate.getDate() + days);
        const timeRemainder = targetDate.getTime() - futureDate.getTime();

        const hours = Math.floor(timeRemainder / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemainder % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemainder % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(timeRemainder % 1000);

        setTimeLeft({
          years,
          months,
          days,
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes),
          seconds: Math.max(0, seconds),
          milliseconds: Math.max(0, milliseconds),
          totalMilliseconds: difference
        });
      } else {
        setTimeLeft({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          totalMilliseconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 10); // Update every 10ms for smooth millisecond display

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};