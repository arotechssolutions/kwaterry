"use client"

// Styles
import styles from "./layoutFourOpp.module.css"

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
