import { HeroIntro } from './components/HeroIntro'
import { ImageMarquee } from './components/ImageMarquee'
import { SocialLinks } from './components/SocialLinks'
import { connectLinks, listenLinks } from './data/links'
import { styles } from './styles'

const pages = [
  { href: '/home', label: 'Home' },
  { href: '/whoami', label: 'Who Am I?' },
  { href: '/MelodicGauntlet', label: 'Melodic Gauntlet' },
  { href: '/contact', label: 'Contact' },
]

function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 className="site-title">trenton michael</h1>
        <br />
        <img
          style={{ width: 'min(350px, 100%)', height: 'auto' }}
          src="/magnificent.png"
          alt="A photo of Trenton Michael wearing his signature synthesizer glove, the Melodic Gauntlet, in a pixel-art style, with his head resting on his chin. The back of his hand is painted with a star pattern."
        />

        <h2 style={{ marginTop: 0, marginBottom: 0, fontWeight: 'normal' }}>
          Architect of the Future
        </h2>
        <br />

        <div className="feature-grid">
          <section className="feature-card feature-card--neon">
            <h3
              className="feature-title feature-title--neon"
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              NEON
            </h3>
            <h4
              className="feature-subtitle"
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}
            >
              A brief bitsoul collection
            </h4>
            <img className="feature-image" src="/neon_ep_cover.png" alt="NEON EP cover" />
            <SocialLinks links={listenLinks} linkClassName="link" style={{ marginBottom: 0 }} />
          </section>
          <section className="feature-card feature-card--gauntlet">
            <h3
              className="feature-title feature-title--gauntlet"
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              The Melodic Gauntlet
            </h3>
            <h4
              className="feature-subtitle"
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}
            >
              The one-of-a-kind gauntlet synthesizer with full chromatics, chords, expression, and
              unique abilities
            </h4>
            <img
              className="feature-image"
              src="/gauntlet_demo_2.png"
              alt="Trenton showing the Melodic Gauntlet"
            />
            <a className="feature-button" href="/MelodicGauntlet">
              Learn more
            </a>
          </section>
        </div>
              <p>Find me online</p>
        <SocialLinks links={connectLinks} />
      </header>

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

function CurrentPage() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  switch (pathname.toLowerCase()) {
    case '/':
    case '/home':
      return <HomePage />
    case '/whoami':
      return (
        <div className="simple-page" style={styles.container}>
          <h1>Who Am I?</h1>
          <HeroIntro />
        </div>
      )
    case '/melodicgauntlet':
      return <div className="simple-page" style={styles.container} ><a href="https://forms.gle/mAyXp19Yzgvhebxu7">Click here to sign up for the email list.</a><br></br>            <img
              className="feature-image"
              src="/gauntlet_demo_2.png"
              alt="Trenton showing the Melodic Gauntlet"
            /><br></br>More information about the Gauntlet will be shared soon.</div>
    case '/contact':
      return (
        <div className="simple-page" style={styles.container}>
          <a href="mailto:trentonmichaelmusic@gmail.com">trentonmichaelmusic@gmail.com</a>
        </div>
      )
    default:
      return (
        <div className="simple-page" style={styles.container}>
          <h1>Page not found</h1>
          <a href="/home">Return home</a>
        </div>
      )
  }
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/'

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        {pages.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            aria-current={
              pathname === href.toLowerCase() || (pathname === '/' && href === '/home')
                ? 'page'
                : undefined
            }
          >
            {label}
          </a>
        ))}
      </nav>
      <main className="site-main">
        <CurrentPage />
      </main>
    </>
  )
}
