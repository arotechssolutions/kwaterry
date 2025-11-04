"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarRange, Pause, Play, ChevronUp, ChevronRight } from "lucide-react"
import styles from "./hero.module.css"

const mediaDb = [
  { type: "image", src: "/arealphoto.jpg" },
  { type: "image", src: "/newphotos/vwgtcars.webp" },
  { type: "image", src: "/newphotos/buffet.webp" },
  { type: "video", src: "/trimmedvid.mp4" },
  { type: "image", src: "/newphotos/whitescooking.webp" },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const duration = 6000

  // Auto-slide
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mediaDb.length)
    }, duration)
    return () => clearInterval(timer)
  }, [isPaused])

  const currentMedia = mediaDb[current]

  const nextSlide = () => setCurrent((prev) => (prev + 1) % mediaDb.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + mediaDb.length) % mediaDb.length)
  const jumpToSlide = (idx) => setCurrent(idx)

  return (
    <section id="home" className={styles.heroSection} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div key={currentMedia.src} className={styles.mediaWrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.8, ease: "easeInOut" }}>
          {
            currentMedia.type === "image" && (
              <Image src={currentMedia.src} alt="KwaTerry Media" fill className={styles.parallax} unoptimized priority quality={100} />
            )
          }

          {
            currentMedia.type === "video" && (
              <video className={styles.parallax} autoPlay loop muted playsInline>
                <source src={currentMedia.src} type="video/mp4" />
              </video>
            )
          }
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Kwa<span className={styles.highlight}>Terry</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Discover an authentic rural zimbabwean experience through traditional food, cultural immersion,
          and unforgettable rural experiences at KwaTerry.
        </p>

        <p className={styles.bookingNotice}>
          Booking Notice: Walk-ins are welcome! For groups, please book in advance.
        </p>

        <div className={styles.floatingBadge}>
          <CalendarRange size={22} color="#5c3b23" />
          <h1 className={styles.badgeText}>Book An Experience</h1>
        </div>
      </div>

      {/* Progress Bars */}
      <div className={styles.progressWrapper}>
        {
          mediaDb.map((_, idx) => (
              <div key={idx} className={styles.progressTrack} onClick={() => jumpToSlide(idx)}>
                <div className={`${styles.progressBar} ${idx === current ? styles.activeProgress : ""}`}
                  style={{ animationDuration: idx === current ? `${duration}ms` : "0ms",}}/>
              </div>
            ))
        }
      </div>

      {/* Controls */}
      <div className={styles.controlPanel}>
        <button onClick={prevSlide}>
          <ChevronUp size={12} />
        </button>

        <button onClick={() => setIsPaused((p) => !p)}>
          { isPaused ? <Play size={12} /> : <Pause size={12} /> }
        </button>

        <button onClick={nextSlide}>
          <ChevronRight size={12} />
        </button>
      </div>
    </section>
  )
}

export default Hero
