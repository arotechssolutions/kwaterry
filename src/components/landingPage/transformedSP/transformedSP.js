"use client"

// Assets : Icons
import { ChevronRight } from "lucide-react"

// Components
import MyGallery from "@/components/landingPage/gallery/gallery"

// Styles
import styles from "./transformedSP.module.css"

const SocialProof = () => {
  return (
    <section className={styles.socialProofSection}>
      {/* Background Pattern */}
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <span>Guests Gallery</span>
          </div>
           <h3 className={styles.galleryTitle}>
              Memories with Our <span className={styles.highlight}>Distinguished Guests</span>
            </h3>
          <p className={styles.headerText}>
            From celebrities to sports teams, KwaTerry has welcomed distinguished guests seeking authentic Zimbabwean cultural experiences
          </p>
        </div>

        <MyGallery />

        {/* Bottom CTA */}
        {/* <div className={styles.bottomCTA}>
          <div className={styles.bottomCTABadge}>
            <Star color="#FFD700" size={15} />
            <span>Join Our Distinguished Guest List</span>
            <Star color="#FFD700" size={15} />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default SocialProof
