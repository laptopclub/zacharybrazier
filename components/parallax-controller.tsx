"use client";

import { useEffect } from "react";

type ParallaxElement = HTMLElement & {
  dataset: DOMStringMap & {
    parallaxSpeed?: string;
  };
};

function getSpeed(element: ParallaxElement): number {
  const speed = Number(element.dataset.parallaxSpeed);
  return Number.isFinite(speed) ? speed : 0.12;
}

export function ParallaxController() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<ParallaxElement>("[data-parallax-speed]"));

    if (!elements.length || mediaQuery.matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      for (const element of elements) {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - elementCenter) * getSpeed(element);
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      }
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      for (const element of elements) {
        element.style.removeProperty("--parallax-y");
      }
    };
  }, []);

  return null;
}
