import { motion } from "framer-motion";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "James Whitfield",
    avatar: "JW",
    rating: 5,
    comment:
      "The Sovereign Chronograph is an absolute masterpiece. Every detail exudes quality. It's become my daily companion.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Eleanor Chen",
    avatar: "EC",
    rating: 5,
    comment:
      "I've owned many luxury watches, but the Eclipse Flyback is in a league of its own. The precision is breathtaking.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Marcus Vane",
    avatar: "MV",
    rating: 4,
    comment:
      "Excellent craftsmanship and service. The Abyssal 600 is robust yet elegant – perfect for my adventures.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Sophia Laurent",
    avatar: "SL",
    rating: 5,
    comment:
      "A true heirloom piece. CHRONOS has exceeded my expectations. I look forward to passing this down.",
    date: "5 days ago",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? (
          <HiStar key={i} className="w-4 h-4 text-[var(--color-gold)]" />
        ) : (
          <HiOutlineStar key={i} className="w-4 h-4 text-[var(--color-text-muted)]/50" />
        )
      )}
    </div>
  );
};

export default function CustomerReviews() {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-2">
            What Our Customers Say
          </h2>
          <div className="accent-line mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-gold)] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-semibold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-3 italic">
                “{review.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}