"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import styles from "./gallery.module.css"
import LayoutA from "./layouts/layoutA"
import LayoutB from "./layouts/layoutB"
import LayoutC from "./layouts/layoutC"
import LayoutD from "./layouts/layoutD"

import GallerySection from "./gallerySection"

const allImages = [
  "/hero_kwaterry.jpg",
  "/traditional_food.jpg",
  "/terry_portrait.jpg",
  "/drumming_night.jpg",
  "/hero_kwaterry.jpg",
  "/hero_kwaterry.jpg",
  "/traditional_food.jpg",
  "/hero_kwaterry.jpg",
  "/drumming_night.jpg",
]

const layouts = [LayoutA, LayoutB, LayoutC, LayoutD]

const GalleryScroller = () => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random())
    const chunks = []
    for (let i = 0; i < shuffled.length; i += 4) {
      chunks.push(shuffled.slice(i, i + 4))
    }
    setSections(chunks)
  }, [])

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.scrollContainer}>

        {sections.map((images, i) => {
        const Layout = layouts[i % layouts.length]
        return <GallerySection key={i} Layout={Layout} images={images} />
})}

      </div>
    </div>
  )
}

export default GalleryScroller


