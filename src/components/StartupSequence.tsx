"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  "INITIALIZING DEVELOPER PROFILE",
  "Loading Skills...",
  "Loading Projects...",
  "Loading GitHub Analytics...",
  "Loading Engineering Dashboard...",
  "System Ready",
];

export default function StartupSequence({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Text steps animation
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => onComplete(), 800); // Wait a bit after System Ready
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-[#00E5FF] font-mono"
    >
      <div className="relative flex flex-col items-center max-w-md w-full px-8">
        {/* Futuristic Spinner/Ring */}
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="rgba(0, 229, 255, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="#00E5FF"
              strokeWidth="2"
              strokeDasharray={283}
              strokeDashoffset={283 - (283 * Math.min(progress, 100)) / 100}
              className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </div>

        {/* Text Steps */}
        <div className="h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm tracking-[0.2em] text-center text-[#94A3B8]"
            >
              {steps[currentStep]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
