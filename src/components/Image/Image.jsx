import { useState } from "react";

/**
 * Wraps <img> with lazy loading, a blur/skeleton placeholder while loading,
 * and a graceful fallback if the source errors out. Keeps aspect ratio
 * stable to avoid layout shift.
 */
export default function Image({ src, alt, className = "", aspectRatio = "4/3", ...props }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`} style={{ aspectRatio }}>
      {status !== "error" && src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
      {status !== "loaded" && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface text-ink-soft/50 text-xs">
          {status === "error" ? (alt || "Image unavailable") : ""}
        </div>
      )}
    </div>
  );
}
