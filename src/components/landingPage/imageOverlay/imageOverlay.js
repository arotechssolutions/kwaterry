"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import { motion, AnimatePresence } from "framer-motion"

// Assets : Icons
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Styles
import styles from "./imageOverlay.module.css"

const Overlay = ({ close, image, imagesDb = [], description = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoSlideRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (imagesDb && image) {
      const foundIndex = imagesDb.indexOf(image)
      if (foundIndex !== -1) setCurrentIndex(foundIndex)
    }
  }, [image, imagesDb])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % imagesDb.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) =>
      prev === 0 ? imagesDb.length - 1 : prev - 1
    )
  }

  // Auto slide every 3 seconds
  useEffect(() => {
    startAutoSlide()
    return stopAutoSlide
  }, [currentIndex])

  const startAutoSlide = () => {
    if (autoSlideRef.current) return
    autoSlideRef.current = setInterval(() => {
      handleNext()
    }, 3000)
  }

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
      autoSlideRef.current = null
    }
  }

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const currentImage = imagesDb[currentIndex] || image

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  }

  return (
    <div
      className={styles.overlay}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.close} onClick={close}>
        <X size={18} />
      </div>

      <div className={styles.overlayContent}>
        <div className={styles.imageWrapper}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentImage}
              className={styles.motionImageWrapper}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Image
                src={currentImage}
                alt={`Image ${currentIndex + 1}`}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 600px"
                className={styles.image}
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <div className={styles.counter}>
            {currentIndex + 1} / {imagesDb.length}
          </div>
        </div>

        {/* Arrows outside the image */}
        <div className={styles.arrowOutside}>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={handlePrev}
          >
            <ChevronLeft size={17} />
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={handleNext}
          >
            <ChevronRight size={17} />
          </button>
        </div>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}

export default Overlay
