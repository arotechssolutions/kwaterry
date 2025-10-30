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

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const layoutFourOpp = ({ images }) => {
  const sizes = layoutImageSizes.LayoutFourOpp

  return (
    <section className={styles.component}>
      <div className={styles.leftColumn}>
        <div className={styles.topImage}>
          <Img src={images[0]} {...sizes[0]} />
        </div>

        <div className={styles.bottomImages}>
          <div className={styles.smallImage}>
            <Img src={images[1]} {...sizes[0]} />
          </div>
          <div className={styles.smallImage}>
            <Img src={images[2]} {...sizes[0]} />
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <Img src={images[3]} {...sizes[0]} />
      </div>
    </section>
  )
}

export default layoutFourOpp
