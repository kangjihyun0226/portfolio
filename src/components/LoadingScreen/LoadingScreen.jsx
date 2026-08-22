import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "dp_loaded_once";

/**
 * Short brand-moment loader shown once per browser session (not repeated on
 * every navigation) so return visitors aren't annoyed by it.
 */
export default function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1600);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-background"
          style={{ zIndex: "var(--z-loading)" }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-6 h-16 w-16 rounded-blob bg-primary"
          />
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-lg font-bold text-ink"
          >
            DesignPlayground
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
