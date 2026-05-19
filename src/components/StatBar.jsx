import { useEffect, useState, useRef } from 'react';
import useScrollFade from '../hooks/useScrollFade';

export default function StatBar() {
  const { ref, visible } = useScrollFade();
  
  const statsList = [
    { target: 99.9, suffix: '%', label: 'Uptime goal', delay: 0 },
    { target: 25, suffix: ' min', label: 'Critical response time', delay: 100 },
    { target: 15, suffix: '', label: 'Local businesses supported', delay: 200 },
    { target: 8, suffix: ' yrs', label: 'Local business experience', delay: 300 }
  ];

  return (
    <section className="bg-bg-secondary py-10 border-y border-border-light relative z-20">
      <div 
        ref={ref}
        className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center"
      >
        {statsList.map((stat, i) => (
          <CounterItem 
            key={i} 
            target={stat.target} 
            suffix={stat.suffix} 
            prefix={stat.prefix} 
            label={stat.label} 
            delay={stat.delay}
            parentVisible={visible}
          />
        ))}
      </div>
    </section>
  );
}

function CounterItem({ target, suffix = '', prefix = '', label, delay, parentVisible }) {
  const [currentVal, setCurrentVal] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!parentVisible || animatedRef.current) return;
    
    // Staggered start delay
    const startTimeout = setTimeout(() => {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds animation time

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing out function
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const nextValue = easeProgress * target;

        // Float vs Int formatting
        if (target % 1 !== 0) {
          setCurrentVal(nextValue.toFixed(1));
        } else {
          setCurrentVal(Math.floor(nextValue));
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCurrentVal(target);
          animatedRef.current = true;
        }
      };

      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [parentVisible, target, delay]);

  return (
    <div className="flex flex-col items-center text-center select-none">
      <span className="text-3xl sm:text-4xl font-extrabold text-accent mb-1 tracking-tight">
        {`${prefix}${currentVal}${suffix}`}
      </span>
      <span className="text-xs sm:text-sm font-medium text-text-secondary">
        {label}
      </span>
    </div>
  );
}
