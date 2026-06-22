import { motion, type Variants } from "framer-motion";
import ProductCard from "../shared/ProductCard.tsx";
import type { Product } from "../../types/types.ts";

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  if (products.length === 0) return null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="py-10 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2">Latest Additions</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">New Arrivals</h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
