import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const FlipCard = ({ value, label, color = "red" }: { value: number; label: string; color?: string }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [flip, setFlip] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setFlip(true);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
        setFlip(false);
      }, 300);
      prevValue.current = value;
      return () => clearTimeout(timeout);
    }
  }, [value]);

  const formatted = String(displayValue).padStart(2, '0');
  const nextFormatted = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-24 sm:w-28 sm:h-32 md:w-36 md:h-40 lg:w-40 lg:h-44 perspective-[800px]">
        {/* Top half (static) */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-red-800 to-red-900 rounded-t-xl overflow-hidden border border-red-500/30 border-b-0 z-10">
          <div className="absolute inset-0 flex items-end justify-center">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-100 font-mono translate-y-1/2 leading-none drop-shadow-lg">
              {flip ? nextFormatted : formatted}
            </span>
          </div>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>

        {/* Bottom half (static) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-red-950 to-red-900 rounded-b-xl overflow-hidden border border-red-500/30 border-t-0">
          <div className="absolute inset-0 flex items-start justify-center">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-200/80 font-mono -translate-y-1/2 leading-none">
              {formatted}
            </span>
          </div>
        </div>

        {/* Center line */}
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/40 z-30 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />

        {/* Flip panel - top flipping down */}
        {flip && (
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-red-800 to-red-900 rounded-t-xl overflow-hidden border border-red-500/30 border-b-0 z-20 origin-bottom"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -90 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute inset-0 flex items-end justify-center">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-100 font-mono translate-y-1/2 leading-none drop-shadow-lg">
                {formatted}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          </motion.div>
        )}

        {/* Flip panel - bottom flipping up to reveal new value */}
        {flip && (
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-red-950 to-red-900 rounded-b-xl overflow-hidden border border-red-500/30 border-t-0 z-20 origin-top"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute inset-0 flex items-start justify-center">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-200/80 font-mono -translate-y-1/2 leading-none">
                {nextFormatted}
              </span>
            </div>
          </motion.div>
        )}

        {/* Side shadow accents */}
        <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-red-400/20 via-transparent to-red-400/20 z-30" />
        <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-red-400/20 via-transparent to-red-400/20 z-30" />
      </div>
      <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] text-red-300 uppercase">
        {label}
      </span>
    </div>
  );
};

const Separator = () => (
  <div className="flex flex-col items-center justify-center gap-3 pt-2 md:pt-4">
    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" style={{ animationDelay: '0.5s' }} />
  </div>
);

export const BigCountdownTimer = () => {
  const targetDate = new Date('2031-01-01T00:00:00');
  const timeLeft = useCountdown(targetDate);

  if (timeLeft.totalMilliseconds <= 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-green-400 mb-4">
              🎉 TARGET ACHIEVED! 🎉
            </h2>
            <p className="text-2xl md:text-3xl">HDI 0.90 Goal Reached!</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-950 via-red-900 to-red-950 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex items-center justify-center mb-4 gap-3">
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-red-400 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-100 tracking-tight">
              TIME TO HDI 0.90 DEADLINE
            </h2>
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-red-400 animate-pulse" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-red-300/80 mb-10 md:mb-14 max-w-2xl mx-auto">
            The countdown to achieving our collective goal of HDI 0.90 by January 1st, 2031
          </p>

          {/* Flip Clock Display */}
          <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 flex-wrap">
            <FlipCard value={timeLeft.years} label="Years" />
            <Separator />
            <FlipCard value={timeLeft.months} label="Months" />
            <Separator />
            <FlipCard value={timeLeft.days} label="Days" />
            <Separator />
            <FlipCard value={timeLeft.hours} label="Hours" />
            <Separator />
            <FlipCard value={timeLeft.minutes} label="Minutes" />
            <Separator />
            <FlipCard value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Milliseconds ticker */}
          <motion.div
            className="inline-flex items-center gap-3 bg-red-900/60 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-10"
            animate={{
              boxShadow: [
                "0 0 15px rgba(239, 68, 68, 0.3)",
                "0 0 30px rgba(239, 68, 68, 0.6)",
                "0 0 15px rgba(239, 68, 68, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="font-mono text-lg md:text-xl text-red-200 tracking-wider">
              .{timeLeft.milliseconds.toString().padStart(3, '0')}
            </span>
            <span className="text-xs text-red-400 uppercase tracking-widest">ms</span>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-base md:text-lg text-red-200/70 mb-5">
              Every second counts. Every action matters.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-primary text-white hover:bg-primary/20 text-lg md:text-xl font-bold px-8 py-4 animate-pulse"
            >
              <Link to="/join-movement">
                JOIN THE MISSION NOW!
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
