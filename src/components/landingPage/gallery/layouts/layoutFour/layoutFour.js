"use client"

// Styles
import styles from "./layoutFour.module.css"

// Components
import Img from "../image/image"

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const layoutFour = ({ images, onImageClick }) => {
  const sizes = layoutImageSizes.LayoutFour

  return (
    <section className={styles.component}>
      <div className={styles.leftColumn}>
        <div className={styles.topImage}>
          <Img onImageClick={onImageClick} src={images[0]} {...sizes[0]} />
        </div>

        <div className={styles.bottomImages}>
          <div className={styles.smallImage}>
            <Img onImageClick={onImageClick} src={images[1]} {...sizes[2]} />
          </div>
          <div className={styles.smallImage}>
            <Img onImageClick={onImageClick} src={images[2]} {...sizes[3]} />
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <Img onImageClick={onImageClick} src={images[3]} {...sizes[1]} />
      </div>
    </section>
  )
}

export default layoutFour
