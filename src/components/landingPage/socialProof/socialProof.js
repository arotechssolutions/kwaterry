import Image from "next/image"

// Assets : Icons
import { Star, Users, Trophy, GraduationCap, Music, Camera } from "lucide-react"

// Assets : Images
import celebritiesVisit from "../../../../public/celebrities_visit.jpg"
import musiciansVisit from "../../../../public/musicians_visit.jpg"
import sportsTeamVisit from "../../../../public/sports_team_visit.jpg"
import studentsVisit from "../../../../public/students_visit.jpg"

// Styles
import styles from "./socialProof.module.css"

const SocialProof = () => {
  const guestTypes = [
    { icon: Star, title: "Celebrities", description: "Local and international celebrities choose KwaTerry for authentic cultural experiences", count: "15+" },
    { icon: Music, title: "Musicians", description: "Renowned artists find inspiration in our traditional music and cultural atmosphere", count: "25+" },
    { icon: Trophy, title: "Sports Teams", description: "Professional football teams and athletes visit for team building and cultural immersion", count: "8+" },
    { icon: GraduationCap, title: "Educational Groups", description: "Schools and universities bring students to learn about Zimbabwean heritage and traditions", count: "30+" }
  ]

  const guestGallery = [
    { image: celebritiesVisit, title: "Celebrity Guests", description: "VIP guests enjoying the authentic KwaTerry experience" },
    { image: musiciansVisit, title: "Musical Collaborations", description: "Artists connecting with traditional Zimbabwean music" },
    { image: sportsTeamVisit, title: "Team Building", description: "Professional sports teams building unity through culture" },
    { image: studentsVisit, title: "Educational Visits", description: "Students learning about Zimbabwean heritage and traditions" }
  ]

  return (
    <section className={styles.socialProofSection}>
      {/* Background Pattern */}
      <div className={styles.bgPattern}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <span>Trusted By</span>
          </div>
          <h2 className={styles.headerTitle}>
            Notable <span className={styles.highlight}>Guests</span>
          </h2>
          <p className={styles.headerText}>
            From celebrities to sports teams, KwaTerry has welcomed distinguished guests seeking authentic Zimbabwean cultural experiences
          </p>
        </div>

        {/* Guest Types Grid */}
        <div className={styles.guestGrid}>
          {
            guestTypes.map((guest, index) => {
              const IconComponent = guest.icon
              return (
                <div key={index} className={styles.guestCard} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={styles.guestCardContent}>
                    <div className={styles.guestIconWrapper}>
                      <IconComponent className={styles.guestIcon} />
                    </div>
                    <div className={styles.guestCount}>{guest.count}</div>
                    <h3 className={styles.guestTitle}>{guest.title}</h3>
                    <p className={styles.guestDescription}>{guest.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        {/* Distinguished Guests Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <div className={styles.galleryBadge}>
              <span>Guest Gallery</span>
            </div>
            <h3 className={styles.galleryTitle}>
              Memories with Our <span className={styles.highlight}>Distinguished Guests</span>
            </h3>
          </div>

          <div className={styles.galleryGrid}>
            {
              guestGallery.map((guest, index) => (
                <div key={index} className={styles.galleryCard} style={{ animationDelay: `${index * 0.2}s` }}>
                  <Image src={guest.image} alt={guest.title} className={styles.galleryImage} />
                  <div className={styles.galleryOverlay}></div>
                  <div className={styles.galleryContent}>
                    <h4 className={styles.galleryCardTitle}>{guest.title}</h4>
                    <p className={styles.galleryCardDescription}>{guest.description}</p>
                  </div>
                  <div className={styles.galleryHoverIcon}>
                    <Camera className={styles.icon} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.bottomCTABadge}>
            <Star color="#FFD700" size={15} />
            <span>Join Our Distinguished Guest List</span>
            <Star color="#FFD700" size={15} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
