"use client"

import { useState } from "react";
import traditionalFood from "../../../../public/traditional_food.jpg";
import styles from "./menu.module.css";

const Menu = () => {
  const [hoveredDish, setHoveredDish] = useState(null);

  const dishes = [
    {
      name: "Sadza & Relish",
      description: "Traditional cornmeal staple served with seasonal vegetables and aromatic stews, the heart of Zimbabwean cuisine.",
      category: "Traditional Staples",
      cultural: "Sadza is more than food—it's the foundation of every Zimbabwean meal, representing unity and tradition."
    },
    {
      name: "Nyama (Grilled Meat)",
      description: "Perfectly seasoned and grilled meat using traditional methods passed down through generations.",
      category: "Grilled Specialties", 
      cultural: "Prepared using ancient grilling techniques over open wood fires, creating authentic smoky flavors."
    },
    {
      name: "Mazanje (Wild Fruits)",
      description: "Seasonal wild fruits and traditional preserves that showcase Zimbabwe's natural bounty.",
      category: "Indigenous Treats",
      cultural: "Foraged treasures that connect us to the land and seasonal rhythms of rural life."
    },
    {
      name: "Traditional Stews",
      description: "Rich, flavorful stews cooked in clay pots using indigenous vegetables and traditional spices.",
      category: "Hearty Stews",
      cultural: "Slow-cooked in earthenware pots, these recipes have nourished families for centuries."
    },
    {
      name: "Maputi (Roasted Corn)",
      description: "Freshly roasted corn kernels, a beloved traditional snack enjoyed across Zimbabwe.",
      category: "Traditional Snacks",
      cultural: "A simple pleasure that brings back childhood memories of rural markets and family gatherings."
    },
    {
      name: "Mukwa (Baobab Fruit)",
      description: "Nutrient-rich baobab fruit preparations showcasing this iconic African superfood.",
      category: "Indigenous Superfoods",
      cultural: "From the mighty baobab trees, revered as the 'Tree of Life' in African tradition."
    }
  ];

  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerBadge}>Authentic Flavors</span>
          <h2 className={styles.headerTitle}>Traditional Zimbabwean Cuisine</h2>
          <p className={styles.headerSubtitle}>
            Every dish is a story, every bite a journey into the heart of Zimbabwean culture. 
            Prepared using traditional methods and recipes passed down through generations.
          </p>
        </div>

        {/* Featured Image */}
        <div className={styles.featuredImageWrapper}>
          <img src={traditionalFood} alt="Traditional Zimbabwean dishes beautifully arranged" className={styles.featuredImage} />
          <div className={styles.featuredOverlay}></div>
          <div className={styles.featuredContent}>
            <h3 className={styles.featuredTitle}>Traditional Feast Experience</h3>
            <p className={styles.featuredText}>Authentic presentation on traditional clay plates and wooden surfaces</p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className={styles.grid}>
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={styles.gridItem}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredDish(index)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className={styles.gridItemContent}>
                <div className={styles.categoryRow}>
                  <span className={styles.categoryBadge}>{dish.category}</span>
                  <div className={styles.pulseDot}></div>
                </div>

                <h3 className={styles.dishTitle}>{dish.name}</h3>
                <p className={styles.dishDescription}>{dish.description}</p>

                {/* Cultural Context */}
                <div className={`${styles.culturalContext} ${hoveredDish === index ? styles.show : ""}`}>
                  <span className={styles.culturalLabel}>Cultural Significance</span>
                  <p className={styles.culturalText}>{dish.cultural}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to experience authentic Zimbabwean flavors?</p>
          <div className={styles.ctaHeadingWrapper}>
            <div className={styles.ctaLine}></div>
            <span className={styles.ctaHeading}>Book Your Cultural Feast</span>
            <div className={styles.ctaLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
