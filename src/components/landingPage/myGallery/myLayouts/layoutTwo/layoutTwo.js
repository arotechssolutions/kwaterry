// Styles
import styles from './layoutTwo.module.css'

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"

// Components
import Img from "../image/image"

const LayoutTwo = () => {
  return (
    <div className={styles.component}>
      <div className={styles.largeImage}>
        <Img src={img1} />
      </div>
      <div className={styles.smallImage}>
        <Img src={img2} />
      </div>
    </div>
  )
}

export default LayoutTwo
