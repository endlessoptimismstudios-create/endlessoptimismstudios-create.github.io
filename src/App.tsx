import { HeroIntro } from './components/HeroIntro'
import { ImageMarquee } from './components/ImageMarquee'
import { SocialLinks } from './components/SocialLinks'
import { connectLinks, listenLinks } from './data/links'
import { styles } from './styles'

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 className="site-title">trenton michael</h1>
        <h2 style={{marginTop: 0, marginBottom: 0, fontWeight: 'normal' }}>the artist & the scientist</h2>
        <h3 style={{marginTop: 0, marginBottom: 0, fontStyle: "italic", fontWeight: 'normal'  }}>based in chicago</h3>

<SocialLinks links={listenLinks} linkClassName="link" style={{ marginBottom: '10px' }} />

        <SocialLinks links={connectLinks} />
      </header>
      

      <HeroIntro />

      <section style={styles.section}>


        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ImageMarquee />
        </div>

        <hr
          style={{
            width: '100%',
            border: 'none',
            borderTop: '1px solid #ccc',
            margin: '24px 0',
          }}
        />
        <p />
        <p style={{ fontStyle: 'italic' }}>© endless optimism llc</p>
      </section>
    </div>
  )
}
