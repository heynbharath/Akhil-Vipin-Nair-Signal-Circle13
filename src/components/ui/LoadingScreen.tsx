"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loading materialization screen.
 * Circle13 logo materializes from glass, then the page fades in.
 * Shows for ~1.2s on first load.
 */
export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Logo materializes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "brightness(2) blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-4"
          >
            {/* Brand Logo */}
            <img 
              src="/brand/Circle13-logo-white.svg" 
              alt="Circle13 Logo" 
              className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-[12px] text-white/50 tracking-[0.4em] uppercase font-medium"
            >
              Circle13
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
