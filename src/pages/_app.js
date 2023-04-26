import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FooterMobile from './components/FooterMobile'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function App({ Component, pageProps }) {
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <FooterMobile />
    </>
  )
}

export default App