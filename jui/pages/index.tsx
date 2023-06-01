import Layout from '../components/Layout';
import Head from 'next/head';
import CapowHead from '../components/Header/CapowHead';
import Page from '../components/Pages/Page';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import cn from 'classnames';
import utilStyles from '../styles/utils.module.scss';
import AllUsps from '../components/Usps/all-usps';
import Footer from '../components/Footer/Footer';
import Meta from '../components/Meta/Meta';
import Matomo from "../components/Scripts/Matomo";

export default function Home({ locale, page, content, techs }) {
  const pageHero = page.attributes.pageHero;
  const title = page.attributes.title ? `Jorgeuosss - ${page.attributes.title}` : 'Jorgeuos';
  // console.log(page);

  return (
    <>
      {page.attributes ? (
        <>
          <CapowHead ogSettings={page.attributes.og_settings}>
            <title>{title}</title>
          </CapowHead>
          <Nav />
          {pageHero && <Hero {...pageHero} />}
          <section
            className={`${utilStyles.headingMd} text-center ${utilStyles.center} secondSection bg-top bg-cover bg-fixed py-16 px-6`}
          >
            <main>
              <div
                className='
                flex
                justify-center
                items-center
                bg-white/90
                mx-auto
                max-w-4xl
                rounded-lg
                p-6 md:p-16
                shadow-lg
                shadow-indigo-500/40
                '
              >
                <div
                  className='tracking-wide font-normal text-md content space-y-6 mb-6 text-center'
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </main>
          </section>
          <section
            className={`${utilStyles.headingMd} text-center ${utilStyles.center} thirdSection bg-top bg-cover bg-fixed pb-44`}
          >
            <div
              className={`${cn(utilStyles.center)}
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl fade overflow-hidden
              pb-16
              `}
            >
              <AllUsps techs={techs}></AllUsps>
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <Page title='No content' page={page} locale={locale}>
          <Title text='No content' />
          "No content"
        </Page>
      )}
    </>
  );
}

export async function getStaticProps({locale}) {
  // populate[0]=pageHero&populate[1]=pageHero.title&populate[2]=pageHero.image
  const populate = [
    'pageHero',
    'pageHero.title',
    'pageHero.image',
    'og_settings',
    'og_settings.image',
  ];
  const populateString = populate.map((p, i) => `populate[${i}]=${p}`).join('&');
  const homeSlug = locale === 'en' ? 'home': 'hem';
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/${homeSlug}?${populateString}&locale=${locale}`,
  );
  const techs = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/techs?fields[0]=title&fields[1]=excerpt&fields[2]=slug&locale=${locale}`,
  );

  if (resultPage.data) {
    const content = await markdownToHtml(resultPage.data.attributes.content);
    return {
      props: {
        page: resultPage.data,
        content: content,
        techs: techs.data,
      },
    };
  } else {
    return {
      props: {
        error: resultPage.error.message,
      },
    };
  }
}
