// Styles
import styles from './layoutTwo.module.css'

// Components
import Img from "../image/image"

// Sizes
import { layoutImageSizes } from "@/components/landingPage/gallery/gallery"

const LayoutTwo = ({ images }) => {
  const sizes = layoutImageSizes.LayoutTwo
  return (
    <div className={styles.component}>
      <div className={styles.largeImage}>
        <Img src={images[0]} {...sizes[0]} />
      </div>
      <div className={styles.smallImage}>
        <Img src={images[1]} {...sizes[1]}/>
      </div>
    </div>
  )
}

export default LayoutTwo
