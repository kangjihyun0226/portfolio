import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useLenis } from "../../hooks/useLenis";

export default function MainLayout({ children }) {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <LoadingScreen />
      <CustomCursor />
      <motion.div
        className="fixed left-0 top-0 z-[600] h-[3px] w-full origin-left bg-primary"
        style={{ scaleX }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-pill focus:bg-primary focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
