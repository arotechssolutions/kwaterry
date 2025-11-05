"use client"
import styles from "./accommodation.module.css"

// Components
import LayoutFour from "../gallery/layouts/layoutFour/layoutFour"
// import LayoutThree from "../gallery/layouts/layoutThree/layoutThree"
import LayoutOne from "../gallery/layouts/layoutOne/layoutOne"

// Assets : Photos
const images = [
  '/mald7.png',
  '/mald6.jpg',
  '/mald4.jpg',
  '/mald5.jpeg'
];

const array_of_3 = [
  '/mald3.jpg',
//   '/mald2.jpg',
//   '/mald1.jpg'
];

const Accommodation = () => {
  return (
    <section className={styles.socialProofSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
            <div className={styles.headerBadge}>
                <span>Accommodation</span>
            </div>
            <h3 className={styles.galleryTitle}>
              <span className={styles.highlight}>Traditional Thatched Huts</span> at KwaTerry
            </h3>
            <div className={styles.headerText}>
                10 identical huts · Ensuite bathroom · Serene nature surroundings
            </div>
        </div>

<section className={styles.gallerySection}>
        <LayoutFour images={images} />
        <LayoutOne images={array_of_3} />
        </section>
      </div>
    </section>
)}

export default Accommodation