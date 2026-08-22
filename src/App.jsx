import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout/MainLayout";

// Home is the heaviest, most interactive page (p5 + Matter.js) — the other
// routes are code-split so visitors landing on /about or /projects don't
// pay for the Home-only dependencies.
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail/ProjectDetail"));

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><About /></motion.div>} />
        <Route path="/projects" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
        <Route path="/projects/:slug" element={<motion.div {...pageTransition}><ProjectDetail /></motion.div>} />
        <Route
          path="*"
          element={
            <motion.div {...pageTransition} className="container-portfolio section-padding text-center">
              <h1 className="font-display text-3xl font-bold text-ink">Page not found</h1>
              <p className="mt-3 text-ink-soft">The page you're looking for doesn't exist.</p>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <AnimatedRoutes />
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
