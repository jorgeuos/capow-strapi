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
            // to-indigo-400 
        // 2024-04-13
        bg-gradient-to-r
        from-purple-600
        via-sky-500
        to-fuchsia-200
        // bg-gradient-radial from-white-100 via-sky-500 to-fuchsia-200
        // 2024-04-14
        // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        // from-purple-200
        // via-pink-400
        // to-blue-400
        from-purple-200 1 0
        via-pink-400 2 via-20
        via-blue-400 3 40
        via-cyan-400 4 60
        via-green-400 5 80
        to-yellow-400 6
            */}
      <body
        className='custom-gradient'
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
