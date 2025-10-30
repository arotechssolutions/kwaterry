"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Styles
import styles from "./hero.module.css"

const imagesDb = [
  "/newphotos/buffet.webp",
  "/newphotos/carpark.webp",
  "/newphotos/crowdatentrance.webp",
  "/newphotos/firstgazebo.webp",
  "/newphotos/firstgazebosummer.webp",
  "/newphotos/greenlawn.jpg",
  "/newphotos/motorbikes.jpg",
  "/newphotos/servedfood.jpg",
  "/newphotos/treehouse.webp",
  "/newphotos/vintageterry.webp",
  "/newphotos/visitoratentrance.webp",
  "/newphotos/vwgtcars.webp",
  "/newphotos/whitescooking.webp",
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate every 6 seconds, but pause on hover
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagesDb.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section
      id="home"
      className={styles.heroSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imagesDb[current]}
          className={styles.parallax}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={imagesDb[current]}
            alt="KwaTerry Background"
            fill
            className={styles.parallax}
            unoptimized
            priority
            quality={100}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay and pattern */}
      <div className={styles.overlay}></div>
      <div className={styles.heroPattern}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Authentic Rural Zimbabwean Experience</h1>
        <p className={styles.heroSubtitle}>
          Discover the heart of Zimbabwe through traditional food, cultural immersion,
          and unforgettable rural experiences at KwaTerry.
        </p>

        <div className={styles.floatingBadgeWrapper}>
          <div className={styles.floatingBadge}>
            <div className={styles.badgeDot}></div>
            <span className={styles.badgeText}>Authentic Cultural Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollOuter}>
          <div className={styles.scrollInner}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero















































































































































































































// import Image from "next/image"

// // Styles
// import styles from "./hero.module.css"

// // Assets : Images
// import heroImage from "../../../../public/arealphoto.jpg"
// // hero_kwaterry

// const Hero = () => {
//   return (
//     <section id="home" className={styles.heroSection}>
//       {/* Background Image with Parallax */}
//       <Image  
//       src={heroImage}
//   alt="hero"
//   fill
//   className={styles.parallax}
//   unoptimized
//   priority
//   quality={100} />
//       {/* Overlay */}
//       <div className={styles.overlay}></div>

//       {/* Hero Pattern */}
//       <div className={styles.heroPattern}></div>

//       {/* Content */}
//       <div className={styles.heroContent}>
//         <h1 className={styles.heroTitle}>
//           Authentic Rural Zimbabwean Experience
//         </h1>
        
//         <p className={styles.heroSubtitle}>
//           Discover the heart of Zimbabwe through traditional food, cultural immersion, and unforgettable rural experiences at KwaTerry.
//         </p>

//         {/* Floating Badge */}
//         <div className={styles.floatingBadgeWrapper}>
//           <div className={styles.floatingBadge}>
//             <div className={styles.badgeDot}></div>
//             <span className={styles.badgeText}>Authentic Cultural Experience</span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className={styles.scrollIndicator}>
//         <div className={styles.scrollOuter}>
//           <div className={styles.scrollInner}></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
