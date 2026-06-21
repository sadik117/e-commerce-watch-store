import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-18">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-gold)]/5 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-bg)_100%)] z-10" />
      </div>

      <div className="container-custom relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[var(--color-gold)]/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--color-border)] rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          
          <p className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-6 font-medium relative z-10">
            Swiss Precision. Modern Design.
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight relative z-10">
            MASTER <span className="italic text-[var(--color-gold)] font-light px-2">YOUR</span> TIME
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[var(--color-text-muted)] max-w-xl text-lg md:text-xl mb-10 leading-relaxed"
        >
          Discover our curated collection of luxury timepieces, where heritage craftsmanship meets contemporary elegance.
        </motion.p>
      </div>
    </section>
  );
}
