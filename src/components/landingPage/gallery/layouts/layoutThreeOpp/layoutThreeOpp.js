// Styles
import styles from './layoutThreeOpp.module.css'

// Components
import Img from "../image/image"

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const LayoutThreeOpp = ({ images, onImageClick }) => {
  const sizes = layoutImageSizes.LayoutThreeOpp

  return (
    <div className={styles.component}>
      <div className={styles.largeImage}>
        <Img onImageClick={onImageClick} src={images[0]} {...sizes[2]} />
      </div>
       <div className={styles.leftColumn}>
        <div className={styles.smallImage}>
          <Img onImageClick={onImageClick} src={images[1]} {...sizes[0]} />
        </div>
        <div className={styles.smallImage}>
          <Img onImageClick={onImageClick} src={images[2]} {...sizes[1]} />
        </div>
      </div>
    </div>
  );
}

export default LayoutThreeOpp
