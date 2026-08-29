"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

function hueFromPath(path: string) {
  let hash = 0;
  for (let index = 0; index < path.length; index++) {
    hash = (hash << 5) - hash + path.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % 360;
}

export default function PlaceholderPhoto({ src, alt, className = "" }: Props) {
  const [failedToLoad, setFailedToLoad] = useState(false);
  const hue = hueFromPath(src);

  return (
    <div
      className={`relative overflow-hidden bg-[--color-paper-warm] ${className}`}
      role="img"
      aria-label={alt}
    >
      {failedToLoad ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 28% 92%) 0%, hsl(${hue} 18% 82%) 100%)`,
          }}
        />
      ) : (
        // The PDF-derived photos are served as local static assets and fill arbitrary editorial frames.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailedToLoad(true)}
        />
      )}
    </div>
  );
}
