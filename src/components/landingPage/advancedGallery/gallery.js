"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./gallery.module.css"

// Assets
// Example Images (replace with your actual images)
import mainImg from "../../../../public/hero_kwaterry.jpg"
import side1 from "../../../../public/traditional_food.jpg"
import side2 from "../../../../public/terry_portrait.jpg"
import side3 from "../../../../public/drumming_night.jpg"

const StoryBlock = () => {
  return (
    <section className={styles.storyBlock}>
      <div className={styles.grid}>
        {/* Large Hero Image */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={mainImg} alt="KwaTerry main experience" className={styles.image} />
        </motion.div>

        {/* Small Supporting Images */}
        <motion.div
          className={styles.supportImage}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image src={side1} alt="Traditional meal" className={styles.image} />
        </motion.div>

        <motion.div
          className={styles.supportImage}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image src={side2} alt="Farm produce" className={styles.image} />
        </motion.div>

        <motion.div
          className={styles.supportImage}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Image src={side3} alt="Guests enjoying meal" className={styles.image} />
        </motion.div>
      </div>

      {/* Optional Text Section */}
      <motion.div
        className={styles.textContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2>From Farm to Feast</h2>
        <p>
          Each image tells a story of community, flavor, and the warmth of Zimbabwean culture.
          KwaTerry celebrates the heritage that turns food into connection.
        </p>
      </motion.div>
    </section>
  )
}

export default StoryBlock
