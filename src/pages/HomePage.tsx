import { products } from "../data/mockdata.ts";
import Hero from "../components/sections/Hero.tsx";
import FeaturedProducts from "../components/sections/FeaturedProducts.tsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.tsx";
import NewArrivals from "../components/sections/NewArrivals.tsx";
import Newsletter from "../components/sections/Newsletter.tsx";
import BestSellers from "../components/sections/BestSeller.tsx";
import SpecialOffers from "../components/sections/SpecialOffers.tsx";
import CustomerReviews from "../components/sections/CustomerReviews.tsx";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.features).slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "new").slice(0, 4);

  return (
    <div>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <NewArrivals products={newArrivals} />
      <BestSellers />
      <SpecialOffers />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
}
