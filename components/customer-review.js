import { useMemo } from "react";
import styles from "./customer-review.module.css";

const CustomerReview = ({
  username,
  review,
  reviewMessage,
  avatar,
  frame21AlignItems,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignItems: frame21AlignItems,
    };
  }, [frame21AlignItems]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <img className={styles.frameChild} alt="" src={avatar} />
        <div className={styles.wandaAriana}>{username}</div>
      </div>
      <div className={styles.highlyRecommendedParent}>
        <div className={styles.highlyRecommended}>{review}</div>
        <div className={styles.worthEvenIf}>{reviewMessage}</div>
      </div>
    </div>
  );
};

export default CustomerReview;
