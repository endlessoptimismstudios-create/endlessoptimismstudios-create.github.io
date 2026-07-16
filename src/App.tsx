import { HeroIntro } from './components/HeroIntro'
import { ImageMarquee } from './components/ImageMarquee'
import { SocialLinks } from './components/SocialLinks'
import { connectLinks, listenLinks } from './data/links'
import { styles } from './styles'

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>trenton michael</h1>
        <h2 style={{marginTop: 0, marginBottom: 0, fontWeight: 'normal' }}>the artist & the scientist</h2>
        <h3 style={{marginTop: 0, marginBottom: 0, fontStyle: "italic", fontWeight: 'normal'  }}>based in chicago, il</h3>
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

        <span>listen</span>
        

        <span>connect</span>
        <SocialLinks links={connectLinks} />

        <hr
          style={{
            width: '100%',
            border: 'none',
            borderTop: '1px solid #ccc',
            margin: '24px 0',
          }}
        />
        <br />

        <div>
          <span>support my team & i</span>
          <div style={{ marginLeft: '15px', marginTop: '10px' }}>
            <a href="https://cash.app/$sunboyforever" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/960px-Square_Cash_app_logo.svg.png"
                alt="Cash App"
                style={{ width: '10%', borderRadius: 25, marginRight: 10 }}
              />
            </a>
            <a href="https://venmo.com/u/sunboyforever" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.pngmart.com/files/23/Venmo-Logo-PNG-Pic.png"
                alt="Venmo"
                style={{ width: '10%', borderRadius: 25, marginRight: 10 }}
              />
            </a>
            <a href="https://paypal.me/sunboyforever" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.svgrepo.com/show/475665/paypal-color.svg"
                alt="PayPal"
                style={{ width: '10%', borderRadius: 25, marginRight: 10 }}
              />
            </a>
            <a
              href="https://trentonmichael.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/bandcamp-logo.svg"
                alt="Bandcamp"
                style={{ width: '10%', borderRadius: 25, marginRight: 10, filter: 'invert(1)' }}
              />
            </a>
          </div>
        </div>

        <p />
        <p>
          much love,
          <br />
          trenton
        </p>
        <p style={{ fontStyle: 'italic' }}>© Emo Monk</p>
      </section>
    </div>
  )
}
