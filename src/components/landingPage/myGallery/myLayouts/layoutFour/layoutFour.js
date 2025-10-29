"use client"
import Image from "next/image"
import styles from "./layoutFour.module.css"

const layoutFour = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.leftColumn}>
        <div className={styles.topImage}>
          <Image src="/images/4runner-1.jpg" alt="image-gallery" className={styles.image} />
        </div>

        <div className={styles.bottomImages}>
          <div className={styles.smallImage}>
            <Image src="/images/4runner-2.jpg" alt="image-gallery" fill className={styles.image} />
          </div>
          <div className={styles.smallImage}>
            <Image src="/images/4runner-3.jpg" alt="image-gallery" fill className={styles.image} />
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <Image src="/images/4runner-4.jpg" alt="image-gallery" className={styles.image} />
      </div>
    </section>
  )
}

export default layoutFour
