"use client"

import { useState } from "react"
import Image from "next/image"

// Styles
import styles from "./gallery.module.css"

// Assets : Icons
import { X } from "lucide-react"

// Assets : Images
import heroImage from "../../../../public/hero_kwaterry.jpg"
import traditionalFood from "../../../../public/traditional_food.jpg"
import terryPortrait from "../../../../public/terry_portrait.jpg"
import drummingNight from "../../../../public/drumming_night.jpg"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: heroImage, alt: "Traditional thatched huts at KwaTerry", category: "Accommodation" },
    { src: traditionalFood, alt: "Authentic Zimbabwean dishes", category: "Cuisine" },
    { src: terryPortrait, alt: "Terry, your cultural host", category: "People" },
    { src: drummingNight, alt: "Traditional drumming and dancing", category: "Activities" },
    { src: heroImage, alt: "Rural Zimbabwean landscape", category: "Landscape" },
    { src: traditionalFood, alt: "Traditional cooking methods", category: "Culture" }
  ]

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerBadge}>Visual Journey</span>
          <h2 className={styles.headerTitle}>Experience KwaTerry</h2>
          <p className={styles.headerSubtitle}>
            Immerse yourself in the sights, sounds, and authentic beauty of traditional Zimbabwean culture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {
            galleryImages.map((image, index) => (
              <div key={index} className={styles.gridItem} style={{ animationDelay: `${index * 0.1}s` }} onClick={() => setSelectedImage(image.src)}>
                <div className={styles.imageWrapper}>
                  <Image src={image.src} alt={image.alt} className={styles.image} />
                </div>

                {/* Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.overlayBadge}>{image.category}</span>
                    <p className={styles.overlayText}>{image.alt}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Lightbox Modal */}
        {
          selectedImage && (
            <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
              <div className={styles.lightboxContent}>
                <button onClick={() => setSelectedImage(null)} className={styles.lightboxClose} aria-label="Close gallery" >
                  <X size={32} />
                </button>
                <Image src={selectedImage} alt="Gallery image" className={styles.lightboxImage} />
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Gallery
