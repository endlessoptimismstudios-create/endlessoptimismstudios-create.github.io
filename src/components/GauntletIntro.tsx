export function GauntletIntro() {
  return (
    <div className="hero-intro">        
    <div style={{ flexDirection: "row", alignContent: "center"}}> 
                <h4>The Magnificent</h4>
        <h1>Melodic Gauntlet</h1></div>
      <section className="hero-row hero-row--split">

        <img
          className="hero-image"
          src="/arms.png"
          alt="Trenton Michael wearing the Melodic Gauntlet."
        />
        <div className="hero-text">

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
