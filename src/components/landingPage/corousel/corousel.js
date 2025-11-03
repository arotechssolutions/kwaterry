"use client";
import { useState, useEffect } from "react";
import { Pause, ChevronUp, ChevronDown } from "lucide-react";
import styles from "./corousel.module.css";

const cards = [
  {
    id: 1,
    image: "/newphotos/buffet.webp",
    title: "Custom rules",
    description:
      "Add custom rules for preferences, integrations and more. Set for yourself or others to remix.",
  },
  {
    id: 2,
    image: "/newphotos/carpark.webp",
    title: "Team collaboration",
    description:
      "Work seamlessly with your team and manage projects effectively in one place.",
  },
  {
    id: 3,
    image: "/newphotos/crowdatentrance.webp",
    title: "Performance insights",
    description:
      "Analyze metrics, monitor speed, and improve efficiency using powerful dashboards.",
  },
];

export default function StackedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextCard(), 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const nextCard = () => setActiveIndex((p) => (p + 1) % cards.length);
  const prevCard = () =>
    setActiveIndex((p) => (p - 1 + cards.length) % cards.length);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.dots}>
        {cards.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      <div className={styles.cardStack}>
        {
          cards.map((card, index) => {
            const position = (index - activeIndex + cards.length) % cards.length;
            return (
              <div key={card.id} className={`${styles.card} ${position === 0? styles.active: position === 1? styles.next: position === 2? styles.behind: styles.previous}`}>
                <img src={card.image} alt={card.title} className={styles.image} />
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className={styles.controls}>
        <button onClick={prevCard} className={styles.iconButton}>
          <ChevronUp color="#808080" size={12} />
        </button>
        <button onClick={() => setIsPaused(!isPaused)} className={styles.iconButton}>
          <Pause color="#808080" size={12} />
        </button>
        <button onClick={nextCard} className={styles.iconButton}>
          <ChevronDown color="#808080" size={12} />
        </button>
      </div>
    </div>
  );
}
