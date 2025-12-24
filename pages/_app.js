import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}