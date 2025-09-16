'use client';
import { motion } from 'framer-motion';
import styles from "../styles/home.module.css";


export default function About() {
return (
<section className={styles.about}>
<motion.div
className={styles.aboutContent}
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>
<h2>Our Story</h2>
<p>
From humble beginnings with mopane worms to sustainable farming and
authentic dining, Terry’s journey is a celebration of culture and
hospitality.
</p>
</motion.div>


<motion.div
className={styles.aboutImage}
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}
viewport={{ once: true }}
></motion.div>
</section>
);
}