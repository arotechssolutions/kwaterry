"use client"

// Styles
import styles from "./reserveCard.module.css";

export default function BookingCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>Add dates for prices</h3>
      <div className={styles.inputs}>
        <div className={styles.inputBox}>
          <label className={styles.label} >Check-in</label>
          <input  className={styles.input} type="date" />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>Checkout</label>
          <input className={styles.input} type="date" />
        </div>
      </div>
      {/* <div className={styles.inputBox}>
        <label className={styles.label} >Guests</label>
        <select className={styles.select} >
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4 guests</option>
        </select>
      </div> */}
      <button className={styles.checkBtn}>Check availability</button>
      <p className={styles.minStay}>$45/Night</p>
    </div>
  );
}
