import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getProductById, getRelatedProducts, formatPrice } from "../data/mockdata.ts";
import { useCart } from "../context/CartContext.tsx";
import QuantitySelector from "../components/shared/QuantitySelector.tsx";
import StarRating from "../components/shared/StarRating.tsx";
import Badge from "../components/shared/Badge.tsx";
import Button from "../components/shared/Button.tsx";
import ProductCard from "../components/shared/ProductCard.tsx";
import { HiOutlineShoppingBag, HiOutlineCheckCircle, HiOutlineTruck, HiOutlineShieldCheck } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const { addToCart, isInCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-4xl mb-4">Watch Not Found</h1>
        <p className="text-[var(--color-text-muted)] mb-8">
          The timepiece you're looking for doesn't exist in our collection.
        </p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20">
      <div className="container-custom py-4">
        <nav className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-[var(--color-gold)] transition-colors cursor-pointer">{product.category}</span>
          <span>/</span>
          <span className="text-[var(--color-text)]">{product.name}</span>
        </nav>
      </div>

      <section className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge type={product.badge} />
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-[var(--color-surface)] border rounded-sm overflow-hidden transition-all duration-300 ${
                    selectedImage === i
                      ? "border-[var(--color-gold)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-gold)]/50"
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2">
              {product.brand}
            </p>
            
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} size="md" />
              <span className="text-[var(--color-text-muted)] text-sm">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-gold)] text-3xl font-semibold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[var(--color-text-muted)] text-xl line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-heading text-lg font-medium mb-3">Specifications</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <HiOutlineCheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <span className="text-xs text-[var(--color-text-muted)] tracking-widest uppercase">
                Category:&nbsp;
              </span>
              <span className="text-xs text-[var(--color-gold)] tracking-widest uppercase">
                {product.category}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <QuantitySelector
                quantity={quantity}
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 10))}
                onDecrement={() => setQuantity((q) => Math.max(q - 1, 1))}
              />
              <Button
                variant={added ? "secondary" : "primary"}
                size="lg"
                fullWidth
                icon={<HiOutlineShoppingBag />}
                onClick={handleAddToCart}
                id="add-to-cart-btn"
              >
                {added ? "Added to Cart!" : isInCart(product.id) ? "Add More" : "Add to Cart"}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm">
              {[
                { icon: HiOutlineTruck, label: "Free Shipping" },
                { icon: HiOutlineShieldCheck, label: "2-Year Warranty" },
                { icon: HiOutlineCheckCircle, label: "Certified Authentic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding py-10 border-t border-[var(--color-border)]">
          <div className="container-custom">
            <div className="mb-10">
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-2">
                You May Also Like
              </p>
              <h2 className="font-heading text-3xl font-semibold">Related Timepieces</h2>
              <div className="accent-line mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
