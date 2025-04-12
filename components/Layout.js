import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = "Deliberate Allure", description = "A modern website with enhanced functionality" }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iguanavodka.github.io/" />
      </Head>

      <header>
        <div className="container">
          <h1>Deliberate Allure</h1>
          <p>Over Construction</p>
          <nav>
            <Link href="/" passHref>
              <span className="active" style={{ cursor: 'pointer' }}>Home</span>
            </Link>
            {/* Add more nav links as your site grows */}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="container">
          <p>&copy; 3030 My Website. All rights reserved.</p>
          <small>Currently in development mode - More content coming soon!</small>
        </div>
      </footer>
    </>
  );
}