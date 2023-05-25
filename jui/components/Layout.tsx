import Head from 'next/head';
import Nav from './Nav/Nav';
import Hero, { HeroType } from './Hero/Hero';

type LayoutProps = {
    children: React.ReactNode
}

type TitleProps = {
    title: string
}

type Locale = {
    locale: string
}

const Layout = ({ children, title, pageHero }) => {
    console.log('Layout pageHero', pageHero);
    return (
    <>
        <Head>
            <title>{ title && title || "Jorgeuos" }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <Nav />
            {pageHero &&
                <Hero {...pageHero} />
            }
        <main>
            <div className="
            flex
            justify-center
            items-center
            bg-white
            mx-auto
            w-3/4
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
)};

export default Layout;