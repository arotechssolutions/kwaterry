'use client';
import { motion } from 'framer-motion';
import styles from "../styles/home.module.css";


const dishes = [
{ name: "Sadza & Nyama", desc: "Traditional maize meal with beef stew." },
{ name: "Mopane Worms", desc: "A cultural delicacy rich in protein." },
{ name: "Roasted Maize", desc: "Classic street-style roasted maize." },
];


export default function Menu() {
return (
<section className={styles.menu}>
<h2>Our Dishes</h2>
<div className={styles.menuGrid}>
{dishes.map((dish, i) => (
<motion.div
key={i}
className={styles.dishCard}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: i * 0.2 }}
viewport={{ once: true }}
>
<h3>{dish.name}</h3>
<p>{dish.desc}</p>
</motion.div>
))}
</div>
</section>
);
}