"use client"

import styles from "./overlay.module.css"

import { X } from "lucide-react"

const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
        <div className={styles.close} onClick={props.close}>
            <X size={15} />
        </div>
        <div className={styles.overlayContent}>
           {props.info}
        </div>
    </div>
  )
}

export default Overlay

