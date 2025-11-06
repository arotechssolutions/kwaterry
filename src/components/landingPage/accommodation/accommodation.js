"use client"
import styles from "./accommodation.module.css"

// Components
import LayoutFour from "../gallery/layouts/layoutFour/layoutFour"
import LayoutThree from "../gallery/layouts/layoutThree/layoutThree"
import LayoutOne from "../gallery/layouts/layoutOne/layoutOne"
import Amenities from "./amenities/amenities"
import BookingCard from "./reserveCard/reserveCard"

// Assets : Photos
const images = [
  '/mald7.png',
  '/mald6.jpg',
  '/mald4.jpg',
  '/mald5.jpeg'
]

const array_of_3 = [
  '/mald3.jpg',
  '/mald2.jpg',
  '/mald1.jpg'
]

const Accommodation = () => {
  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
            <div className={styles.headerBadge}>
              <span>Accommodation</span>
            </div>
            <h3 className={styles.galleryTitle}>
              <span className={styles.highlight}>Traditional Thatched Huts</span> at KwaTerry
            </h3>
            <div className={styles.headerText}>
              Experience authentic rural living in our traditional thatched huts, surrounded by trees and peaceful countryside views. Each hut is built with natural materials and designed for comfort, offering an ensuite bathroom and a quiet space to relax. It’s an ideal setting for travelers who want to enjoy nature, local culture, and a calm rural atmosphere.
              {/* 10 identical huts · Ensuite bathroom · Serene nature surroundings */}
            </div>
        </div>

        {/* Fade overlays */}
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <section className={styles.gallerySection}>
          <LayoutFour images={images} />
          <LayoutThree images={array_of_3} />
        </section>
      </div>
      <main className={styles.main}>
        <div className={styles.left}>
          <Amenities />
        </div>
        <div className={styles.right}>
          <BookingCard />
        </div>
      </main>
    </section>
  )
}

export default Accommodation