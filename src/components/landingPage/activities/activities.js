import Image from "next/image"

// Shadcn UI
import { Button } from "@/components/ui/button"

// Styles
import styles from "./activities.module.css"

// Assets : Images
import drummingNight from "../../../../public/drumming_night.jpg"

// Assets : Icons
import { Music, Mountain, Flame, MapPin } from "lucide-react"

const Activities = () => {
  const activities = [
    {
      icon: Music,
      title: "Traditional Drumming Nights",
      description: "Experience authentic Zimbabwean music and dance around the campfire under starlit skies.",
      image: drummingNight,
      duration: "3 hours",
      time: "Evening (7-10 PM)"
    },
    {
      icon: Mountain, 
      title: "Quad Biking Adventures",
      description: "Explore the rural landscape on guided quad bike tours through scenic trails and villages.",
      image: null,
      duration: "2 hours",
      time: "Morning or Afternoon"
    },
    {
      icon: Flame,
      title: "Campfire Stories & Cuisine",
      description: "Gather around traditional fires for storytelling while enjoying authentic rural cooking.",
      image: null,
      duration: "4 hours",
      time: "Evening (6-10 PM)"
    }
  ]

  return (
    <section id="visit" className={styles.activitiesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Cultural Activities</span>
          <h2 className={styles.heading}>Immerse in Rural Zimbabwean Life</h2>
          <p className={styles.subheading}>
            Beyond exceptional food, KwaTerry offers authentic cultural experiences that connect you 
            with traditional Zimbabwean rural life and community spirit.
          </p>
        </div>

        {/* Activities Grid */}
        <div className={styles.activitiesGrid}>
          {
            activities.map((activity, index) => (
              <div key={index} className={styles.activityCard} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Image/Icon Header */}
                <div className={styles.activityImageWrapper}>
                  {
                    activity.image ? (
                      <Image  src={activity.image} alt={activity.title} className={styles.activityImage} />
                    ) : (
                      <div className={styles.activityIconWrapper}>
                        <activity.icon size={64} className={styles.activityIcon} />
                      </div>
                    )
                  }
                  <div className={styles.imageOverlay}></div>

                  {/* Duration Badge */}
                  <div className={styles.durationBadge}>{activity.duration}</div>
                </div>

                {/* Content */}
                <div className={styles.activityContent}>
                  <div className={styles.activityTitleWrapper}>
                    <activity.icon size={24} className={styles.activityIconSmall} />
                    <h3 className={styles.activityTitle}>{activity.title}</h3>
                  </div>

                  <p className={styles.activityDescription}>{activity.description}</p>

                  <div className={styles.activityFooter}>
                    <span className={styles.activityTime}>{activity.time}</span>
                    <Button variant="ghost" size="sm" className={styles.learnMoreButton}>
                      Learn More →
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Location & Contact */}
        <div className={styles.locationSection}>
          <div className={styles.locationGrid}>
            <div className={styles.locationInfo}>
              <div className={styles.locationHeader}>
                <MapPin className={styles.mapIcon} size={32} />
                <h3 className={styles.locationHeading}>Visit KwaTerry</h3>
              </div>

              <p className={styles.locationDescription}>
                Located in the heart of rural Zimbabwe, KwaTerry offers an authentic escape 
                from city life into traditional Zimbabwean culture and hospitality.
              </p>

              <div className={styles.locationFeatures}>
                <div className={styles.featureItem}><div className={styles.featureDot}></div><span>Traditional thatched accommodations available</span></div>
                <div className={styles.featureItem}><div className={styles.featureDot}></div><span>Guided cultural tours included</span></div>
                <div className={styles.featureItem}><div className={styles.featureDot}></div><span>All meals featuring traditional cuisine</span></div>
              </div>
            </div>

            <div className={styles.visitPlan}>
              <div className={styles.planCard}>
                <h4 className={styles.planHeading}>Plan Your Visit</h4>
                <div className={styles.planDetails}>
                  <div className={styles.planRow}><span className={styles.planLabel}>Day Experience</span><span className={styles.planPrice}>$45 per person</span></div>
                  <div className={styles.planRow}><span className={styles.planLabel}>Overnight Stay</span><span className={styles.planPrice}>$120 per person</span></div>
                  <div className={styles.planRow}><span className={styles.planLabel}>Weekend Package</span><span className={styles.planPrice}>$200 per person</span></div>
                </div>
                <div className={styles.planCTA}>
                  <Button className={styles.reserveButton}>Reserve Your Experience</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
