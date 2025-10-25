"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "../gallery.module.css"

const LayoutC = ({ images }) => {
  if (!images || images.length < 2) return null

  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const yLeft = useTransform(scrollXProgress, [0, 1], [0, 15])
  const yRight = useTransform(scrollXProgress, [0, 1], [0, -15])

  return (
    <div ref={ref} className={`${styles.section} ${styles.layoutC}`}>
      <motion.div style={{ y: yLeft }} className={styles.splitLeft}>
        <Image src={images[0]} alt="" fill className={styles.image} />
      </motion.div>
      <motion.div style={{ y: yRight }} className={styles.splitRight}>
        <Image src={images[1]} alt="" fill className={styles.image} />
      </motion.div>
    </div>
  )
}

export default LayoutC
