import Head from 'next/head';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Simple SPA navigation functionality (migrated from script.js)
    const pages = {
      'home': document.getElementById('home-content'),
    };
    
    document.querySelectorAll('a[data-nav]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-nav');
        
        if (pages[page]) {
          Object.values(pages).forEach(pageEl => {
            if (pageEl) pageEl.style.display = 'none';
          });
          
          pages[page].style.display = 'block';
          history.pushState(null, null, '#' + page);
        } else {
          console.log('Page under construction. Staying on home page.');
        }
      });
    });
    
    const initialPage = window.location.hash.substring(1) || 'home';
    if (pages[initialPage]) {
      pages[initialPage].style.display = 'block';
    } else {
      pages['home'].style.display = 'block';
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deliberate Allure</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iguanavodka.github.io/" />
      </Head>

      <header>
        <div className="container">
          <h1>Deliberate Allure</h1>
          <p>Over Construction</p>
          <nav>
            <a href="#home" data-nav="home" className="active">Home</a>
          </nav>
        </div>
      </header>

      <main>
        <div id="home-content">
          <section className="hero">
            <div className="container">
              <h1>Better than the ye site</h1>
              <p>coming soon unlike ye know who</p>
              <a href="#" className="btn" data-nav="home">Learn More</a>
            </div>
          </section>

          <section className="features">
            <div className="container">
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Feature 1</h3>
                  <p>Yo, Deltron thunderforce, ain't no other source
                      Of sunlight, two ton mic, leave you tongue-tied
                      Runnin' amok with technology with no apology
                      Shout it out to my colony with 3rd eye physiology
                      Millennium past apocalypse is all I spit
                      Make you swallow it, your weak style, I'll abolish it
                      With nuclear rockets stay glued to your optics with sci-fi
                      Unsettlin' man and metal blends
                      Underground chillin' with the mole man and his whole fam
                      Inhibit bacteria growth, material growth
                      Impenetrable, incontestable indigestible
                      Intelligence, never let a computer tell me</p>
                </div>
                <div className="feature-card">
                  <h3>Feature 2</h3>
                  <p>All your rhyme histories combined couldn't violate
                      The prime Optimus operative, use my hydrometer
                      To see how warm you are, watch me form a star
                      Hydrogen turned to helium when I shine
                      Riding 'em revealing 'em leading 'em to the vacuum
                      Interact with tunes in my digital citadel
                      Critical pivotal</p>
                </div>
                <div className="feature-card">
                  <h3>Feature 3</h3>
                  <p>Turbulence tenfold, never simple
                      Defies accepted methods development
                      Most unique, paralyze central nervous when you close to me
                      Interstellar void fills with color, appears to bubble
                      And split into four like amoeba
                      Inhabitin' planets with grandiose boasts</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 3030 My Website. All rights reserved.</p>
          <small>Currently in development mode - More content coming soon!</small>
        </div>
      </footer>
    </>
  );
}