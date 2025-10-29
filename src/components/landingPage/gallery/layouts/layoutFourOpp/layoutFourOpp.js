"use client"

// Styles
import styles from "./layoutFourOpp.module.css"

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"
import img2 from "../../../../../../public/traditional_food.jpg"
import img3 from "../../../../../../public/drumming_night.jpg"
import img4 from "../../../../../../public/terry_portrait.jpg"

// Components
import Img from "../image/image"

const layoutFour = () => {
  return (
    <section className={styles.component}>
      <div className={styles.leftColumn}>
        <div className={styles.topImage}>
          <Img src={img1} />
        </div>

        <div className={styles.bottomImages}>
          <div className={styles.smallImage}>
            <Img src={img2} />
          </div>
          <div className={styles.smallImage}>
            <Img src={img3} />
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <Img src={img4} />
      </div>
    </section>
  )
}

export default layoutFour
