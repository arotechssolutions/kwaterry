'use client';
import { motion } from 'framer-motion';
import styles from "../styles/home.module.css";


export default function Visit() {
return (
<section className={styles.visit}>
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>
Visit KwaTerry
</motion.h2>


<motion.p
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.8, delay: 0.2 }}
viewport={{ once: true }}
>
Come and enjoy quad biking, drumming nights, and authentic cuisine.
</motion.p>


<motion.div
className={styles.map}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}
viewport={{ once: true }}
></motion.div>
</section>
);
}