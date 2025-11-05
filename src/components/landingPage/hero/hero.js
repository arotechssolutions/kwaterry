"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Assets
import { motion, AnimatePresence } from "framer-motion"
import { CalendarRange, MapPin, Pause, SquareArrowOutUpRight, Play, ChevronLeft, ChevronRight } from "lucide-react"

// Styles
import styles from "./hero.module.css"

// Components
import Navigation from "@/components/landingPage/navigation/navigation"
import Overlay from "@/components/landingPage/overlay/overlay"

const mediaDb = [
  { type: "image", src: "/arealphoto.jpg" },
  { type: "image", src: "/newphotos/vwgtcars.webp" },
  { type: "image", src: "/newphotos/buffet.webp" },
  { type: "video", src: "/trimmedvid.mp4" },
  { type: "image", src: "/newphotos/whitescooking.webp" },
]

const descriptions = [
  "bikes",
  "vws",
  "Tafura",
  "Mugwazvangu.",
  "Muzungu."
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [overlayInfo, setOverlayInfo] = useState("")
  const [description, setDescription] = useState(descriptions[0])

  const duration = 6000

  const openOverlay = () => setIsOverlayOpen(true)
  const pauseAnimation = () => setIsPaused(true)
  const resumeAnimation = () => setIsPaused(false)

  const closeOverlay = () => {
    setIsOverlayOpen(false)
    resumeAnimation()
  }

  const setInfo = () => {
    setOverlayInfo(description)
    openOverlay()
    pauseAnimation()
  }

  // Auto-slide
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => {
          return (prev + 1) % mediaDb.length
        }
      )
      setDescription(descriptions[(current + 1) % mediaDb.length])
    }, duration)
    return () => clearInterval(timer)
  }, [isPaused])

  const currentMedia = mediaDb[current]

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % mediaDb.length)
    setDescription(descriptions[(current + 1) % mediaDb.length])
  }
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + mediaDb.length) % mediaDb.length)
    setDescription(descriptions[(current - 1 + mediaDb.length) % mediaDb.length])
  }
  const jumpToSlide = (idx) => {
    setCurrent(idx)
    setDescription(descriptions[idx])
  }

  return (
    <>
      { isOverlayOpen && <Overlay info={overlayInfo} close={closeOverlay} />}
      <section id="home" className={styles.heroSection}>
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

        <Navigation />

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.heroCover}>
          <button className={styles.navBtns} onClick={prevSlide}>
            <ChevronLeft className={styles.chevrons} size={17} />
          </button>
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

            <p className={styles.locationText}>
              <MapPin size={22} color="#FFFFFF" /> Village 6, Mhondoro Ngezi, Zimplats
            </p>

            <div className={styles.heroCta}>
              <div className={styles.floatingBadge}>
                <CalendarRange size={22} color="#5c3b23" />
                <h1 className={styles.badgeText}>Book An Experience</h1>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Village+6,+Mhondoro+Ngezi,+Zimplats"  target="_blank"  rel="noopener noreferrer">
                <div className={styles.learnMore}>
                  <SquareArrowOutUpRight size={22} color="#5c3b23" />
                  <h1 className={styles.badgeText}>Get Directions</h1>
                </div>
              </a>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=KwaTerry+Village+6+Mhondoro+Ngezi" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.reviewsLink}>
              ⭐ 4.6/5 — Read Reviews
            </a>

          </div>
          <button className={styles.navBtns} onClick={nextSlide}>
            <ChevronRight className={styles.chevrons} size={17} />
          </button>
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
          <button className={styles.pauseBtn} onClick={() => setIsPaused((p) => !p)}>
            { isPaused ? <Play size={10} /> : <Pause size={10} /> }
          </button>
          <p className={styles.infoTag} onClick={setInfo}>
            Info
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero

// KwaTerry placeid - ChIJWya05SnxMxkREl9D1N9jk-g
// Enable PLaces API for the project to use placeid
