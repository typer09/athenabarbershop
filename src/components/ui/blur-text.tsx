"use client";

/*
  Usage:
  <BlurText
    text="Isn't this so cool?!"
    delay={150}
    animateBy="words"
    direction="top"
    className="text-2xl mb-8"
  />
*/

import { motion, Transition, Variants } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, string | number>;
    animationTo?: Array<Record<string, string | number>>;
    easing?: string | number[];
    onAnimationComplete?: () => void;
    stepDuration?: number;
    triggerOnce?: boolean;
};

// Build keyframes function was slightly complex in original, creating a simpler compatible version for framer-motion structure if needed, 
// but sticking to user's implementation structure for fidelity.
const buildKeyframes = (
    from: Record<string, string | number>,
    steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
    const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

    const keyframes: Record<string, Array<string | number>> = {};
    keys.forEach(k => {
        // @ts-ignore
        keyframes[k] = [from[k], ...steps.map(s => s[k])];
    });
    return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = "easeInOut",
    onAnimationComplete,
    stepDuration = 0.35,
    triggerOnce = false,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce) {
                        observer.unobserve(ref.current as Element);
                    }
                } else if (!triggerOnce) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    const defaultFrom = useMemo(
        () =>
            direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            {
                filter: 'blur(5px)',
                opacity: 0.5,
                y: direction === 'top' ? 5 : -5
            },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
        ],
        [direction]
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;

    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

    return (
        <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
            {elements.map((segment, index) => {
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

                const spanTransition: Transition = {
                    duration: totalDuration,
                    times,
                    delay: (index * delay) / 1000,
                    ease: easing as any // Framer motion easing type compatibility
                };

                return (
                    <motion.span
                        key={index}
                        initial={fromSnapshot}
                        animate={inView ? animateKeyframes : fromSnapshot}
                        transition={spanTransition}
                        onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
                        style={{
                            display: 'inline-block',
                            willChange: 'transform, filter, opacity'
                        }}
                    >
                        {segment === ' ' ? '\u00A0' : segment}
                        {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                    </motion.span>
                );
            })}
        </p>
    );
};

export default BlurText;
