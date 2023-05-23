import '../styles/globals.scss'
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return <Component {...pageProps} locale={locale} />
}

export default App;
