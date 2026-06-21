interface BadgeProps {
  type: "new" | "sale" | "bestseller";
}

const badgeStyles = {
  new: "bg-emerald-500/90 text-white",
  sale: "bg-[var(--color-error)]/90 text-white",
  bestseller: "bg-[var(--color-gold)]/90 text-[var(--color-bg)]",
};

const badgeLabels = {
  new: "New",
  sale: "Sale",
  bestseller: "Bestseller",
};

export default function Badge({ type }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm
        ${badgeStyles[type]}
      `}
    >
      {badgeLabels[type]}
    </span>
  );
}
