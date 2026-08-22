import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteConfig from "../../data/siteConfig";
import MagneticButton from "../MagneticButton/MagneticButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[500] bg-background/90 backdrop-blur-sm">
      <nav className="container-portfolio flex items-center justify-between py-6 md:py-7">
        <NavLink
          to="/"
          className="font-display text-xl md:text-2xl font-extrabold text-primary tracking-tight"
          data-cursor="link"
        >
          {siteConfig.name}
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {siteConfig.nav.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                data-cursor="link"
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-primary underline underline-offset-8 decoration-2" : "text-ink hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href={siteConfig.resumeUrl}
            className="rounded-pill bg-primary px-6 py-2.5 text-sm font-semibold text-background inline-block"
            cursorType="button"
          >
            Resume
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-ink/10 bg-background"
          >
            <ul className="container-portfolio flex flex-col gap-5 py-6">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium ${isActive ? "text-primary" : "text-ink"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href={siteConfig.resumeUrl} className="inline-block rounded-pill bg-primary px-6 py-2.5 text-sm font-semibold text-background">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
