import { products } from "../data/mockdata.ts";
import ProductCard from "../components/shared/ProductCard.tsx";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function CollectionsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((p) => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-24 pb-2 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2">Our Masterpieces</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold">
            {query ? `Search Results for "${query}"` : "Collections"}
          </h1>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No timepieces found</h2>
            <p className="text-[var(--color-text-muted)]">We couldn't find any watches matching your search. Please try a different term.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-20"
          >
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
