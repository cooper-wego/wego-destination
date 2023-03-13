import styles from "./nav-bar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navContainer}>
        <div className={styles.navMenu}>
          <img className={styles.brandIcon} alt="" src="/brand.svg" />
          <div className={styles.navItems}>
            <div className={styles.navLink}>
              <div className={styles.flights}>Flights</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>Hotels</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>Activities</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>Car Rentals</div>
            </div>
            <div className={styles.navLink}>
              <div className={styles.flights}>Travel Blog</div>
            </div>
          </div>
        </div>
        <div className={styles.navMenu1}>
          <div className={styles.navDropdown}>
            <div className={styles.icon}>
              <img className={styles.flagIcon} alt="" src="/flag.svg" />
            </div>
            <div className={styles.icon1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
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
  );
};

export default NavBar;
