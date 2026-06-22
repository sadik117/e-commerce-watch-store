import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext.tsx";
import Button from "../components/shared/Button.tsx";
import { formatPrice } from "../data/mockdata.ts";
import {
  HiOutlineCreditCard,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import type { FormData, PaymentMethod } from "../types/types.ts";

const initialForm: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", state: "", zip: "", country: "",
  payment: "credit-card",
  cardNumber: "", cardName: "", expiry: "", cvv: "",
};

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const tax = totalPrice * 0.05;
  const total = totalPrice + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const required: (keyof FormData)[] = [
      "firstName", "lastName", "email", "phone",
      "address", "city", "state", "zip", "country",
    ];
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    required.forEach((field) => {
      if (!form[field]) newErrors[field] = "This field is required";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <HiOutlineShoppingBag className="w-20 h-20 text-[var(--color-border)] mx-auto mb-6" />
        <h1 className="font-heading text-4xl mb-3">Nothing to Checkout</h1>
        <p className="text-[var(--color-text-muted)] mb-8">Your cart is empty.</p>
        <Link to="/"><Button>Browse Collection</Button></Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-24 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center mx-auto mb-8">
            <HiOutlineCheckCircle className="w-12 h-12 text-[var(--color-gold)]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Order Placed</h1>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for your purchase. A CHRONOS concierge will contact you within 24 hours
            to confirm your order and arrange delivery.
          </p>
          <p className="text-[var(--color-gold)] text-sm tracking-widest uppercase mb-8">
            Confirmation sent to {form.email}
          </p>
          <Link to="/collections">
            <Button size="lg">Continue Exploring</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) => `
    w-full px-4 py-3 bg-[var(--color-bg)] border rounded-sm text-sm text-[var(--color-text)]
    placeholder:text-[var(--color-text-muted)] focus:outline-none transition-colors duration-300
    ${errors[field]
      ? "border-[var(--color-error)]"
      : "border-[var(--color-border)] focus:border-[var(--color-gold)]"}
  `;

  return (
    <div className="pt-20">
      <div className="container-custom py-12">
  
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors mb-4"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="font-heading text-4xl font-semibold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-6"
            >
              <h2 className="font-heading text-xl font-semibold mb-6">Customer Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} placeholder="James" />
                  {errors.firstName && <p className="text-[var(--color-error)] text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Last Name *</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} placeholder="Lancaster" />
                  {errors.lastName && <p className="text-[var(--color-error)] text-xs mt-1">{errors.lastName}</p>}
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="james@example.com" />
                  {errors.email && <p className="text-[var(--color-error)] text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Phone *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+1 555 000 0000" />
                  {errors.phone && <p className="text-[var(--color-error)] text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-6"
            >
              <h2 className="font-heading text-xl font-semibold mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Street Address *</label>
                  <input name="address" value={form.address} onChange={handleChange} className={inputClass("address")} placeholder="123 Mayfair Street" />
                  {errors.address && <p className="text-[var(--color-error)] text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">City *</label>
                    <input name="city" value={form.city} onChange={handleChange} className={inputClass("city")} placeholder="London" />
                    {errors.city && <p className="text-[var(--color-error)] text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">State / Region *</label>
                    <input name="state" value={form.state} onChange={handleChange} className={inputClass("state")} placeholder="Greater London" />
                    {errors.state && <p className="text-[var(--color-error)] text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">ZIP / Postcode *</label>
                    <input name="zip" value={form.zip} onChange={handleChange} className={inputClass("zip")} placeholder="W1K 1QA" />
                    {errors.zip && <p className="text-[var(--color-error)] text-xs mt-1">{errors.zip}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Country *</label>
                    <input name="country" value={form.country} onChange={handleChange} className={inputClass("country")} placeholder="United Kingdom" />
                    {errors.country && <p className="text-[var(--color-error)] text-xs mt-1">{errors.country}</p>}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-6"
            >
              <h2 className="font-heading text-xl font-semibold mb-6">Payment Method</h2>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {([
                  { value: "credit-card", label: "Credit Card" },
                ] as { value: PaymentMethod; label: string }[]).map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex items-center justify-center gap-2 py-3 border rounded-sm cursor-pointer text-sm transition-all duration-300 ${
                      form.payment === value
                        ? "border-[var(--color-gold)] text-[var(--color-gold)]"
                        : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={value}
                      checked={form.payment === value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {value === "credit-card" && <HiOutlineCreditCard className="w-4 h-4 shrink-0" />}
                    <span className="text-xs tracking-wider">{label}</span>
                  </label>
                ))}
              </div>

              <AnimatePresence>
                {form.payment === "credit-card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div>
                      <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Card Number</label>
                      <input name="cardNumber" value={form.cardNumber} onChange={handleChange} className={inputClass("cardNumber")} placeholder="•••• •••• •••• ••••" maxLength={19} />
                    </div>
                    <div>
                      <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Name on Card</label>
                      <input name="cardName" value={form.cardName} onChange={handleChange} className={inputClass("cardName")} placeholder="JAMES LANCASTER" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">Expiry</label>
                        <input name="expiry" value={form.expiry} onChange={handleChange} className={inputClass("expiry")} placeholder="MM / YY" maxLength={7} />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--color-text-muted)] mb-1 tracking-wider uppercase">CVV</label>
                        <input name="cvv" value={form.cvv} onChange={handleChange} className={inputClass("cvv")} placeholder="•••" maxLength={4} type="password" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm p-6 sticky top-24">
              <h2 className="font-heading text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-14 h-14 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-sm overflow-hidden shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-[var(--color-text-muted)] text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--color-border)] pt-4 space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Shipping</span>
                  <span className="text-[var(--color-success)]">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Tax (5%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-[var(--color-gold)]">{formatPrice(total)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handlePlaceOrder}
                id="place-order-btn"
              >
                Place Order
              </Button>

              <p className="text-[10px] text-[var(--color-text-muted)] text-center mt-4 tracking-wider">
                By placing your order you agree to our Terms of Service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
