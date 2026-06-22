import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard.tsx";
import { products } from "../../data/mockdata.ts";

const bestSellers = products.slice(0, 4).map((p) => ({
  ...p,
  badge: "bestseller" as const,
}));

export default function BestSellers() {
  return (
    <section className="py-10 border-t border-[var(--color-border)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase">
            Most Coveted
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-2">
            Best Sellers
          </h2>
          <div className="accent-line mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-block text-sm tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 border-b border-transparent hover:border-[var(--color-gold)] pb-1"
          >
            View All Timepieces →
          </Link>
        </div>
      </div>
    </section>
  );
}