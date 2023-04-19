import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
        <Head>
            <link rel='icon' href='/favicon.ico' />
        </Head>
            <body className="bg-gradient-to-r
            from-purple-600
            via-sky-500
            to-fuchsia-200
            // from-pink-300
            // via-purple-300
            // to-indigo-400
        ">
            <Main />
            <NextScript />
        </body>
        </Html>
    );
}
