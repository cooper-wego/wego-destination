import styles from "./stories-section.module.css";

const StoriesSection = () => {
  return (
    <div className={styles.storiesSection}>
      <h1 className={styles.relatedStories}>Related Stories</h1>
      <div className={styles.container}>
        <div className={styles.cards}>
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          <h4 className={styles.lremIpsumsDel}>
            Lrem Ipsums del gelgrs enc laihskl kiclnje sadk; as;ldk;lasd
          </h4>
        </div>
        <div className={styles.gridRows}>
          <div className={styles.gridColumns}>
            <div className={styles.cards1}>
              <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
              <h4 className={styles.lremIpsumsDel1}>
                Lrem Ipsums del gelgrs enc laihskl kiclnje
              </h4>
            </div>
            <div className={styles.cards1}>
              <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
              <h4 className={styles.lremIpsumsDel2}>
                Lrem Ipsums del gelgrs enc laihskl kiclnje
              </h4>
            </div>
          </div>
          <div className={styles.cards1}>
            <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
            <h4 className={styles.lremIpsumsDel3}>
              Lrem Ipsums del gelgrs enc laihskl kiclnje
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
