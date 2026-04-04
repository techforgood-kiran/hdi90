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
    years: 0, months: 0, days: 0, hours: 0,
    minutes: 0, seconds: 0, milliseconds: 0, totalMilliseconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          years: 0, months: 0, days: 0, hours: 0,
          minutes: 0, seconds: 0, milliseconds: 0, totalMilliseconds: 0
        });
        return;
      }

      // Use simple total-milliseconds approach for reliable countdown
      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Approximate years and months from total days
      const years = Math.floor(totalDays / 365.25);
      const remainingDaysAfterYears = totalDays - Math.floor(years * 365.25);
      const months = Math.floor(remainingDaysAfterYears / 30.44);
      const days = remainingDaysAfterYears - Math.floor(months * 30.44);

      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;
      const milliseconds = Math.floor(difference % 1000);

      setTimeLeft({
        years, months, days, hours, minutes, seconds, milliseconds,
        totalMilliseconds: difference
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};
