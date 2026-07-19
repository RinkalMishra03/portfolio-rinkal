import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface AnimatedCounterProps {
  value: string | number;
  direction?: "up" | "down";
}

export default function AnimatedCounter({ value, direction = "up" }: AnimatedCounterProps) {
  // Extract number and suffix (e.g., "640+" -> 640 and "+", "1st" -> 1 and "st")
  const valueString = String(value);
  const match = valueString.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  
  let prefix = "";
  let numericValue = 0;
  let suffix = "";

  if (match) {
    prefix = match[1] || "";
    numericValue = parseInt(match[2], 10) || 0;
    suffix = match[3] || "";
  } else {
    // Fallback if regex doesn't match
    const cleanNumStr = valueString.replace(/[^0-9]/g, "");
    numericValue = parseInt(cleanNumStr, 10) || 0;
    suffix = valueString.replace(/[0-9]/g, "");
  }

  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  
  // High fidelity spring configuration for butter-smooth rendering
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 80,
    mass: 0.8
  });
  
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {direction === "down" ? valueString : `${prefix}0${suffix}`}
    </span>
  );
}
