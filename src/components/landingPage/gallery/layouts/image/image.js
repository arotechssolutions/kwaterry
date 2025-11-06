"use client"

import Image from "next/image"

// Styles
import styles from "./image.module.css"

const GalleryImage = ({ src, width, height, onImageClick }) => {
  if(width && height){
    return (
      <section className={styles.imageCover}>
        <Image src={src} alt="image-gallery" width={width} height={height} className={styles.image} onClick={()=>onImageClick(src)} />
        <p className={styles.infoTag}>Info</p>
      </section>
    )
  }

  return (
    <section className={styles.imageCover}>
      <Image src={src} alt="image-gallery" fill className={styles.image} onClick={()=>onImageClick(src)} />
      <p className={styles.infoTag}>Info</p>
    </section>
  )
}

export default GalleryImage
