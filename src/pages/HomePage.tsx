export default function HomePage() {
  return (
    <div className="pt-20">

      <section className="section-padding container-custom flex flex-col items-center justify-center text-center min-h-[60vh]">
        <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          Engineered for Eternity
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold mb-6">
          <span className="text-gold-gradient">CHRONOS</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-lg text-lg">
          Luxury timepieces crafted with Swiss precision. Sections coming soon.
        </p>
        <div className="accent-line mx-auto mt-8" />
      </section>
    </div>
  );
}
