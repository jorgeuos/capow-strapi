import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
        <Head>
            <link rel='icon' href='/favicon.ico' />
        </Head>
            {/*
            Before:
            // from-pink-300
            // via-purple-300
            // to-indigo-400 */}
            <body className="bg-gradient-to-r
            from-purple-600
            via-sky-500
            to-fuchsia-200
        ">
            <Main />
            <NextScript />
        </body>
        </Html>
    );
}
