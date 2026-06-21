import { type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-bg)] hover:bg-[var(--color-gold-light)] font-semibold",
  secondary:
    "bg-transparent border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] font-semibold",
  outline:
    "bg-transparent border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-sm tracking-wider uppercase
        transition-colors duration-300
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        disabled:opacity-40 disabled:pointer-events-none
        ${className}
      `}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  );
}
