import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to fade-in elements on scroll.
 * @param {number} delay - Optional delay in milliseconds before triggering visibility.
 * @returns {object} { ref, visible }
 */
export default function useScrollFade(delay = 0) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          // Once it intersects, stop observing so the animation triggers only once
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return { ref, visible };
}
