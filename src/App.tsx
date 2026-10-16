import { HeroIntro } from './components/HeroIntro'
import { ImageMarquee } from './components/ImageMarquee'
import { SocialLinks } from './components/SocialLinks'
import { connectLinks, listenLinks } from './data/links'
import { styles } from './styles'

const pages = [
  { href: '/home', label: 'home' },
  { href: '/whoami', label: 'who am i?' },
  { href: '/melodicgauntlet', label: 'Melodic Gauntlet' },
  { href: '/contact', label: 'contact' },
]

const leftSocialLinks = connectLinks.filter((_, index) => index % 2 === 0)
const rightSocialLinks = connectLinks.filter((_, index) => index % 2 === 1)

function HomePage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 className="site-title" style={{ marginBottom: 4 }}>trenton michael</h1>

        <div className="portrait-with-socials" role="group" aria-label="Portrait and social media">
          <SocialLinks
            links={leftSocialLinks}
            className="hero-social-stack hero-social-stack--left"
          />
          <img
            style={{ width: 'min(175px, 100%)', height: 'auto' }}
            src="/magnificent.png"
            alt="A photo of Trenton Michael wearing his signature synthesizer glove, the Melodic Gauntlet, in an all-blue-and-black pixel-art style. A star pattern is painted on the back of the hand as he holds the gauntlet up and looks off into the distance."
          />
          <SocialLinks
            links={rightSocialLinks}
            className="hero-social-stack hero-social-stack--right"
          />
        </div>

        <h2 style={{ marginTop: 0, marginBottom: 0, fontStyle: "italic", fontWeight: 'normal' }}>
          Architect of the Future
        </h2>

          <ImageMarquee />        
        <div className="feature-grid">

          <section className="feature-card feature-card--neon">
            <h3
              className="feature-title feature-title--neon"
              style={{
                marginTop: 0,
                marginBottom: -10,
                fontWeight: 'bold',
              }}
            >
              Stream NEON
            </h3>
            <h4
              className="feature-subtitle"
              style={{
                marginTop: 0,
                marginBottom: -20,
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
            <div className="gauntlet-promo-row">
              <img
                className="feature-image"
                src="/gauntlet_demo_2.png"
                alt="Trenton showing the Melodic Gauntlet"
              />
              <a className="feature-button" href="/MelodicGauntlet">
                <span>Learn</span>
                <span>more</span>
              </a>
            </div>
          </section>
        </div>
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
          <h1>who am i?</h1>
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
