import { useCountdown } from '@/hooks/useCountdown';

export const CountdownTimer = () => {
  // December 31, 2030 at 12:00:00 AM IST (UTC+5:30)
  const targetDate = new Date('2030-12-31T00:00:00+05:30');
  const timeLeft = useCountdown(targetDate);

  if (timeLeft.totalMilliseconds <= 0) {
    return <span className="text-green-500 font-bold">Target Achieved!</span>;
  }

  return (
    <div className="font-mono text-center">
      <div className="text-lg font-bold text-red-500">
        {timeLeft.years}Y {timeLeft.months}M {timeLeft.days}D
      </div>
      <div className="text-sm text-red-400">
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}.
        <span className="text-xs">{timeLeft.milliseconds.toString().padStart(3, '0')}</span>
      </div>
    </div>
  );
};