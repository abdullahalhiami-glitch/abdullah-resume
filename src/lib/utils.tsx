import { HTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic easing
        delay,
      }}
      className={cn(fullWidth ? "w-full" : "", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-16 md:mb-24", className)}>
      <FadeIn direction="up">
        {subtitle && (
          <h3 className="text-[#00FF66] text-[10px] uppercase tracking-[2px] mb-3 font-bold">
            {subtitle}
          </h3>
        )}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-[600] leading-[1.1] tracking-[-1px] text-white">
          {title}
        </h2>
      </FadeIn>
    </div>
  );
}
