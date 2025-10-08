"use client"

import { useState } from "react"
import Image from "next/image"

// Styles
import styles from "./navigation.module.css"

// Shadcn UI
import { Button } from "@/components/ui/button"

// Assets : Icons
import { Menu, X,  Facebook, Instagram, Twitter } from "lucide-react"

// Assets : Images
import logoImage from "../../../../public/kwaterry_logo.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Visit", href: "#visit" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={styles.navbar} style={{backgroundColor:"transparent !important", position:"absolute"}}>
      <div className={styles.container}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Image src={logoImage} alt="KwaTerry Logo" className={styles.logoImage} />

          {/* Desktop Navigation */}
          {/* <div className={styles.desktopMenu}>
            {
              navItems.map((item) => (
                <a key={item.name} href={item.href} className={styles.navLink}>
                  {item.name}
                </a>
              ))
            }
          </div> */}

          {/* CTA Button */}
          {/* <div className={styles.desktopCTA}>
            <Button variant="secondary" className={styles.ctaButton}>
              Reserve Now
            </Button>
          </div> */}

          <div className={styles.socialButtons}>
            <div className={styles.socialButton}>
              <Facebook size={15} color="#ffffff" />
            </div>
            <div className={styles.socialButton}>
              <Instagram size={15} color="#ffffff" />
            </div>
            <div className={styles.socialButton}>
              <Twitter size={15} color="#ffffff" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/* <button className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {/* {
          isOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuList}>
                {
                  navItems.map((item) => (
                    <a key={item.name} href={item.href} className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </a>
                  ))
                }
                <div className={styles.mobileCTA}>
                  <Button variant="secondary" className={styles.mobileCTAButton}>
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          )
        } */}
      </div>
    </nav>
  )
}

export default Navigation
