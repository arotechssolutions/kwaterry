"use client"

import { useRef, useEffect, useState } from "react"
import styles from "./gallery.module.css"

// Layout imports
import LayoutFour from "./layouts/layoutFour/layoutFour"
import LayoutFourOpp from "./layouts/layoutFourOpp/layoutFourOpp"
import LayoutThree from "./layouts/layoutThree/layoutThree"
import LayoutThreeOpp from "./layouts/layoutThreeOpp/layoutThreeOpp"
import LayoutTwo from "./layouts/layoutTwo/layoutTwo"
import LayoutOne from "./layouts/layoutOne/layoutOne"

// Overlay
import Overlay from "../imageOverlay/imageOverlay"

// 🔹 Helper to shuffle arrays
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5)

// 🔹 Images database
const imagesDb = [
  "/morenew/roadrunnerrimwe.jpg",
  "/morenew/roadrunner.jpg",
  "/morenew/outsidecarpark.webp",
  "/morenew/treehouse.webp",
  "/morenew/shitboys.webp",
  "/morenew/gango.webp",
  "/morenew/quadbikes.webp",
  "/morenew/kamuchina.webp",
  "/morenew/proposal.webp",
  "/morenew/servedfoodmix.webp",
  "/morenew/servedfish.webp",
  "/morenew/sunsettreehouse.webp",
  "/morenew/mukombe.webp",
  "/morenew/bakyard.webp",
  "/morenew/whitewithhen.webp",
  "/newphotos/buffet.webp",
  "/newphotos/carpark.webp",
  "/newphotos/crowdatentrance.webp",
  "/newphotos/firstgazebo.webp",
  "/newphotos/firstgazebosummer.webp",
  "/newphotos/greenlawn.jpg",
  "/newphotos/motorbikes.jpg",
  "/newphotos/servedfood.jpg",
  "/newphotos/servedfood.webp",
  "/newphotos/treehouse.webp",
  "/newphotos/vintageterry.webp",
  "/newphotos/visitoratentrance.webp",
  "/newphotos/vwgtcars.webp",
  "/newphotos/whitescooking.webp",
  "/lordbrightoncollege/atbanner.jpg",
  "/lordbrightoncollege/bus.jpg",
  "/lordbrightoncollege/catchinghuku.jpg",
  "/lordbrightoncollege/yazobatwa.jpg",
  "/lordbrightoncollege/runningbird.jpg",
  "/lordbrightoncollege/pamutohwe.jpg",
  "/buses/bus.jpg",
  "/buses/chickeninfc.jpg",
  "/buses/dynamos.jpg",
  "/buses/nombeyawora.jpg",
  "/celebs/madamboss.jpg",
  "/celebs/mbeu.jpg",
  "/celebs/nishat.jpg",
  "/celebs/nuttyo.jpg",
  "/celebs/poptain.jpg",
  "/celebs/footballer.jpg",
  "/celebs/comicelderonbike.jpg",
  "/celebs/babanamaichisamba.jpg",
  "/vimbaihigh/bus.jpg",
  "/vimbaihigh/infield.jpg",
  "/vimbaihigh/vibing.jpg",
  "/vimbaihigh/withterry.jpg",
  "/wiseowl/on_bike_2.jpg",
  "/wiseowl/on_bike_3.jpg",
  "/wiseowl/on_bike.jpg",
  "/wiseowl/teacher_with_kids.jpg",
  "/wiseowl/wise_owl_bus.jpg",
  "/wiseowl/wise_owl_foodtable.jpg",
]

// 🔹 Define layout sizes
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

// 🔹 Layout sequence defined *after* all imports
const layoutSequence = [
  { component: LayoutFour, count: 4 },
  { component: LayoutFourOpp, count: 4 },
  { component: LayoutThree, count: 3 },
  { component: LayoutThreeOpp, count: 3 },
  { component: LayoutTwo, count: 2 },
  { component: LayoutOne, count: 1 },
]

// 🔹 Cluster images into sections
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

// 🔹 Main Gallery component
const Gallery = () => {
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
    <section className={styles.component}>
      <div className={styles.fadeLeft}></div>
      <div className={styles.fadeRight}></div>

      <section
        className={styles.corusel}
        ref={scrollerRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
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
    </section>
  )
}

export default Gallery
