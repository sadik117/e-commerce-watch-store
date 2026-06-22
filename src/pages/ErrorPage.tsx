import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="relative max-w-2xl w-full text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[var(--color-gold)]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[var(--color-gold)]/5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-gold-gradient leading-none tracking-tight">
            404
          </h1>

          <div className="accent-line mx-auto mt-6" />

          <p className="font-heading text-2xl md:text-3xl font-semibold mt-6">
            Page Not Found
          </p>

          <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-md mx-auto mt-3 leading-relaxed">
            The timepiece you’re looking for seems to have wandered off. Perhaps you’d like to return to our collection?
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all duration-300 text-sm tracking-widest uppercase"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}