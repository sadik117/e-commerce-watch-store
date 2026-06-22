import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ProductCard from "../shared/ProductCard.tsx";
import type { Product } from "../../types/types.ts";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
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
    <section id="collection" className="py-10 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2">Curated Selection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">Featured Masterpieces</h2>
            <div className="accent-line mt-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/collections" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors group">
              View All Watches
              <HiOutlineArrowLongRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
