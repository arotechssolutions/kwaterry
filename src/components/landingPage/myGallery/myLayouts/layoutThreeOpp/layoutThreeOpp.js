// Styles
import styles from './layoutThreeOpp.module.css'

// Components
import Img from "../image/image"

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"
import img3 from "../../../../../../public/drumming_night.jpg"

const LayoutThreeOpp = () => {
  return (
    <div className={styles.component}>
      <div className={styles.largeImage}>
        <Img src={img3} />
      </div>
       <div className={styles.leftColumn}>
        <div className={styles.smallImage}>
          <Img src={img1} />
        </div>
        <div className={styles.smallImage}>
          <Img src={img2} />
        </div>
      </div>
    </div>
  );
}

export default LayoutThreeOpp
