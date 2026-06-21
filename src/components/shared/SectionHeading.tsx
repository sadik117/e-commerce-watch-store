import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      <div
        className={`accent-line mt-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
