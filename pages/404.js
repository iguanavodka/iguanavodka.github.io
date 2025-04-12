import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <span style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Go back to homepage
        </span>
      </Link>
    </div>
  );
}