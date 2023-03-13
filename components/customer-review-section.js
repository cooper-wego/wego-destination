import CustomerReview from "./customer-review";
import styles from "./customer-review-section.module.css";

const CustomerReviewSection = () => {
  return (
    <div className={styles.reviewSection}>
      <h1 className={styles.whatPeopleLove}>What people love about Paris</h1>
      <div className={styles.frame}>
        <CustomerReview
          username="Wanda Ariana"
          review="Highly recommended"
          reviewMessage="worth! Even if I have the opportunity to go to Paris next time, I will still participate again. Sitting on the outside of the ship is much more beautiful than inside, and the Eiffel Tower will flash on the hour. The banks of the Seine River are like in a painting, and the dusk is more beautiful, like in a dream. Seeing a completely different scenery from the boat, there are also headphones with audio guide to increase the understanding of the scenery, but you must wear a jacket outside the boat!"
          avatar="/rectangle-4312@2x.png"
        />
        <CustomerReview
          username="Sean William"
          review="Highly recommended"
          reviewMessage="In the case of the French traffic strike, public transportation and the subway are very chaotic. With this sightseeing bus tour package, you can easily visit the main attractions in the center of Paris. Unfortunately, the traffic on the road is also very congested. The time of the traffic jam is compared. long. Fortunately, the car provides free tour navigation and scenic spots introduction recording, which is very interesting. The ticket redemption method is also very convenient. You only need to use the QR code to direct..."
          avatar="/rectangle-4313@2x.png"
          frame21AlignItems="flex-start"
        />
        <CustomerReview
          username="Seline Walls"
          review="Highly recommended"
          reviewMessage="I remember that after buying the pass on KLOOK, you will need to redeem the physical ticket of the museum at the designated place~~ Although there is one more procedure, the overall is not very troublesome and the instructions are clear. The attitude of the service staff is also very good, friendly and fast! (Chinese is also spoken!) So it is really recommended to use KLOOK to buy tickets before arriving in the local area. In addition to the transparent price and less affected by exchange rate fluctuations, the price will..."
          avatar="/rectangle-4314@2x.png"
          frame21AlignItems="flex-start"
        />
      </div>
    </div>
  );
};

export default CustomerReviewSection;
