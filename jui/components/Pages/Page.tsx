import Head from 'next/head';
import Layout from '../Layout';
import Footer from '../Footer/Footer';

type Page = {
    children: React.ReactNode;
    title: string;
};

const Page = ({ children, title, ...props }) => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen">
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
    );
};

export default Page;