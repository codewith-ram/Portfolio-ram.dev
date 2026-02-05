"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // We map the scroll progress of this container to the frame index
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Adjust this based on actual file count. Prompt said "up to roughly 89 frames".
    // Assuming 00 to 89
    const frameCount = 89;

    useEffect(() => {
        let isMounted = true;

        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i <= frameCount; i++) {
                // Construct filename: frame_00_delay-0.067s.webp
                const indexStr = i.toString().padStart(2, "0");
                const src = `/sequence/frame_${indexStr}_delay-0.067s.webp`;

                const img = new Image();
                img.src = src;
                const promise = new Promise<void>((resolve) => {
                    img.onload = () => resolve();
                    img.onerror = () => {
                        // Suppress error if the file is missing, just purely to not crash the logic.
                        // But in dev mode it might log 404.
                        resolve();
                    };
                });
                promises.push(promise);
                loadedImages.push(img);
            }

            await Promise.all(promises);

            if (isMounted) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img.complete || img.naturalWidth === 0) return;

        // Handle high-DPI displays
        const dpr = window.devicePixelRatio || 1;

        // Ensure canvas size matches window size
        if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        }

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const w = window.innerWidth;
        const h = window.innerHeight;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // "object-fit: cover" logic
        const scale = Math.max(w / iw, h / ih);
        const x = (w - iw * scale) / 2;
        const y = (h - ih * scale) / 2;

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const totalFrames = images.length;
        // Map scroll 0..1 to frame index
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && images.length > 0) {
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(
                    images.length - 1,
                    Math.floor(currentProgress * images.length)
                );
                renderFrame(frameIndex);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, scrollYProgress]);

    // Initial Paint
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#030303]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <Overlay scrollYProgress={scrollYProgress} />
                <canvas ref={canvasRef} className="block w-full h-full" />
                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-20 bg-[#030303]">
                        <p className="animate-pulse text-xl font-light tracking-wide mix-blend-difference">
                            LOADING SEQUENCE...
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
