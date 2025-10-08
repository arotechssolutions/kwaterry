import Image from "next/image"

// Styles
import styles from "./hero.module.css"

// Shadcn UI
import { Button } from "@/components/ui/button"

// Assets : Images
import heroImage from "../../../../public/hero_kwaterry.jpg"

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Image with Parallax */}
      <Image  src={heroImage} className={styles.parallax} alt="hero-image" />
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Hero Pattern */}
      <div className={styles.heroPattern}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Authentic Rural Zimbabwean Experience
        </h1>
        
        <p className={styles.heroSubtitle}>
          Discover the heart of Zimbabwe through traditional food, cultural immersion, and unforgettable rural experiences at KwaTerry.
        </p>

        {/* <div className={styles.buttonGroup}>
          <Button variant="secondary" size="lg" className={styles.reserveButton}>
            Reserve Your Experience
          </Button>
          
          <Button  variant="outline"  size="lg" className={styles.learnButton}>
            Learn More
          </Button>
        </div> */}

        {/* Floating Badge */}
        <div className={styles.floatingBadgeWrapper}>
          <div className={styles.floatingBadge}>
            <div className={styles.badgeDot}></div>
            <span className={styles.badgeText}>Authentic Cultural Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollOuter}>
          <div className={styles.scrollInner}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
