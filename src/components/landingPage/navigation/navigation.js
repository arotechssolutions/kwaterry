"use client"

import Image from "next/image"

// Styles
import styles from "./navigation.module.css"

// Assets : Icons
import { CalendarRange, Facebook, MapPin, Instagram, Twitter } from "lucide-react"

// Assets : Images
import logoImage from "../../../../public/kwaterry_logo.png"



const Navigation = () => {
  return (
    <nav className={styles.navbar} style={{backgroundColor:"transparent !important", position:"absolute"}}>
      <div className={styles.container}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <div className={styles.address}>
            <Image src={logoImage} alt="KwaTerry Logo" className={styles.logoImage} />
            <p className={styles.locationText}>
              <MapPin size={22} color="#5c3b23" style={{position:"relative", top:"-1px"}} /> Village 6, Mhondoro Ngezi, Zimplats
            </p>
          </div>

          <div className={styles.socialButtons}>
            <p className={styles.followUsText}>Follow Us - </p>
            <div className={styles.socialButton}>
              <Facebook size={15} className={styles.lucideIcon} />
            </div>
            <div className={styles.socialButton}>
              <Instagram size={15} className={styles.lucideIcon} />
            </div>
            <div className={styles.socialButton}>
              <Twitter size={15} className={styles.lucideIcon} />
            </div>

            <button className={styles.bookNowButton}>
              <CalendarRange size={22} color="#5c3b23" className={styles.lucideIcon} />
              <p className={styles.badgeText}>Book Now</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
