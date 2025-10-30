"use client"

// React
import { useRef, useEffect } from "react"

// Styles
import styles from "./gallery.module.css"

// Layouts
import LayoutFour from "./layouts/layoutFour/layoutFour"
import LayoutFourOpp from "./layouts/layoutFourOpp/layoutFourOpp"
import LayoutThree from "./layouts/layoutThree/layoutThree"
import LayoutThreeOpp from "./layouts/layoutThreeOpp/layoutThreeOpp"
import LayoutTwo from "./layouts/layoutTwo/layoutTwo"
import LayoutOne from "./layouts/layoutOne/layoutOne"

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
  LayoutOne: [
    { width: 400, height: 500 },
  ]
}

const imagesDb = [
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

const layoutSequence = [
  { component: LayoutFour, count: 4 },
  { component: LayoutFourOpp, count: 4 },
  { component: LayoutThree, count: 3 },
  { component: LayoutThreeOpp, count: 3 },
  { component: LayoutTwo, count: 2 },
  { component: LayoutOne, count: 1 },
]

// Shuffle helper
const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5)

// Shuffle only layout order — keep image order
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

// use new logic
const sections = clusterImagesPreserveOrder(imagesDb, layoutSequence)

const Gallery = () => {
  const scrollerRef = useRef(null)
  const scrollInterval = useRef(null)

  const AUTO_SCROLL_SPEED = 0.6 // adjust speed

  // ✅ Start auto scroll
  const startScroll = () => {
    if (!scrollerRef.current) return
    if (scrollInterval.current) return // prevent duplicates

    scrollInterval.current = setInterval(() => {
      const el = scrollerRef.current
      if (!el) return

      el.scrollLeft += AUTO_SCROLL_SPEED

      // ✅ Loop continuously
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }
    }, 16) // ~60FPS feel
  }

  // ✅ Stop scrolling
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

  return (
    <section className={styles.component}>
      <section
        className={styles.corusel}
        ref={scrollerRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
        {/* ✅ duplicate the gallery for infinite scroll */}
        {
          [...Array(2)].map((_, dupIndex) =>
            sections.map((section, i) => {
              const { Layout, images } = section
              return <Layout key={`${dupIndex}-${i}`} images={images} />
            })
          )
        }
      </section>
    </section>
  )
}



export default Gallery
