"use client"

import Image from "next/image"

// Styles
import styles from "./image.module.css"

const GalleryImage = (props) => {
  return (
    <section className={styles.imageCover}>
        <Image src={props.src} alt="image-gallery" className={styles.image} />
        <p className={styles.infoTag}>Info</p>
    </section>
  )
}

export default GalleryImage
