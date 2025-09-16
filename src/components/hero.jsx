'use client';

export default function Hero() {
return (
<section className={styles.hero}>
<div className={styles.overlay}>
<motion.h1
className={styles.title}
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
Authentic Rural Zimbabwean Experience
</motion.h1>


<motion.p
className={styles.subtitle}
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.3 }}
>
Welcome to KwaTerry
</motion.p>


<motion.button
    className={styles.cta}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
>
Reserve Now
</motion.button>
</div>
</section>
);
}
