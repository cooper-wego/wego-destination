import GalleryImage from "./gallery-image";
import styles from "./gallery-section.module.css";

const GallerySection = () => {
  return (
    <div className={styles.gallerySection}>
      <h1 className={styles.gallery}>Gallery</h1>
      <div className={styles.container}>
        <div className={styles.rows}>
          <div className={styles.gridColumns}>
            <GalleryImage image="/fluidimage@2x.png" />
            <GalleryImage image="/smallimage@2x.png" />
            <GalleryImage image="/smallimage1@2x.png" />
          </div>
          <div className={styles.gridColumns}>
            <GalleryImage image="/smallimage2@2x.png" />
            <GalleryImage image="/smallimage3@2x.png" />
            <div className={styles.lastImage}>
              <img
                className={styles.fluidImageIcon}
                alt=""
                src="/fluidimage1@2x.png"
              />
              <div className={styles.more}>99+ more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
