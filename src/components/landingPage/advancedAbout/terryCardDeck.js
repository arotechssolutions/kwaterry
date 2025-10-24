"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import styles from "./terryCardDeck.module.css"

// Images
import terryYoung from "../../../../public/terry_young.jpg"
import terryFarm from "../../../../public/terry_farm.jpg"
import terryRestaurant from "../../../../public/terry_restaurant.jpg"
import terryCommunity from "../../../../public/terry_community.jpg"

const cards = [
  {
    id: 1,
    image: terryYoung,
    title: "Roots & Early Life",
    text: "Terry grew up in the rural heartlands of Mhondoro Ngezi, Zimbabwe — where farming, storytelling, and togetherness shaped his early values.",
  },
  {
    id: 2,
    image: terryFarm,
    title: "The Dream Begins",
    text: "Inspired by his grandmother’s traditional cooking, Terry envisioned a place where local produce and ancestral recipes meet modern dining.",
  },
  {
    id: 3,
    image: terryRestaurant,
    title: "Founding KwaTerry",
    text: "KwaTerry was born from this dream — a farm-to-table destination that celebrates Zimbabwe’s cultural spirit through authentic food and warm hospitality.",
  },
  {
    id: 4,
    image: terryCommunity,
    title: "Beyond the Table",
    text: "Today, Terry’s mission extends beyond the plate — promoting rural tourism, empowering local farmers, and sharing the soul of Zimbabwe with every visitor.",
  },
]

const TerryCardDeck = () => {
  const [current, setCurrent] = useState(0)

  const nextCard = () => setCurrent((prev) => (prev + 1) % cards.length)
  const prevCard = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length)

  return (
    <div className={styles.deckContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={cards[current].id}
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={styles.imageSide}>
            <Image
              src={cards[current].image}
              alt={cards[current].title}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.textSide}>
            <h3 className={styles.cardTitle}>{cards[current].title}</h3>
            <p className={styles.cardText}>{cards[current].text}</p>

            <div className={styles.controls}>
              <button onClick={prevCard} className={styles.navButton}>
                ← Prev
              </button>
              <button onClick={nextCard} className={styles.navButton}>
                Next →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.dots}>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default TerryCardDeck
