import Head from 'next/head';
import Layout from '../Layout';
import Footer from '../Footer/Footer';
import { HeroType } from '../Hero/Hero';

type Page = {
    children: React.ReactNode;
    title: string;
    hero: HeroType;
};

const Page = ({ children, title, page }) => {
    let pageHero = false;
    console.log(typeof page);
    console.log(page);
    if (page) {
        console.log('We have a page');
        if (page.attributes && page.attributes.pageHero) {
            pageHero = page.attributes.pageHero;
        }
    }
    return (
        <>
            <Layout title={title}
                pageHero={pageHero}
            >
                <div className="flex flex-col">
                    <Head>
                        <title>{title}</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <main className="flex-grow">{children}</main>

                    <footer className="flex-shrink-0">
                        <Footer />
                    </footer>
                </div>
            </Layout>
        </>
    );
};

export default Page;