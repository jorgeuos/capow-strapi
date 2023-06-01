import '../styles/globals.scss'
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/prism-overrides.css";
import { IntlProvider } from 'react-intl';
import { useRouter } from "next/router";


import en from "../lang/en.json";
import sv from "../lang/sv.json";

const messages = {
  en,
  sv,
};

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} locale={locale} />
    </IntlProvider>
  );
}

export default App;
