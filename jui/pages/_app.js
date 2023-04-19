import '../styles/globals.css'
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
