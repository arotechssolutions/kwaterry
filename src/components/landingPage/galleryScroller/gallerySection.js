"use client"
import { useRef } from "react"
import { useInView } from "framer-motion"

const GallerySection = ({ Layout, images }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true })

  return (
    <div ref={ref}>
      <Layout images={images} isInView={isInView} />
    </div>
  )
}

export default GallerySection
