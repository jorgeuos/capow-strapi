import Head from 'next/head';
import Layout from '../Layout';
import Footer from '../Footer/Footer';
import { HeroType } from '../Hero/Hero';
import Meta from '../Meta/Meta';
import CapowHead from '../Header/CapowHead';

type Page = {
    children: React.ReactNode;
    title: string;
    hero: HeroType;
};

const Page = ({ children, title, page, locale }) => {
    let pageHero = false;
    let imageUrl = '';
    let ogSettings = false;
    if (page) {
        if (page.attributes && page.attributes.pageHero) {
            pageHero = page.attributes.pageHero;
        }
        if (page.attributes && page.attributes.og_settings) {
            ogSettings = page.attributes.og_settings;
        }
    }


    return (
        <>
            <CapowHead ogSettings={ogSettings}>
                <title>{title}</title>
            </CapowHead>
            <Layout title={title}
                pageHero={pageHero}
            >
                <div className="flex flex-col">
                    {children &&
                        <main className="flex-grow">{children}</main>
                    }

                </div>
            </Layout>
        </>
    );
};

export default Page;