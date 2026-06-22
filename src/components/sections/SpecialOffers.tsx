import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../data/mockdata.ts";

const specialOffers = products.slice(4, 8).map((p, i) => ({
  ...p,
  originalPrice: p.price * (1 + (i + 1) * 0.1),
  discount: `${(i + 1) * 5 + 10}%`,
  badge: `SALE ${(i + 1) * 5 + 10}%`,
}));

export default function SpecialOffers() {
  return (
    <section className="py-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase">
            Limited Time
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-2">
            Special Offers
          </h2>
          <div className="accent-line mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specialOffers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="group bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg overflow-hidden hover:border-[var(--color-gold)] transition-colors"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-sm">
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-2">
                    {product.brand}
                  </p>
                  <h3 className="text-sm font-semibold truncate">{product.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[var(--color-gold)] font-bold">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-sm line-through">
                      ${Math.round(product.originalPrice).toLocaleString()}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-[var(--color-gold)] text-[var(--color-bg)] text-sm font-semibold py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/collections"
            className="inline-block text-sm tracking-widest uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors border-b border-transparent hover:border-[var(--color-gold)] pb-1"
          >
            See All Deals →
          </Link>
        </div>
      </div>
    </section>
  );
}