import { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ScrollProgress {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  sectionProgress: (start: number, end: number) => MotionValue<number>;
}

export const useScrollController = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Create section-specific progress tracker
  const sectionProgress = (start: number, end: number) => {
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  // Track scrolling state for performance optimization
  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    });

    return () => {
      unsubscribe();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollY]);

  return {
    scrollY,
    scrollYProgress,
    sectionProgress,
    isScrolling
  };
};

// Smooth scrolling utility
export const initSmoothScrolling = () => {
  if (typeof window !== 'undefined') {
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });
  }
};