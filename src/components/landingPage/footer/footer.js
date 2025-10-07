// Assets : Icons
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

// Shadcn UI
import { Button } from "@/components/ui/button"

// Styles
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <section id="contact" className={styles.footer}>
      {/* African Pattern Background */}
      <div className={styles.africanPattern}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <h3 className={styles.brandTitle}>KwaTerry</h3>
              <p className={styles.brandDescription}>
                Authentic Zimbabwean cultural experiences through traditional food, 
                rural tourism, and heartfelt hospitality in the heart of Zimbabwe.
              </p>
              <div className={styles.socialButtons}>
                <Button variant="ghost" size="icon" className={styles.socialButton}>
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className={styles.socialButton}>
                  <Instagram size={20} />
                </Button>
                <Button variant="ghost" size="icon" className={styles.socialButton}>
                  <Twitter size={20} />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linkSection}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {
                  ['Home', 'About Terry', 'Traditional Menu', 'Gallery', 'Activities', 'Reservations'].map((link) => (
                    <li key={link}>
                      <a  href={`#${link.toLowerCase().replace(' ', '-')}`} className={styles.linkItem}>
                        { link }
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Experiences */}
            <div className={styles.linkSection}>
              <h4 className={styles.linkTitle}>Experiences</h4>
              <ul className={styles.linkList}>
                {
                  ['Traditional Cuisine', 'Drumming Nights',  'Quad Biking', 'Campfire Stories', 'Cultural Tours', 'Rural Accommodation'].map((experience) => (
                    <li key={experience}>
                      <span className={styles.experienceItem}>
                        <div className={styles.experienceDot}></div>
                        { experience }
                      </span>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Contact Information */}
            <div className={styles.contactSection}>
              <h4 className={styles.linkTitle}>Get in Touch</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactRow}>
                  <MapPin size={20} className={styles.contactIcon} />
                  <div>
                    <p className={styles.contactText}>
                      Rural Zimbabwe<br />
                      Traditional Cultural Village<br />
                      Authentic Experience Center
                    </p>
                  </div>
                </div>

                <div className={styles.contactRow}>
                  <Phone size={20} className={styles.contactIcon} />
                  <a href="tel:+263123456789" className={styles.contactLink}>
                    +263 123 456 789
                  </a>
                </div>

                <div className={styles.contactRow}>
                  <Mail size={20} className={styles.contactIcon} />
                  <a href="mailto:hello@kwaterry.zw" className={styles.contactLink}>
                    hello@kwaterry.zw
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className={styles.newsletter}>
                <h5 className={styles.newsletterTitle}>Stay Connected</h5>
                <p className={styles.newsletterText}>
                  Get updates on cultural events and special experiences.
                </p>
                <Button variant="secondary" className={styles.newsletterButton}>
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.container}>
            <div className={styles.bottomContent}>
              <p className={styles.bottomText}>
                © 2024 KwaTerry. All rights reserved. Authentic Zimbabwean Cultural Experiences.
              </p>
              <div className={styles.bottomLinks}>
                <a href="#" className={styles.bottomLink}>Privacy Policy</a>
                <a href="#" className={styles.bottomLink}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
