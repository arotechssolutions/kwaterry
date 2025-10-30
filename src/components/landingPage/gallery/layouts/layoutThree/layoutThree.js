// Styles
import styles from './layoutThree.module.css'

// Components
import Img from "../image/image"

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"
import img3 from "../../../../../../public/drumming_night.jpg"

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const LayoutThree = ({ images }) => {
  const sizes = layoutImageSizes.LayoutThree

  return (
    <div className={styles.layoutThree}>
      <div className={styles.leftColumn}>
        <div className={styles.smallImage}>
          <Img src={images[0]} {...sizes[0]} />
        </div>
        <div className={styles.smallImage}>
          <Img src={images[1]} {...sizes[1]} />
        </div>
      </div>
      <div className={styles.largeImage}>
        <Img src={images[2]} {...sizes[2]} />
      </div>
    </div>
  );
}

export default LayoutThree
