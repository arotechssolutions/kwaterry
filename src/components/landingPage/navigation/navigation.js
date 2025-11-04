"use client"

import Image from "next/image"

// Styles
import styles from "./navigation.module.css"

// Assets : Icons
import { Facebook, Instagram, Twitter } from "lucide-react"

// Assets : Images
import logoImage from "../../../../public/kwaterry_logo.png"

const Navigation = () => {
  return (
    <nav className={styles.navbar} style={{backgroundColor:"transparent !important", position:"absolute"}}>
      <div className={styles.container}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Image src={logoImage} alt="KwaTerry Logo" className={styles.logoImage} />

          <div className={styles.socialButtons}>
            <div className={styles.socialButton}>
              <Facebook size={15} className={styles.lucideIcon} />
            </div>
            <div className={styles.socialButton}>
              <Instagram size={15} className={styles.lucideIcon} />
            </div>
            <div className={styles.socialButton}>
              <Twitter size={15} className={styles.lucideIcon} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
