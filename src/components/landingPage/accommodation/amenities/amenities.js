"use client"

// Styles
import styles from "./amenities.module.css"

// Assets : Icons
import { FaWifi, FaCar, FaSwimmer, FaTv, FaTshirt, FaLock } from "react-icons/fa";
import { MdKitchen, MdBalcony, MdWork } from "react-icons/md";

export default function AmenitiesSection() {
  const amenities = [
    { icon: <MdKitchen color="#5c3b23" />, label: "Kitchen" },
    { icon: <FaWifi color="#5c3b23" />, label: "Wifi" },
    // { icon: <MdWork color="#5c3b23" />, label: "Dedicated workspace" },
    { icon: <FaCar color="#5c3b23" />, label: "Free parking" },
    // { icon: <FaSwimmer />, label: "Shared pool" },
    // { icon: <FaTv />, label: "TV with Netflix" },
    // { icon: <FaTshirt />, label: "Washer" },
    // { icon: <FaTshirt />, label: "Dryer" },
    // { icon: <MdBalcony />, label: "Shared patio or balcony" },
    { icon: <FaLock color="#5c3b23" style={{ textDecoration: "line-through", opacity: 0.6 }} />, label: "Lock on bedroom door" },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.galleryTitle}>Offering</h2>
      <div className={styles.grid}>
        {amenities.map((item, idx) => (
          <div key={idx} className={styles.amenity}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {/* <button className={styles.showBtn}>Show all 38 amenities</button> */}
    </section>
  );
}
