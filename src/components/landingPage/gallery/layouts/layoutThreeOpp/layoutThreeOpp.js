// Styles
import styles from './layoutThreeOpp.module.css'

// Components
import Img from "../image/image"

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"
import img3 from "../../../../../../public/drumming_night.jpg"

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const LayoutThreeOpp = ({ images }) => {
  const sizes = layoutImageSizes.LayoutThreeOpp

  return (
    <div className={styles.component}>
      <div className={styles.largeImage}>
        <Img src={images[0]} {...sizes[2]} />
      </div>
       <div className={styles.leftColumn}>
        <div className={styles.smallImage}>
          <Img src={images[1]} {...sizes[0]} />
        </div>
        <div className={styles.smallImage}>
          <Img src={images[2]} {...sizes[1]} />
        </div>
      </div>
    </div>
  );
}

export default LayoutThreeOpp
