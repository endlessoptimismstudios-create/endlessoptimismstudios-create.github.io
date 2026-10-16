export function HeroIntro() {
  return (
    <div className="hero-intro">
      <section className="hero-row hero-row--split">
        <img
          className="hero-image"
          src="/trenton_michael_wearing_spiked_gauntlet_pixel_art.png"
          alt="Trenton Michael wearing the Melodic Gauntlet."
        />
        <div className="hero-text">
        <p>
          my name is trenton michael. i'm 27 years old, i live in chicago and i'm from rural
          michigan.
        </p>
        </div>
      </section>

      <section className="hero-row">   
        <div className="hero-text">
          <p>
            i've been a saxophonist and composer since i was 11 years old and i took piano lessons
            for a few months at age 13, the same age i became highly interested in synthesizers. i
            spent the rest of my teen years playing many different genres, learning production,
            recording, and experimenting with electronic music composition and production. finally,
            i started releasing music and performing as a solo artist when i was 21.
          </p>
        </div>
      </section>

      <section className="hero-video-row" aria-label="Performance video">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/EPK/montage_web_silent.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="hero-row">
        <div className="hero-text">
          <p>
            i consider myself a scientist, being someone who explores the unknown experimentally.
            the Melodic Gauntlet, which i created only in summer of 2026, is a prime
            example of my skills as an engineer, inventor, and all-around creator.
          </p>
               <img
          className="hero-image"
          src="/abstract_trenton.png"
          alt="Trenton Michael wearing the Melodic Gauntlet."
        />
        </div>
      </section>
    </div>
  )
}
