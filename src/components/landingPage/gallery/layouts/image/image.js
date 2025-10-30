"use client"

import Image from "next/image"

// Styles
import styles from "./image.module.css"

const GalleryImage = ({ src, width, height }) => {
  return (
    <section className={styles.imageCover}>
        <Image src={src} alt="image-gallery" fill className={styles.image} />
        <p className={styles.infoTag}>Info</p>
    </section>
  )
}

export default GalleryImage
