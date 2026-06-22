import { motion } from "framer-motion";
import Button from "../shared/Button.tsx";

export default function Newsletter() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-surface)_0%,var(--color-bg)_100%)] z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Join The Club</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">Stay Ahead of Time</h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-10">
            Subscribe to receive exclusive access to limited editions, private events, and news from the world of haute horlogerie.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-sm text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder:text-[var(--color-text-muted)] text-[var(--color-text)]"
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
