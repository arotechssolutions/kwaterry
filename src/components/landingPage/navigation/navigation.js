"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import styles from "./navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Visit", href: "#visit" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <div className={styles.logo}>KwaTerry</div>

          {/* Desktop Navigation */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.navLink}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className={styles.desktopCTA}>
            <Button variant="secondary" className={styles.ctaButton}>
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuList}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className={styles.mobileCTA}>
                <Button variant="secondary" className={styles.mobileCTAButton}>
                  Reserve Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
