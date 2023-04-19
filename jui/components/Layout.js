import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children, title }) => (
    <>
        <Head>
            <title>{ title && title || "My page title" }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav />
        <main>
            <div className="
            flex
            justify-center
            items-center
            bg-white
            mx-auto
            w-2/4
            rounded-lg
            my-16
            p-16
            ">
                <div className="font-medium">
                    {children}
                </div>
            </div>
        </main>
    </>
);

export default Layout;