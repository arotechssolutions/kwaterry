"use client"

// Styles
import styles from "./layoutFour.module.css"

// Assets : Images
import img1 from "../../../../../../public/lordbrightoncollege/atbanner.jpg"
import img2 from "../../../../../../public/lordbrightoncollege/bus.jpg"
import img3 from "../../../../../../public/lordbrightoncollege/catchinghuku.jpg"
import img4 from "../../../../../../public/lordbrightoncollege/yazobatwa.jpg"

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
