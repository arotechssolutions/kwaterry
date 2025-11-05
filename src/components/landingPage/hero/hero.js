"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  CalendarRange,
  Phone,
  MessageCircleMore,
  Pause,
  Play,
  SquareArrowOutUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import styles from "./hero.module.css"

import Navigation from "@/components/landingPage/navigation/navigation"
import Overlay from "@/components/landingPage/overlay/overlay"

const mediaDb = [
  { type: "video", src: "/zimbhovid.mp4", duration: 60000 }, // 1 min
  { type: "image", src: "/arealphoto.jpg", duration: 3000 }, // 3 sec
  { type: "image", src: "/newphotos/vwgtcars.webp", duration: 30000 },
  { type: "image", src: "/newphotos/buffet.webp", duration: 30000 },
  { type: "video", src: "/trimmedvid.mp4", duration: 60000 },
  { type: "image", src: "/newphotos/whitescooking.webp", duration: 30000 },
]

const descriptions = [
  "Bikes zoom through the scenic hills — adventure starts here.",
  "VW cars parade at sunset, a spectacle of speed and beauty.",
  "Tafura greets you with laughter and a plate of tradition.",
  "Mugwazvangu serves up home-cooked meals with heart.",
  "Muzungu shares stories under the starlit skies of KwaTerry.",
  "White’s kitchen — where every flavor tells a rural story.",
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [overlayInfo, setOverlayInfo] = useState("")
  const [description, setDescription] = useState(descriptions[0])
  const [elapsedTime, setElapsedTime] = useState(0)

  const videoRef = useRef(null)
  const startTimeRef = useRef(null)
  const timerRef = useRef(null)

  const currentMedia = mediaDb[current]
  const duration = currentMedia.duration

  // 🟣 Overlay Handlers
  const openOverlay = () => {
    setOverlayInfo(descriptions[current])
    setIsOverlayOpen(true)
    setIsPaused(true)
  }

  const closeOverlay = () => {
    setIsOverlayOpen(false)
    setIsPaused(false)
  }

  // 🔄 Auto Slide + Resume Progress
  useEffect(() => {
    if (isPaused) return

    startTimeRef.current = Date.now() - elapsedTime

    timerRef.current = setInterval(() => {
      const now = Date.now()
      const diff = now - startTimeRef.current

      if (diff >= duration) {
        setElapsedTime(0)
        setCurrent((prev) => (prev + 1) % mediaDb.length)
        setDescription(descriptions[(current + 1) % mediaDb.length])
      } else {
        setElapsedTime(diff)
      }
    }, 100)

    return () => clearInterval(timerRef.current)
  }, [isPaused, current, duration])

  // 🎞 Control Video Playback
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPaused) video.pause()
    else video.play().catch(() => {})
  }, [isPaused, current])

  // 🧭 Navigation
  const nextSlide = () => {
    setElapsedTime(0)
    setCurrent((prev) => (prev + 1) % mediaDb.length)
    setDescription(descriptions[(current + 1) % mediaDb.length])
    setIsOverlayOpen(false)
  }

  const prevSlide = () => {
    setElapsedTime(0)
    setCurrent((prev) => (prev - 1 + mediaDb.length) % mediaDb.length)
    setDescription(descriptions[(current - 1 + mediaDb.length) % mediaDb.length])
    setIsOverlayOpen(false)
  }

  const jumpToSlide = (idx) => {
    setElapsedTime(0)
    setCurrent(idx)
    setDescription(descriptions[idx])
    setIsOverlayOpen(false)
  }

  return (
    <>
      {/* 🟢 Overlay (linked with description + pause state) */}
      {isOverlayOpen && <Overlay info={overlayInfo} close={closeOverlay} />}

      <section id="home" className={styles.heroSection}>
        {/* Background Media Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMedia.src}
            className={styles.mediaWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            {currentMedia.type === "image" && (
              <Image
                src={currentMedia.src}
                alt="KwaTerry Media"
                fill
                className={styles.parallax}
                unoptimized
                priority
                quality={100}
              />
            )}

            {currentMedia.type === "video" && (
              <video
                ref={videoRef}
                className={styles.parallax}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={currentMedia.src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        </AnimatePresence>

        <Navigation />
        <div className={styles.overlay}></div>

        {/* 🟡 Hero Content */}
        <div className={styles.heroCover}>
          <button className={styles.navBtns} onClick={prevSlide}>
            <ChevronLeft className={styles.chevrons} size={17} />
          </button>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Kwa<span className={styles.highlight}>Terry</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover an authentic rural Zimbabwean experience through traditional food, cultural immersion,
              and unforgettable rural adventures at KwaTerry.
            </p>

            <p className={styles.bookingNotice}>
              Booking Notice: Walk-ins are welcome! For groups, please book in advance.
            </p>

            <div className={styles.locationText}>
              <div className={styles.socialButton}>
                <Phone size={15} className={styles.lucideIcon} />
              </div>
              -
              <div className={styles.socialButton}>
                <MessageCircleMore size={15} className={styles.lucideIcon} />
              </div>
              +263 772 123 456
            </div>

            <div className={styles.heroCta}>
              <div className={styles.floatingBadge}>
                <CalendarRange size={22} color="#5c3b23" />
                <h1 className={styles.badgeText}>Book An Experience</h1>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Village+6,+Mhondoro+Ngezi,+Zimplats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.learnMore}>
                  <SquareArrowOutUpRight size={22} color="#5c3b23" />
                  <h1 className={styles.badgeText}>Get Directions</h1>
                </div>
              </a>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=KwaTerry+Village+6+Mhondoro+Ngezi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewsLink}
            >
              ⭐ 4.6/5 — Read Reviews
            </a>
          </div>

          <button className={styles.navBtns} onClick={nextSlide}>
            <ChevronRight className={styles.chevrons} size={17} />
          </button>
        </div>

        {/* 🔵 Progress Bars */}
        <div className={styles.progressWrapper}>
          {mediaDb.map((media, idx) => (
            <div
              key={idx}
              className={styles.progressTrack}
              onClick={() => jumpToSlide(idx)}
            >
              <div
                className={`${styles.progressBar} ${idx === current ? styles.activeProgress : ""}`}
                style={{
                  animationDuration: idx === current ? `${media.duration}ms` : "0ms",
                  animationPlayState: isPaused ? "paused" : "running",
                  transform: idx === current
                    ? `scaleX(${elapsedTime / media.duration})`
                    : "scaleX(0)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ⚙️ Controls */}
        <div className={styles.controlPanel}>
          <button
            className={styles.pauseBtn}
            onClick={() => setIsPaused((p) => !p)}
          >
            {isPaused ? <Play size={10} /> : <Pause size={10} />}
          </button>
          <p className={styles.infoTag} onClick={openOverlay}>
            Info
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
