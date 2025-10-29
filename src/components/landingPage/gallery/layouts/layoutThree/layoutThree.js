// Styles
import styles from './layoutThree.module.css'

// Components
import Img from "../image/image"

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"
import img3 from "../../../../../../public/drumming_night.jpg"

const LayoutThree = () => {
  return (
    <div className={styles.layoutThree}>
      <div className={styles.leftColumn}>
        <div className={styles.smallImage}>
          <Img src={img1} />
        </div>
        <div className={styles.smallImage}>
          <Img src={img2} />
        </div>
      </div>
      <div className={styles.largeImage}>
        <Img src={img3} />
      </div>
    </div>
  );
}

export default LayoutThree
