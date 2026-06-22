import Newsletter from "../components/sections/Newsletter.tsx";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-[var(--color-surface)] py-20 border-b border-[var(--color-border)] text-center">
        <div className="container-custom">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-6">Contact Us</h1>
          <div className="accent-line mx-auto" />
        </div>
      </section>

      <section className="py-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-sm flex flex-col items-center">
            <HiOutlineMapPin className="w-8 h-8 text-[var(--color-gold)] mb-4" />
            <h3 className="font-heading text-xl mb-2">Boutique</h3>
            <p className="text-[var(--color-text-muted)] text-sm">
              12 Rue du Rhône <br /> 1204 Geneva <br /> Switzerland
            </p>
          </div>
          <div className="p-8 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-sm flex flex-col items-center">
            <HiOutlinePhone className="w-8 h-8 text-[var(--color-gold)] mb-4" />
            <h3 className="font-heading text-xl mb-2">Phone</h3>
            <p className="text-[var(--color-text-muted)] text-sm">
              +41 22 818 0000<br />Mon-Fri, 9am - 6pm
            </p>
          </div>
          <div className="p-8 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-sm flex flex-col items-center">
            <HiOutlineEnvelope className="w-8 h-8 text-[var(--color-gold)] mb-4" />
            <h3 className="font-heading text-xl mb-2">Email</h3>
            <p className="text-[var(--color-text-muted)] text-sm">
              concierge@chronos.ch<br />support@chronos.com
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
