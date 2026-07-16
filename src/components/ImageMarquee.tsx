import Marquee from 'react-fast-marquee'
import { carouselImages } from '../data/links'
import { styles } from '../styles'

export function ImageMarquee() {
  return (
    <Marquee style={styles.marquee} speed={100} gradient gradientWidth={50}>
      {carouselImages.map((src) => (
        <img key={src} className="marquee-img" src={src} alt="" />
      ))}
    </Marquee>
  )
}
