import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContents}>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.company}>COMPANY</div>
              <div className={styles.aboutWego}>About Wego</div>
              <div className={styles.aboutWego}>Press</div>
              <div className={styles.aboutWego}>Careers</div>
              <div className={styles.aboutWego}>Contact Us</div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.company}>LEARN MORE</div>
              <div className={styles.aboutWego}>Affiliates</div>
              <div className={styles.aboutWego}>Advertise</div>
              <div className={styles.aboutWego}>Hoteliers</div>
              <div className={styles.aboutWego}>Data Privacy Policy</div>
              <div className={styles.aboutWego}>Terms</div>
              <div className={styles.aboutWego}>Cookie Consent</div>
            </div>
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <div className={styles.company}>EXPLORE</div>
              <div className={styles.aboutWego}>Airport Directory</div>
              <div className={styles.aboutWego}>Airline Directory</div>
              <div className={styles.aboutWego}>Flight Schedules</div>
              <div className={styles.aboutWego}>Hotel Chains</div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.company}>Download</div>
              <div className={styles.aboutWego}>Wego App (iOS)</div>
              <div className={styles.aboutWego}>Wego App (Android)</div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.divider} />
          <div className={styles.frame}>
            <div className={styles.aboutWego}>©2020 Wego Pte Ltd</div>
            <div className={styles.socialMedia}>
              <img className={styles.icon} alt="" src="/icon4.svg" />
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <img className={styles.icon} alt="" src="/icon6.svg" />
            </div>
          </div>
          <div className={styles.wegoDoesNotContainer}>
            <p className={styles.wegoDoesNot}>
              Wego does not authorize anyone to collect payments on our behalf.
            </p>
            <p className={styles.wegoDoesNot}>
              We will never request for: 1. money transfers, 2. any form of
              offline payments, or 3. any payments through a third party on
              behalf of our company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
