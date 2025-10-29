"use client"

// Styles
import styles from "./gallery.module.css"

// Layouts
import LayoutFour from "./layouts/layoutFour/layoutFour"
import LayoutFourOpp from "./layouts/layoutFourOpp/layoutFourOpp"
import LayoutThree from "./layouts/layoutThree/layoutThree"
import LayoutThreeOpp from "./layouts/layoutThreeOpp/layoutThreeOpp"
import LayoutTwo from "./layouts/layoutTwo/layoutTwo"
import LayoutOne from "./layouts/layoutOne/layoutOne"

const Gallery = () => {
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

export default Gallery
