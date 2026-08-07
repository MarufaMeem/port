"use client";

import { useRef, useEffect, useCallback } from "react";

export interface MousePosition {
    x: number; // -1 to 1
    y: number; // -1 to 1
}

/**
 * Tracks normalised mouse position across the window.
 * Returns a ref (not state) to avoid re-renders on every mouse move.
 * Call getPosition() to read the current value imperatively.
 */
export function useMousePosition() {
    const posRef = useRef<MousePosition>({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            // Cancel pending frame
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                posRef.current = {
                    x: (e.clientX / window.innerWidth) * 2 - 1,
                    y: (e.clientY / window.innerHeight) * 2 - 1,
                };
            });
        };

        // Only on non-touch devices
        const isTouch = window.matchMedia("(hover: none)").matches;
        if (!isTouch) {
            window.addEventListener("mousemove", handleMove, { passive: true });
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const getPosition = useCallback(() => posRef.current, []);
    return getPosition;
}

/**
 * Interpolates a value toward a target using lerp.
 * Useful for smooth mouse-following animations.
 */
export function lerp(current: number, target: number, factor: number): number {
    return current + (target - current) * factor;
}

/**
 * Hook: returns a ref to attach to an element.
 * Animates the element's transform based on mouse position
 * with configurable depth/speed.
 *
 * @param speed  movement multiplier (pixels). e.g. 8 = moves 8px max
 * @param enabled set false on mobile/reduced-motion
 */
export function useParallaxRef(speed = 8, enabled = true) {
    const elementRef = useRef<HTMLDivElement>(null);
    const currentPos = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!enabled) return;

        const handleMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            };
        };

        const animate = () => {
            currentPos.current.x = lerp(currentPos.current.x, mouseRef.current.x * speed, 0.06);
            currentPos.current.y = lerp(currentPos.current.y, mouseRef.current.y * speed, 0.06);

            if (elementRef.current) {
                elementRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        const isTouch = window.matchMedia("(hover: none)").matches;
        if (!isTouch) {
            window.addEventListener("mousemove", handleMove, { passive: true });
            rafRef.current = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [speed, enabled]);

    return elementRef;
}

/**
 * Hook: 3D tilt on mouse hover for a card element.
 * Returns a ref to attach to the card.
 *
 * @param maxTilt  max degrees of rotation (e.g. 6)
 * @param enabled  disable on mobile/reduced-motion
 */
export function useTiltRef(maxTilt = 6, enabled = true) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card || !enabled) return;

        const isTouch = window.matchMedia("(hover: none)").matches;
        if (isTouch) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to +1
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to +1

            const rotateX = -y * maxTilt;
            const rotateY = x * maxTilt;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
            card.style.transition = "transform 0.1s ease-out";
        };

        const handleMouseLeave = () => {
            card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
            card.style.transition = "transform 0.4s ease-out";
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [maxTilt, enabled]);

    return cardRef;
}
