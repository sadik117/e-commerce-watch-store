import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineGlobeAlt } from "react-icons/hi2";

export default function WhyChooseUs() {
  return (
    <section className="py-8 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 border border-[var(--color-gold)]/30 translate-x-4 translate-y-4 rounded-sm" />

            <div className="absolute inset-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm overflow-hidden gold-glow group">
              <img 
                src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=1000&auto=format&fit=crop" 
                alt="Watchmaker craft" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[var(--color-bg)]/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Our Philosophy</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">A Legacy of Excellence</h2>
            <p className="text-[var(--color-text-muted)] text-md leading-relaxed mb-10">
              At CHRONOS, we believe a watch is more than a tool to measure time—it is a statement of intent, a marvel of engineering, and an heirloom to be passed through generations.
            </p>

            <div className="space-y-8">
              {[
                { icon: HiOutlineShieldCheck, title: "Uncompromising Quality", desc: "Every component is meticulously inspected to meet the highest Swiss standards." },
                { icon: HiOutlineSparkles, title: "Timeless Design", desc: "Aesthetics that transcend fleeting trends, offering enduring elegance." },
                { icon: HiOutlineGlobeAlt, title: "Global Heritage", desc: "Sourcing the finest materials from trusted partners across the globe." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center shrink-0 text-[var(--color-gold)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
