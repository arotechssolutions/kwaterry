"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "../gallery.module.css"

const LayoutB = ({ images }) => {
  if (!images || images.length < 4) return null

  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  // Parallax motion speeds
  const yLeft = useTransform(scrollXProgress, [0, 1], [0, 20])
  const yRight = useTransform(scrollXProgress, [0, 1], [0, -30])

  return (
    <div ref={ref} className={`${styles.section} ${styles.layoutB}`}>
      {/* Large image on LEFT */}
      <motion.div style={{ y: yLeft }} className={styles.leftBig}>
        <Image src={images[3]} alt="" fill className={styles.image} />
      </motion.div>

      {/* Smaller images stacked RIGHT */}
      <motion.div style={{ y: yRight }} className={styles.rightGroup}>
        <div className={styles.topTwo}>
          <div><Image src={images[0]} alt="" fill className={styles.image} /></div>
          <div><Image src={images[1]} alt="" fill className={styles.image} /></div>
        </div>
        <div className={styles.bottomBig}>
          <Image src={images[2]} alt="" fill className={styles.image} />
        </div>
      </motion.div>
    </div>
  )
}

export default LayoutB
