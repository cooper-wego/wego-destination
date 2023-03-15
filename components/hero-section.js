import { useTranslation } from "next-i18next"
import styles from "./hero-section.module.css"

const HeroSection = ({ title }) => {
  const { t } = useTranslation("")
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <div className={styles.welcome}>{t("hero.Welcome to")}</div>
        <div className={styles.parisFrance}>{title}</div>
      </div>
    </div>
  )
}

export default HeroSection
