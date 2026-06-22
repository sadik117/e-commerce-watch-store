import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi2";

const Section = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-surface)] to-[var(--color-bg)]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(201,169,110,0.05) 0%, transparent 40%)
            `,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--color-gold)]/10 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--color-gold)]/5" />

        <div className="relative z-10 text-center container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Since 1887
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gold-gradient leading-tight">
              Engineered for Eternity
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-[var(--color-text-muted)] text-lg md:text-xl">
              We craft timepieces that transcend generations — where Swiss precision meets uncompromising artistry.
            </p>
            <Link
              to="/collections"
              className="inline-block mt-10 px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Discover Our Collections
            </Link>
          </motion.div>
        </div>
      </section>

      <Section delay={0.1}>
        <div className="container-custom py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Our Story
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-base md:text-lg">
              CHRONOS was born in the heart of Geneva, where watchmaking is not
              just a craft but a way of life. For over 130 years, we have
              dedicated ourselves to the pursuit of horological perfection. Every
              CHRONOS timepiece is assembled by master watchmakers who pour
              decades of expertise into each movement. We believe a watch is more
              than an instrument — it is a companion for life’s most significant
              moments.
            </p>
          </div>
        </div>
      </Section>

      <Section delay={0.2}>
        <div className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
          <div className="container-custom py-20 md:py-28">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold">
                The Art of Precision
              </h2>
              <div className="accent-line mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <HiOutlineCog className="w-8 h-8" />,
                  title: "Swiss Movement",
                  desc: "Every caliber is engineered and assembled in our Geneva atelier, ensuring unrivaled accuracy.",
                },
                {
                  icon: <HiOutlineShieldCheck className="w-8 h-8" />,
                  title: "Premium Materials",
                  desc: "We source only the finest 18k gold, surgical-grade steel, and sapphire crystal for lasting brilliance.",
                },
                {
                  icon: <HiOutlineClock className="w-8 h-8" />,
                  title: "Timeless Design",
                  desc: "Our aesthetics are inspired by classic architecture, refined for the contemporary connoisseur.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mt-4">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm mt-2 max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section delay={0.3}>
        <div className="container-custom py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">
              Our Legacy
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </div>

          <div className="relative max-w-4xl mx-auto">

            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {[
                { year: "1887", event: "Founded in Geneva by Henri Vallée, CHRONOS begins its journey." },
                { year: "1950", event: "Launches the first automatic chronograph movement, setting a new industry standard." },
                { year: "2000", event: "Introduces the Abyssal collection – water‑resistant to 600m, a marvel of engineering." },
                { year: "2024", event: "Continues to innovate with proprietary in‑house calibers and sustainable practices." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12 text-left md:text-right">
                    <span className="text-[var(--color-gold)] font-heading text-3xl md:text-4xl font-bold">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex items-center justify-center w-full md:w-2/12">
                    <span className="w-4 h-4 rounded-full bg-[var(--color-gold)] border-4 border-[var(--color-bg)] shadow-gold z-10" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-gold)]/10 blur-xl" />
                  </div>
                  <div className="w-full md:w-5/12 text-left">
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}