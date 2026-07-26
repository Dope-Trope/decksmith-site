import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="DeckSmith home">
            Deck<span>Smith</span>
          </a>
          <div className="nav-links">
            <a href="#profile">The profile</a>
            <a href="#details">Details</a>
            <a className="nav-cta" href="#get-it">Get the profile <Arrow /></a>
          </div>
        </nav>

        <div className="hero-grid wrap">
          <div className="hero-copy">
            <p className="eyebrow">Precision-built Stream Deck profiles</p>
            <h1>Put ChatGPT<br /><em>within reach.</em></h1>
            <p className="intro">The control profile for people who would rather work than hunt through menus.</p>
            <div className="hero-actions">
              <a className="button primary" href="#get-it">Get the profile <Arrow /></a>
              <a className="button text" href="#profile">See what&apos;s mapped <span aria-hidden="true">↓</span></a>
            </div>
            <div className="compatibility">
              <span>Stream Deck +</span>
              <span>macOS</span>
              <span>ChatGPT</span>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/images/hero-profile.png"
              alt="DeckSmith ChatGPT Work control profile on a Stream Deck Plus"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
        <div className="hero-rule wrap"><span>01 / CONTROL, REFINED</span><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="statement wrap" id="profile">
        <p className="section-label">The idea</p>
        <div>
          <h2>Complex software.<br /><span>Engineered into simpler control.</span></h2>
          <p>DeckSmith builds considered hardware interfaces for the tools that do serious work. The first profile puts ChatGPT&apos;s everyday controls exactly where your fingers expect them.</p>
        </div>
      </section>

      <section className="feature feature-dark">
        <div className="feature-copy wrap">
          <div>
            <p className="section-label">01 / Your control surface</p>
            <h2>Clear the queue.<br /><em>Keep your flow.</em></h2>
          </div>
          <div className="feature-body">
            <p>Approve and decline requests with dedicated keys. Toggle Plan Mode or Voice. Start a new chat, fork the current thread, and keep momentum when the work gets interesting.</p>
            <ul>
              <li>31 mapped controls across two pages</li>
              <li>27 matching black and white icons</li>
              <li>Built for the Stream Deck + on macOS</li>
            </ul>
          </div>
        </div>
        <div className="gallery-image"><Image src="/images/control-map.png" alt="DeckSmith control profile key mapping" width={1920} height={1080} /></div>
      </section>

      <section className="split-feature wrap" id="details">
        <div className="split-image"><Image src="/images/dials.png" alt="Stream Deck Plus with DeckSmith dial controls" width={1920} height={1080} /></div>
        <div className="split-copy">
          <p className="section-label">02 / Every dial earns its place</p>
          <h2>More control.<br /><span>Less mouse.</span></h2>
          <p>Scroll the long stuff. Move back and forward through history. Adjust reasoning effort mid-task. Jump between chats without breaking focus.</p>
          <div className="metric-list">
            <div><strong>01</strong><span>History</span></div>
            <div><strong>02</strong><span>Scroll</span></div>
            <div><strong>03</strong><span>Effort</span></div>
            <div><strong>04</strong><span>Chats</span></div>
          </div>
        </div>
      </section>

      <section className="feature feature-light">
        <div className="feature-copy wrap">
          <div>
            <p className="section-label">03 / Direct access</p>
            <h2>Two presses.<br /><em>Your model.</em></h2>
          </div>
          <div className="feature-body">
            <p>Open the Models folder, then hit the model you want. A nested Effort folder gives you Light through Ultra without the picker, arrow keys or menu-diving routine.</p>
            <p>Page two is built for the rest of your day: project, Terminal, review panel, speed controls and a side chat, all within reach.</p>
          </div>
        </div>
        <div className="gallery-image"><Image src="/images/models.png" alt="DeckSmith model switching controls on a Stream Deck Plus" width={1920} height={1080} /></div>
      </section>

      <section className="details wrap">
        <div><p className="section-label">The fine print</p><h2>Built to stay useful.</h2></div>
        <div className="details-copy">
          <p>The model, effort and speed controls use ChatGPT&apos;s composer menu, the only method currently exposed by the app. When OpenAI changes its model line-up, these controls may need an update. Everything else uses direct shortcuts and is designed to stay put.</p>
          <p>Tested with the ChatGPT macOS app on 26 July 2026. Built for a US/ANSI keyboard layout. Stream Deck profiles are updated by re-download, and updated profiles will be published when required.</p>
        </div>
      </section>

      <section className="cta" id="get-it">
        <Image className="cta-texture" src="/images/closing-texture.png" alt="" fill sizes="100vw" />
        <div className="cta-inner wrap">
          <p className="section-label">Ready when you are</p>
          <h2>Make your Stream Deck<br /><span>work harder.</span></h2>
          <p>Available now on the Elgato Marketplace.</p>
          <a className="button primary" href="https://marketplace.elgato.com/" target="_blank" rel="noreferrer">Find it on Elgato Marketplace <Arrow /></a>
        </div>
      </section>

      <footer className="footer wrap">
        <a className="wordmark" href="#top">Deck<span>Smith</span></a>
        <p>Control surfaces for smarter work.</p>
        <p>Not affiliated with or endorsed by OpenAI or Elgato.</p>
      </footer>
    </main>
  );
}
