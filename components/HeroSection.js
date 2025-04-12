import Link from 'next/link';

export default function HeroSection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link href={buttonLink || '#'} passHref>
          <span className="btn" style={{ cursor: 'pointer' }}>{buttonText}</span>
        </Link>
      </div>
    </section>
  );
}