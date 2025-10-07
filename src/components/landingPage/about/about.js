import Image from "next/image"

// Assets : Images
import terryPortrait from "../../../../public/terry_portrait.jpg"

// Styles
import styles from "./about.module.css"

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image src={terryPortrait} alt="Terry - Your Cultural Host at KwaTerry" className={styles.portraitImage} />
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeTop}></div>
            <div className={styles.decorativeBottom}></div>
          </div>

          {/* Content Side */}
          <div className={styles.contentWrapper}>
            <div className={styles.headingWrapper}>
              <span className={styles.badge}>Meet Terry</span>
              <h2 className={styles.heading}>
                From Farm to Table, From Tradition to Heart
              </h2>
            </div>

            <div className={styles.textContent}>
              <p>
                Welcome to KwaTerry, where authentic Zimbabwean culture comes alive through food, stories, and unforgettable experiences. Terry's journey began in the rural heartlands of Zimbabwe, where traditional farming practices and ancestral recipes have been passed down through generations.
              </p>

              <p>
                After years of preserving and perfecting traditional Zimbabwean cuisine, Terry opened KwaTerry as more than just a dining destination—it's a cultural bridge that connects visitors with the soul of Zimbabwe through authentic flavors and immersive rural experiences.
              </p>

              <p>
                Every dish tells a story, every experience connects you to our heritage, and every visit leaves you with memories that last a lifetime. This is not just food this is culture served with love.
              </p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumberSuccess}>50+</div>
                <div className={styles.statLabel}>Traditional Recipes</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumberAccent}>1000+</div>
                <div className={styles.statLabel}>Happy Visitors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
