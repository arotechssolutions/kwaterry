'use client';
import { motion } from 'framer-motion';
import styles from "../styles/home.module.css";


export default function Gallery() {
return (
<section className={styles.gallery}>
<h2>Gallery</h2>
<div className={styles.galleryGrid}>
{[1,2,3,4,5,6].map((item, i) => (
<motion.div
key={i}
className={styles.galleryItem}
initial={{ scale: 0.9, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5, delay: i * 0.1 }}
viewport={{ once: true }}
/>
))}
</div>
</section>
);
}