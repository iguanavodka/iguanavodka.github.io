import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found" description="The page you are looking for could not be found.">
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
        minHeight: '50vh',
      textAlign: 'center',
        padding: '40px 20px'
    }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link href="/" passHref>
        <span style={{
          display: 'inline-block',
            padding: '12px 24px',
          backgroundColor: '#3498db',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        }}>
            Back to Homepage
        </span>
      </Link>
    </div>
    </Layout>
  );
}