"use client"

import styles from "./myGallery.module.css"

// Layouts
import LayoutFour from "./myLayouts/layoutFour/layoutFour"
import LayoutFourOpp from "./myLayouts/layoutFourOpp/layoutFourOpp"
import LayoutThree from "./myLayouts/layoutThree/layoutThree"
import LayoutThreeOpp from "./myLayouts/layoutThreeOpp/layoutThreeOpp"
import LayoutTwo from "./myLayouts/layoutTwo/layoutTwo"
import LayoutOne from "./myLayouts/layoutOne/layoutOne"


const MyGallery = () => {
  return (
    <section className={styles.component}>
      <section className={styles.corusel}>
        <LayoutFour />
        <LayoutFourOpp />
        <LayoutThree />
        <LayoutThreeOpp />
        <LayoutTwo />
        <LayoutOne />
      </section>
    </section>
  )
}

export default MyGallery
