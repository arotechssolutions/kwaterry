"use client"

import { useRef, useEffect, useState } from "react"

// Styles
import styles from "./accommodation.module.css"

// Components
import LayoutFour from "../gallery/layouts/layoutFour/layoutFour"
import LayoutThree from "../gallery/layouts/layoutThree/layoutThree"
import LayoutOne from "../gallery/layouts/layoutOne/layoutOne"
import LayoutFourOpp from "../gallery/layouts/layoutFourOpp/layoutFourOpp"
import LayoutThreeOpp from "../gallery/layouts/layoutThreeOpp/layoutThreeOpp"
import LayoutTwo from "../gallery/layouts/layoutTwo/layoutTwo"

import Amenities from "./amenities/amenities"
import BookingCard from "./reserveCard/reserveCard"

// Overlay
import Overlay from "../imageOverlay/imageOverlay"

// Helper to shuffle arrays
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5)

// Images database
const imagesDb = [
  '/mald7.png',
  '/mald6.jpg',
  '/mald4.jpg',
  '/mald5.jpeg',
  '/mald3.jpg',
  '/mald2.jpg',
  '/mald1.jpg'
]

// Define layout sizes
export const layoutImageSizes = {
  LayoutFour: [
    { width: 400, height: 300 },
    { width: 350, height: 500 },
    { width: 200, height: 200 },
    { width: 200, height: 200 },
  ],
  LayoutFourOpp: [
    { width: 400, height: 300 },
    { width: 350, height: 500 },
    { width: 200, height: 200 },
    { width: 200, height: 200 },
  ],
  LayoutThree: [
    { width: 300, height: 250 },
    { width: 300, height: 250 },
    { width: 400, height: 500 },
  ],
  LayoutThreeOpp: [
    { width: 400, height: 500 },
    { width: 300, height: 250 },
    { width: 300, height: 250 },
  ],
  LayoutTwo: [
    { width: 400, height: 500 },
    { width: 200, height: 500 },
  ],
  LayoutOne: [{ width: 400, height: 500 }],
}

// Layout sequence defined *after* all imports
const layoutSequence = [
  { component: LayoutFour, count: 4 },
  { component: LayoutFourOpp, count: 4 },
  { component: LayoutThree, count: 3 },
  { component: LayoutThreeOpp, count: 3 },
  { component: LayoutTwo, count: 2 },
  { component: LayoutOne, count: 1 },
]

// Cluster images into sections
function clusterImagesPreserveOrder(imagesDb, layoutSequence) {
  const sections = []
  let index = 0

  while (index < imagesDb.length) {
    const shuffledLayouts = shuffleArray(layoutSequence)
    let assigned = false

    for (let layout of shuffledLayouts) {
      if (index + layout.count <= imagesDb.length) {
        const slice = imagesDb.slice(index, index + layout.count)
        sections.push({ Layout: layout.component, images: slice })
        index += layout.count
        assigned = true
        break
      }
    }

    if (!assigned) break
  }

  return sections
}

const sections = clusterImagesPreserveOrder(imagesDb, layoutSequence)

const Accommodation = () => {
  const scrollerRef = useRef(null)
  const scrollInterval = useRef(null)
  const AUTO_SCROLL_SPEED = 0.6
  const [selectedImage, setSelectedImage] = useState(null)

  const startScroll = () => {
    if (!scrollerRef.current || scrollInterval.current) return
    scrollInterval.current = setInterval(() => {
      const el = scrollerRef.current
      if (!el) return
      el.scrollLeft += AUTO_SCROLL_SPEED
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0
    }, 16)
  }

  const stopScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current)
      scrollInterval.current = null
    }
  }

  useEffect(() => {
    startScroll()
    return stopScroll
  }, [])

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath)
    stopScroll()
  }

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

        <section 
        className={styles.gallerySection} 
        ref={scrollerRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}>
          {[...Array(2)].map((_, dupIndex) =>
          sections.map((section, i) => {
            const { Layout, images } = section
            const LayoutComponent = Layout
            return (
              <LayoutComponent
                key={`${dupIndex}-${i}`}
                images={images}
                onImageClick={handleImageClick}
              />
            )
          })
        )}
        </section>
        {selectedImage && (
                <Overlay
                  imagesDb={imagesDb}
                  image={selectedImage}
                  description="Captured at Sunray Lodge — experience nature, culture, and comfort in one place."
                  close={() => {
                    setSelectedImage(null)
                    startScroll()
                  }}
                />
              )}
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