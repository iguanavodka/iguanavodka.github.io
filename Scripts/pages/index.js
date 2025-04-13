import Head from 'next/head';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  useEffect(() => {
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

  const features = [
    {
      title: "Feature 1",
      description: "Yo, Deltron thunderforce, ain't no other source " +
        "Of sunlight, two ton mic, leave you tongue-tied " +
        "Runnin' amok with technology with no apology " +
        "Shout it out to my colony with 3rd eye physiology " +
        "Millennium past apocalypse is all I spit " +
        "Make you swallow it, your weak style, I'll abolish it " +
        "With nuclear rockets stay glued to your optics with sci-fi " +
        "Unsettlin' man and metal blends " +
        "Underground chillin' with the mole man and his whole fam " +
        "Inhibit bacteria growth, material growth " +
        "Impenetrable, incontestable indigestible " +
        "Intelligence, never let a computer tell me"
    },
    {
      title: "Feature 2",
      description: "All your rhyme histories combined couldn't violate " +
        "The prime Optimus operative, use my hydrometer " +
        "To see how warm you are, watch me form a star " +
        "Hydrogen turned to helium when I shine " +
        "Riding 'em revealing 'em leading 'em to the vacuum " +
        "Interact with tunes in my digital citadel " +
        "Critical pivotal"
    },
    {
      title: "Feature 3",
      description: "Turbulence tenfold, never simple " +
        "Defies accepted methods development " +
        "Most unique, paralyze central nervous when you close to me " +
        "Interstellar void fills with color, appears to bubble " +
        "And split into four like amoeba " +
        "Inhabitin' planets with grandiose boasts"
    }
  ];

  return (
    <Layout
      title="Deliberate Allure - Home"
      description="A modern website showcasing fantastic features and content."
    >
        <div id="home-content">
        <HeroSection
          title="Better than the ye site"
          subtitle="coming soon unlike ye know who"
          buttonText="Learn More"
          buttonLink="/"
        />
          <section className="features">
            <div className="container">
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Features</h2>
              <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
                </div>
                </div>
          </section>
        </div>
    </Layout>
  );
}