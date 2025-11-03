"use client"

import { useState } from "react"
import styles from "./corousel.module.css"
import CarouselCard from "./corouselcard/corouselcard"

const data = [
  {
    title: "Launch a store",
    description: "Just ask to build a store. Shopify integration included.",
    image: "/newphotos/buffet.webp",
  },
  {
    title: "Custom rules",
    description: "Add custom rules for preferences, integrations and more. Set for yourself or others to remix.",
    image: "/newphotos/carpark.webp",
  },
  {
    title: "Measure performance",
    description: "Track what works. Enable analytics to see visitors, views, and trends.",
    image: "/newphotos/crowdatentrance.webp",
  },
]

export default function Carousel() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % data.length)
  const prev = () => setActive((prev) => (prev - 1 + data.length) % data.length)

  return (
    <div className={styles.carousel}>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <CarouselCard
            key={index}
            {...item}
            active={index === active}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={prev}>‹</button>
        <div className={styles.dots}>
          {data.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button onClick={next}>›</button>
      </div>
    </div>
  )
}
