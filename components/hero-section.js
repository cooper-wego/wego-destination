import styles from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <div className={styles.welcome}>Welcome</div>
        <div className={styles.parisFrance}>Paris, France</div>
      </div>
    </div>
  );
};

export default HeroSection;
