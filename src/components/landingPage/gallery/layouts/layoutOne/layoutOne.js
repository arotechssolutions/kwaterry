// Styles
import styles from './layoutOne.module.css'

// Components
import Img from "../image/image"

const LayoutOne = ({ images, onImageClick }) => {
  return (
    <div className={styles.component}>
        <Img onImageClick={onImageClick} src={images[0]} />
    </div>
  )
}

export default LayoutOne