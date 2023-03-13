import styles from "./panaromic-section.module.css";

const PanaromicSection = () => {
  return (
    <div className={styles.aframeSection}>
      <h1 className={styles.degreeView}>360 degree view</h1>
      <div className={styles.container}>
        <div className={styles.frame}>
          <img
            className={styles.roundedRectangleIcon}
            alt=""
            src="/rounded-rectangle@2x.png"
          />
          <button className={styles.masterSmall}>
            <img
              className={styles.degreeRotateIcon1}
              alt=""
              src="/360degreerotateicon-1.svg"
            />
            <div className={styles.smallButton}>Panoramic view</div>
          </button>
        </div>
        <div className={styles.frame1}>
          <img
            className={styles.roundedRectangleIcon1}
            alt=""
            src="/rounded-rectangle1@2x.png"
          />
          <button className={styles.masterSmall}>
            <img
              className={styles.degreeRotateIcon1}
              alt=""
              src="/360degreerotateicon-1.svg"
            />
            <div className={styles.smallButton}>Panoramic view</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanaromicSection;
