import styles from "./corouselcard.module.css"
import Image from "next/image"

export default function CarouselCard({ title, description, image, active }) {
  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={600} height={400} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
