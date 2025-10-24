import TerryCardDeck from "./terryCardDeck"
import styles from "./about.module.css"

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.badge}>Meet Terry</span>
          <h2 className={styles.heading}>From Farm to Table</h2>
          <p className={styles.subtext}>
            Discover the story behind KwaTerry — where passion for Zimbabwean heritage,
            food, and community blend into one unforgettable experience.
          </p>
        </div>

        {/* Decked Card Component */}
        <TerryCardDeck />
      </div>
    </section>
  )
}

export default About
