import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const BigCountdownTimer = () => {
  // New Year's Eve 2030 transitioning to 2031 - January 1st, 2031 at 12:00:00 AM
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
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-red-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <Clock className="w-12 h-12 text-red-400 mr-4 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold text-red-100">
              TIME TO HDI 0.90 DEADLINE
            </h2>
            <Clock className="w-12 h-12 text-red-400 ml-4 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-red-200 mb-12 max-w-3xl mx-auto">
            The countdown to achieving our collective goal of HDI 0.90 by January 1st, 2031
          </p>

          {/* Timer Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-8">
            {/* Years */}
            <motion.div
              className="bg-red-800/50 backdrop-blur-sm border-2 border-red-400 rounded-xl p-6 md:p-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-100 mb-2 font-mono">
                {timeLeft.years}
              </div>
              <div className="text-lg md:text-xl text-red-300 font-semibold">
                YEARS
              </div>
            </motion.div>

            {/* Months */}
            <motion.div
              className="bg-red-800/50 backdrop-blur-sm border-2 border-red-400 rounded-xl p-6 md:p-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-100 mb-2 font-mono">
                {timeLeft.months}
              </div>
              <div className="text-lg md:text-xl text-red-300 font-semibold">
                MONTHS
              </div>
            </motion.div>

            {/* Days */}
            <motion.div
              className="bg-red-800/50 backdrop-blur-sm border-2 border-red-400 rounded-xl p-6 md:p-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-100 mb-2 font-mono">
                {timeLeft.days}
              </div>
              <div className="text-lg md:text-xl text-red-300 font-semibold">
                DAYS
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-red-800/50 backdrop-blur-sm border-2 border-red-400 rounded-xl p-6 md:p-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-100 mb-2 font-mono">
                {timeLeft.hours}
              </div>
              <div className="text-lg md:text-xl text-red-300 font-semibold">
                HOURS
              </div>
            </motion.div>
          </div>

          {/* Precise Time */}
          <motion.div
            className="bg-red-900/70 backdrop-blur-sm border border-red-400 rounded-lg p-4 md:p-6 max-w-lg mx-auto mb-8"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(239, 68, 68, 0.8)",
                "0 0 20px rgba(239, 68, 68, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-2xl md:text-3xl font-mono text-red-100 mb-2">
              {timeLeft.minutes.toString().padStart(2, '0')}:
              {timeLeft.seconds.toString().padStart(2, '0')}.
              <span className="text-lg">{timeLeft.milliseconds.toString().padStart(3, '0')}</span>
            </div>
            <div className="text-sm md:text-base text-red-300">
              MINUTES : SECONDS . MILLISECONDS
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-red-200 mb-4">
              Every second counts. Every action matters.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-transparent border-2 border-primary text-white hover:bg-primary/20 text-xl md:text-2xl font-bold px-8 py-4 animate-pulse"
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