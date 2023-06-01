import Head from 'next/head';
import Nav from './Nav/Nav';
import Hero, { HeroType } from './Hero/Hero';
import Footer from './Footer/Footer';

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
    return (
    <>
            <Nav />
            {pageHero &&
                <Hero {...pageHero} />
            }
            {children &&
                <main>
                    <div className="
                    flex
                    justify-center
                    items-center
                    bg-white
                    mx-auto
                    w-11/12 md:w-3/4
                    rounded-lg
                    my-16
                    p-6 md:p-16
                    shadow-lg shadow-indigo-500/40
                    ">
                        <div className="font-medium">
                            {children}
                        </div>
                    </div>
                </main>
            }
            <div className='h-24'></div>
        <Footer />
    </>
)};

export default Layout;