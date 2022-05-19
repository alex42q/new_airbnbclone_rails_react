import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import NavContextProvider from '../contexts/navcontext';

function MyApp({ Component, pageProps }) {
  return (<NavContextProvider>
      <Component {...pageProps} />
  </NavContextProvider>)
}

export default MyApp
