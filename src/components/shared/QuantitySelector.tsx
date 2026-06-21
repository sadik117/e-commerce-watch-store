import { HiMinus, HiPlus } from "react-icons/hi2";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 10,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-[var(--color-border)] rounded-sm">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <HiMinus className="w-4 h-4" />
      </button>

      <span className="w-12 text-center text-sm font-medium tabular-nums select-none">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <HiPlus className="w-4 h-4" />
      </button>
    </div>
  );
}
