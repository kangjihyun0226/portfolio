import siteConfig from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="container-portfolio flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <span className="font-display text-xl font-extrabold text-ink">{siteConfig.footer.tagline}</span>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {siteConfig.footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                  data-cursor="link"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-ink-soft/80">{siteConfig.footer.note}</p>
      </div>
      {/* Contact info kept subtle here per project scope — no dedicated Contact page/route. */}
      <div className="container-portfolio pb-8 text-xs text-ink-soft/70">
        <a href={`mailto:${siteConfig.footer.email}`} className="hover:text-primary transition-colors" data-cursor="link">
          {siteConfig.footer.email}
        </a>
      </div>
    </footer>
  );
}
