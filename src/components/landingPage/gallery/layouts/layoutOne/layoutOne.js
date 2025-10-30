// Styles
import styles from './layoutOne.module.css'

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