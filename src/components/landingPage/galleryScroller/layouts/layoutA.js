"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "../gallery.module.css"

const LayoutA = ({ images }) => {
  if (!images || images.length < 4) return null

  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const y = useTransform(scrollXProgress, [0, 1], [0, -30]) // small parallax

  return (
    <div ref={ref} className={`${styles.section} ${styles.layoutA}`}>
      <motion.div style={{ y }} className={styles.leftGroup}>
        <div className={styles.bigLeft}>
          <Image src={images[0]} alt="" fill className={styles.image} />
        </div>
        <div className={styles.bottomTwo}>
          <div><Image src={images[1]} alt="" fill className={styles.image} /></div>
          <div><Image src={images[2]} alt="" fill className={styles.image} /></div>
        </div>
      </motion.div>

      <motion.div style={{ y: useTransform(scrollXProgress, [0, 1], [0, 20]) }} className={styles.rightBig}>
        <Image src={images[3]} alt="" fill className={styles.image} />
      </motion.div>
    </div>
  )
}

export default LayoutA
