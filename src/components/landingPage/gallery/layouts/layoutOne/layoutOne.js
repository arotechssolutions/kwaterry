// Styles
import styles from './layoutOne.module.css'

// Assets : Images
import img1 from "../../../../../../public/hero_kwaterry.jpg"

// Components
import Img from "../image/image"

const LayoutOne = () => {
  return (
    <div className={styles.component}>
        <Img src={img1} />
    </div>
  )
}

export default LayoutOne