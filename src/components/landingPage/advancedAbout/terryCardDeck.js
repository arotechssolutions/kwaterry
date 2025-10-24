"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./terryCardDeck.module.css";

// Images
import terryYoung from "../../../../public/terry_young.jpg"
import terryFarm from "../../../../public/terry_farm.jpg"
import terryRestaurant from "../../../../public/terry_restaurant.jpg"
import terryCommunity from "../../../../public/terry_community.jpg"

const cards = [
  {
    id: 1,
    image: terryYoung,
    title: "Roots And Early Life",
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

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

export default function TerryCardDeck() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % cards.length);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const nextCard = () => setCurrent((prev) => (prev + 1) % cards.length);
  const prevCard = () =>
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div
      className={styles.deckContainer}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.cardStack}>
        {cards.map((card, index) => {
          const offset =
            (index - current + cards.length) % cards.length; // position offset
          const zIndex = cards.length - offset;

          const isActive = index === current;

          return (
            <motion.div
              key={card.id}
              className={`${styles.card} ${
                isActive ? styles.activeCard : styles.inactiveCard
              }`}
              style={{ zIndex }}
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9 - offset * 0.05,
                y: isActive ? 0 : offset * 25,
                rotate: isActive ? 0 : offset * 2,
                opacity: isActive ? 1 : 0.4 - offset * 0.05,
                filter: isActive
                  ? "none"
                  : "blur(3px) brightness(0.85)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button onClick={prevCard} className={styles.btn}>
          Prev
        </button>
        <button onClick={nextCard} className={styles.btn}>
          Next
        </button>
        <button
          onClick={() => setPaused((p) => !p)}
          className={`${styles.btn} ${styles.pauseBtn}`}
        >
          {paused ? "▶ Resume" : "⏸ Pause"}
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {cards.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
