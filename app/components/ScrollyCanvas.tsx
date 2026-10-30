"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 47;

/** Generate the array of image paths once */
function getFramePaths(): string[] {
  return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const idx = String(i).padStart(2, "0");
    return `/sequence/frame_${idx}.gif`;
  });
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  /** Draw a single frame to the canvas with object-fit: cover logic */
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0)
      return;

    // Set canvas to actual pixel dimensions (Retina-ready)
    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;

    if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);
    }

    // Object-fit: cover calculation
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayW / displayH;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      // Image is wider → crop sides
      drawH = displayH;
      drawW = displayH * imgAspect;
      drawX = (displayW - drawW) / 2;
      drawY = 0;
    } else {
      // Image is taller → crop top/bottom
      drawW = displayW;
      drawH = displayW / imgAspect;
      drawX = 0;
      drawY = (displayH - drawH) / 2;
    }

    ctx.clearRect(0, 0, displayW, displayH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  /** Preload all images */
  useEffect(() => {
    const paths = getFramePaths();
    let loaded = 0;

    const images = paths.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          // Draw the first frame
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadingProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      };
      return img;
    });

    imagesRef.current = images;

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [drawFrame]);

  /** Subscribe to scroll and render frames via rAF */
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(Math.round(latest), TOTAL_FRAMES - 1);

    if (index !== currentFrameRef.current) {
      currentFrameRef.current = index;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(index);
      });
    }
  });

  /** Handle window resize */
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      id="scrolly-canvas-container"
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
            {/* Animated loading ring */}
            <div className="relative mb-8">
              <svg
                className="w-20 h-20"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="2"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="url(#loader-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${226.2 * (loadingProgress / 100)} 226.2`}
                  transform="rotate(-90 40 40)"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
                <defs>
                  <linearGradient
                    id="loader-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#c8a86e" />
                    <stop offset="100%" stopColor="#e8d5a8" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/60 font-[var(--font-display)]">
                {loadingProgress}%
              </span>
            </div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-white/30"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Loading Experience
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{
            display: "block",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* Cinematic vignette overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.6) 100%)",
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{
            height: "30%",
            background:
              "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
          }}
        />

        {/* Top gradient fade */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0"
          style={{
            height: "15%",
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
