"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import styles from "../gallery.module.css"

const LayoutD = ({ images }) => {
  if (!images || images.length < 3) return null

  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const yTop = useTransform(scrollXProgress, [0, 1], [0, -20])
  const yMiddle = useTransform(scrollXProgress, [0, 1], [0, 10])
  const yBottom = useTransform(scrollXProgress, [0, 1], [0, -10])

  return (
    <div ref={ref} className={`${styles.section} ${styles.layoutD}`}>
      <motion.div style={{ y: yTop }} className={styles.stackTop}>
        <Image src={images[0]} alt="" fill className={styles.image} />
      </motion.div>
      <motion.div style={{ y: yMiddle }} className={styles.stackMiddle}>
        <Image src={images[1]} alt="" fill className={styles.image} />
      </motion.div>
      <motion.div style={{ y: yBottom }} className={styles.stackBottom}>
        <Image src={images[2]} alt="" fill className={styles.image} />
      </motion.div>
    </div>
  )
}

export default LayoutD
