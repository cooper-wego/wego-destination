import styles from "./gallery-image.module.css";

const GalleryImage = ({ image }) => {
  return <img className={styles.fluidImageIcon} alt="" src={image} />;
};

export default GalleryImage;
