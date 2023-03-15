import { useEffect } from "react"
import LocaleSwitcher from "./locale-switcher"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import styles from "./nav-bar.module.css"

const NavBar = () => {
  const router = useRouter()
  const { t } = useTranslation()

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr"
    let lang = router.locale == "ar" ? "ar" : "en"
    document.querySelector("html").setAttribute("dir", dir)
    document.querySelector("html").setAttribute("lang", lang)
  }, [router.locale])

  return (
    <div className={styles.navBar}>
      <div className={styles.navContainer}>
        <div className={styles.navMenu}>
          <img className={styles.brandIcon} alt="" src="/brand.svg" />
          <div className={styles.navItems}>
            <div className={styles.navLink}>
              <div className={styles.flights}>{t("navbar.Flights")}</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>{t("navbar.Hotels")}</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>{t("navbar.Activities")}</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>{t("navbar.Car Rentals")}</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>{t("navbar.Travel Blog")}</div>
            </div>
          </div>
        </div>
        <div className={styles.navMenu1}>
          <LocaleSwitcher />
          <div className={styles.navDropdown}>
            <div className={styles.icon}>
              <img className={styles.personIcon} alt="" src="/person.svg" />
            </div>
            <div className={styles.icon1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
          <button className={styles.hamburgermenu}>
            <img className={styles.iconColor} alt="" src="/-icon-color.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

// <div className={styles.navDropdown}>
//             <div className={styles.icon}>
//               <img className={styles.flagIcon} alt="" src="/flag.svg" />
//             </div>
//             <div className={styles.icon1}>
//               <img className={styles.vectorIcon} alt="" src="/vector.svg" />
//             </div>
//           </div>
