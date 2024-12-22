import Hero from "./hero/page";
import Price from "./best_price/page";
import UsedCars from "./used_car/page";
import OurOfferings from "./offering/page";
import FeaturedUsedCars from "./featuredused_cars/page";
import FeaturedNewCar from "./featurednew_cars/page";
import AutoStore from "./autoparts_accessories/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Price/>
      <UsedCars/>
      <OurOfferings/>
      <FeaturedUsedCars/>
      <FeaturedNewCar/>
      <AutoStore/>
    </div>
  );
}
