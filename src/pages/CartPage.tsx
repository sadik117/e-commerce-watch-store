import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext.tsx";
import QuantitySelector from "../components/shared/QuantitySelector.tsx";
import Button from "../components/shared/Button.tsx";
import { formatPrice } from "../data/mockdata.ts";
import { HiOutlineTrash, HiOutlineShoppingBag, HiArrowLeft } from "react-icons/hi2";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HiOutlineShoppingBag className="w-20 h-20 text-[var(--color-border)] mx-auto mb-6" />
          <h1 className="font-heading text-4xl mb-3">Your Cart is Empty</h1>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-sm mx-auto">
            Discover our curated collection of luxury timepieces and find your perfect watch.
          </p>
          <Link to="/">
            <Button size="lg">Explore Collection</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-12">
      <div className="container-custom py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors mb-4"
          >
            <HiArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="font-heading text-4xl font-semibold">
            Shopping Cart
          </h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => {
                const discount = item.product.originalPrice
                  ? Math.round(((item.product.originalPrice - item.product.price) / item.product.originalPrice) * 100)
                  : null;

                return (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                    className="flex gap-5 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm gold-glow"
                  >
                    <Link to={`/product/${item.product.id}`} className="shrink-0">
                      <div className="w-24 h-24 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-sm overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    <div className="flex-1 min-w-0">
                      <p className="text-[var(--color-gold)] text-[10px] tracking-[0.2em] uppercase mb-1">
                        {item.product.brand}
                      </p>
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-heading text-lg font-medium hover:text-[var(--color-gold)] transition-colors truncate">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-[var(--color-text-muted)] text-xs mt-1">
                        {item.product.category}
                      </p>

                      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">

                        <QuantitySelector
                          quantity={item.quantity}
                          onIncrement={() => incrementQuantity(item.product.id)}
                          onDecrement={() => decrementQuantity(item.product.id)}
                        />

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-[var(--color-gold)] font-semibold">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-[var(--color-text-muted)] text-xs">
                                {formatPrice(item.product.price)} each
                              </p>
                            )}
                            {discount && (
                              <p className="text-[var(--color-text-muted)] text-xs line-through">
                                {formatPrice((item.product.originalPrice ?? item.product.price) * item.quantity)}
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-error)] transition-colors duration-300"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <HiOutlineTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-6 sticky top-24">
              <h2 className="font-heading text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)] truncate mr-2">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="shrink-0 font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--color-border)] pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Shipping</span>
                  <span className="text-[var(--color-success)]">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Tax (estimated)</span>
                  <span>{formatPrice(totalPrice * 0.08)}</span>
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-[var(--color-gold)]">
                    {formatPrice(totalPrice * 1.08)}
                  </span>
                </div>
              </div>

              <Link to="/checkout">
                <Button variant="primary" size="lg" fullWidth>
                  Proceed to Checkout
                </Button>
              </Link>

              <p className="text-[10px] text-[var(--color-text-muted)] text-center mt-4 tracking-wider">
                Secure checkout · SSL encrypted
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
