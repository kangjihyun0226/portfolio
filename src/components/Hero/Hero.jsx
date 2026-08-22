import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import siteConfig from "../../data/siteConfig";
import FloatingShapes from "../FloatingShapes/FloatingShapes";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import PhysicsShapes from "./PhysicsShapes";
import MagneticButton from "../MagneticButton/MagneticButton";
import { heroSequence } from "../../animations/hero";
import { useMagnetic } from "../../animations/magnetic";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";
import { useParallax } from "../../animations/parallax";

function MagneticHeadline({ children, className, strength }) {
  const isTouch = useIsTouchDevice();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(strength);
  if (isTouch) return <span className={className}>{children}</span>;
  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const { y: parallaxY, ref: parallaxRef } = useParallax(0.25, 120);

  return (
    <section ref={parallaxRef} className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden">
      <ParticleBackground particleCount={50} color="#FF4B4B" />
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <FloatingShapes />
      </motion.div>
      <PhysicsShapes className="z-[1]" />

      <div className="container-portfolio relative z-10 flex flex-col items-center py-24 text-center">
        <motion.h1
          {...heroSequence.line1}
          className="font-display text-[14vw] leading-[0.95] font-extrabold text-ink sm:text-[10vw] md:text-[8vw] lg:text-[7rem]"
        >
          <MagneticHeadline strength={0.12}>{siteConfig.hero.lineOne}</MagneticHeadline>
        </motion.h1>
        <motion.h2
          {...heroSequence.line2}
          className="font-display text-[9vw] leading-[0.95] font-extrabold text-primary sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5rem]"
        >
          <MagneticHeadline strength={0.1}>{siteConfig.hero.lineTwo}</MagneticHeadline>
        </motion.h2>

        <motion.p {...heroSequence.description} className="mt-8 max-w-xl font-korean text-base text-ink-soft md:text-lg">
          디자인으로 더 나은 경험을 만드는 커뮤니케이션 디자이너,{" "}
          <strong className="font-semibold text-ink">강지현</strong>입니다.
        </motion.p>

        <motion.div {...heroSequence.description} className="mt-10">
          <MagneticButton
            as="a"
            href="/projects"
            className="inline-block rounded-pill bg-primary px-8 py-3.5 text-sm font-semibold text-background"
            cursorType="button"
            strength={0.5}
          >
            View My Work
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        {...heroSequence.scrollCue}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-ink-soft"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
