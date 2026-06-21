import { Link } from "react-router-dom";
import { useState, type ReactElement } from "react";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineArrowUp,
} from "react-icons/hi2";

export default function Footer(): ReactElement {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Thank you for subscribing to CHRONOS news!");
    setEmail("");
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] relative">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-50" />

      <div className="container-custom py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-gold-gradient tracking-wider">
                CHRONOS
              </span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm">
              Engineered for Eternity. Since 1887, CHRONOS has been crafting
              timepieces that transcend generations.
            </p>
            
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex items-center border-b border-[var(--color-border)] focus-within:border-[var(--color-gold)] transition-colors duration-300"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-2 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="ml-0 md:ml-32">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  12 Rue du Rhône, 1204 Geneva, Switzerland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  +41 22 818 0000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineEnvelope className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  concierge@chronos.ch
                </span>
              </li>
            </ul>
            </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} CHRONOS. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 flex items-center gap-1"
          >
            <HiOutlineArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}