import { useState, useEffect, useCallback, type ReactElement } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiBars3,
  HiXMark,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { useCart } from "../../context/CartContext.tsx";

interface NavLinkType {
  name: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function useLockBodyScroll(lock: boolean): void {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lock]);
}

export default function Navbar(): ReactElement {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const [bump, setBump] = useState<boolean>(false);

  useLockBodyScroll(isMobileOpen);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  const openMobileMenu = useCallback(() => setIsMobileOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), []);
  const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.07, ease: "easeOut" },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-14">
          <Link
            to="/"
            className="flex items-center gap-3 group relative"
            id="navbar-logo"
          >
            <span className="text-2xl text-[var(--color-gold)]">⌚</span>
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-gold-gradient">
              CHRONOS
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--color-gold)] group-hover:w-full transition-all duration-500 ease-[var(--ease-luxury)]" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 ${
                    isActive ? "text-[var(--color-gold)]" : ""
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-gold)] transition-all duration-300 ease-[var(--ease-luxury)] group-hover:w-full" />

                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"
                  />
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSearch}
              className="hidden md:flex p-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              aria-label="Search"
            >
              <HiOutlineMagnifyingGlass className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="relative p-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              id="navbar-cart"
              aria-label="Shopping cart"
            >
              <motion.div
                animate={bump ? { scale: 1.2 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <HiOutlineShoppingBag className="w-6 h-6" />
              </motion.div>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[var(--color-gold)] text-[var(--color-bg)] text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              type="button"
              className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              onClick={openMobileMenu}
              aria-label="Open menu"
            >
              <HiBars3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--color-surface)]/95 backdrop-blur-lg border-b border-[var(--color-border)] py-6 px-4"
          >
            <form 
              className="container-custom flex items-center gap-4"
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                placeholder="Search for timepieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-b border-[var(--color-border)] py-2 text-lg text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-300"
                autoFocus
              />
              <button
                type="button"
                onClick={toggleSearch}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                aria-label="Close search"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[var(--color-surface)] border-l border-[var(--color-border)] flex flex-col"
            >

              <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
                <span className="font-heading text-2xl font-bold text-gold-gradient">
                  CHRONOS
                </span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  aria-label="Close menu"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col p-8 gap-8 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={mobileItemVariants}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-lg tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300 ${
                          isActive ? "text-[var(--color-gold)]" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="mt-auto w-16 h-px bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}