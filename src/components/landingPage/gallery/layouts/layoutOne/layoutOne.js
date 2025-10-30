// Styles
import styles from './layoutOne.module.css'

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"

// Components
import Img from "../image/image"

const LayoutOne = ({ images }) => {
  return (
    <div className={styles.component}>
        <Img src={images[0]} />
    </div>
  )
}

export default LayoutOne