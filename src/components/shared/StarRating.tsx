import { HiStar } from "react-icons/hi2";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const sizeClasses = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export default function StarRating({
  rating,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        
        {Array.from({ length: fullStars }).map((_, i) => (
          <HiStar
            key={`full-${i}`}
            className={`${sizeClasses[size]} text-[var(--color-gold)]`}
          />
        ))}

        {hasHalf && (
          <div className={`relative ${sizeClasses[size]}`}>
            <HiStar
              className={`absolute inset-0 ${sizeClasses[size]} text-[var(--color-border)]`}
            />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <HiStar
                className={`${sizeClasses[size]} text-[var(--color-gold)]`}
              />
            </div>
          </div>
        )}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <HiStar
            key={`empty-${i}`}
            className={`${sizeClasses[size]} text-[var(--color-border)]`}
          />
        ))}
      </div>

      {showValue && (
        <span className="text-[var(--color-text-muted)] text-sm ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
