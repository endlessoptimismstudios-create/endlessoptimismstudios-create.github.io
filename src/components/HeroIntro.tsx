import { introText } from '../data/content'
import { styles } from '../styles.ts'
import { connectLinks, listenLinks } from '../data/links'
import { SocialLinks } from './SocialLinks.tsx'

export function HeroIntro() {
  return (
    <div className="hero-row">
      <img
        className="hero-image"
        src="/frontmargin.jpeg"
        alt="Trenton Michael"
      />
      <div>
      <div className="hero-text">
        {introText.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>         <video
          style={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/EPK/montage_web_silent.mp4" type="video/mp4" />
          
        </video>     
<SocialLinks links={listenLinks} linkClassName="" style={{ marginBottom: '10px' }} />
        </div>
    </div>
  )
}
