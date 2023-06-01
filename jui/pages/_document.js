import { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/Meta/Meta';

export default function Document() {
  return (
    <Html>
      <Head />
      {/*
            Before:
            // from-pink-300
            // via-purple-300
            // to-indigo-400 */}
      <body
        className='bg-gradient-to-r
            from-purple-600
            via-sky-500
            to-fuchsia-200
        '
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
