import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatPrice } from "../../data/mockdata.ts";
import Badge from "./Badge.tsx";
import StarRating from "./StarRating.tsx";
import type { Product } from "../../types/types.ts";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block"
        id={`product-card-${product.id}`}
      >
        <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm overflow-hidden gold-glow transition-all duration-300">

          <div className="relative aspect-square overflow-hidden bg-[var(--color-bg)]">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-110"
              loading="lazy"
            />

            {product.badge && (
              <div className="absolute top-3 left-3">
                <Badge type={product.badge} />
              </div>
            )}

            {discount && (
              <div className="absolute top-3 right-3 bg-[var(--color-error)] text-white text-xs font-semibold px-2 py-1 rounded-sm">
                -{discount}%
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-6 py-2 backdrop-blur-sm">
                View Details
              </span>
            </div>
          </div>

          <div className="p-4">
            <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase mb-2">
              {product.brand}
            </p>
            <h3 className="font-heading text-lg font-medium mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
              {product.name}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} size="sm" />
              <span className="text-[var(--color-text-muted)] text-xs">
                ({product.reviewCount})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[var(--color-gold)] font-semibold text-lg">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[var(--color-text-muted)] text-sm line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
