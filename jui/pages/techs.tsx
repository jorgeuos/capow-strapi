import { useState } from 'react';
import Layout from '../components/Layout';
import Page from '../components/Pages/Page';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Link from 'next/link';

const Tech = ({ page, content, techs, locale }) => {

  const loc = locale === 'en' ? '' : locale;
  return (
    <>
      {page.attributes ? (
        <Page title={page.attributes.title} page={page} locale>
          <Title text={page.attributes.title} />
          <div
            className='tracking-wide font-normal text-md content space-y-6 mb-6'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className='mb-8'>
            {techs.map((tech, i) => {
              const excerptOrder = i % 2 === 0 ? 'order-2' : 'order-1';
              const imageOrder = i % 2 !== 0 ? 'order-2' : 'order-1';
              // const titleOrder = i % 2 === 0 ? 'flex-row' : 'flex-row-reverse';
              return (
                <Link
                  className='flex md:flex-row  py-10 border-t border-gray-200'
                  href={`${loc}/techs/${tech.attributes.slug}`}
                  key={i}
                >
                  <div className={`md:flex`}>
                    <div className={`md:basis-1/3 ${imageOrder} pr-6`}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${tech.attributes.thumbnail.data.attributes.url}`}
                      />
                    </div>
                    <div className={`md:basis-2/3 ${excerptOrder} pr-3`}>
                      <h3 className={``}>{tech.attributes.title}</h3>
                      <p className='font-normal'>{tech.attributes.excerpt}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Page>
      ) : (
        <Page title='No content' page={page} locale>
          <Title text='No content' />
          "No content"
        </Page>
      )}
    </>
  );
};
export default Tech;

/**
 * Get the page and the techs
 */
export async function getStaticProps(locales) {

  const { locale } = locales;
  console.log('locale', locale);

  let returnData = {
    props: {
      page: null,
      content: null,
      techs: null,
    },
  };

  const populate = [
    'og_settings',
    'og_settings.image',
  ];
  const populateString = populate.map((p, i) => `populate[${i}]=${p}`).join('&');

  const pageSlug = locale === 'en' ? 'technologies' : 'teknologier';

  const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/${pageSlug}?${populateString}&locale=${locale}`;
  console.log('requestUrl', requestUrl);

  // First get the page
  const resultPage = await fetcher(
    requestUrl,
  );

  if (resultPage.data) {
    const content = await markdownToHtml(resultPage.data.attributes.content);
    returnData.props.page = resultPage.data;
    returnData.props.content = content;
  } else {
    return {
      props: {
        error: resultPage.error.message,
      },
    };
  }
  // Second get the techs
  const resultTechs = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/techs?populate[0]=thumbnail&locale=${locale}`,
  );
  if (resultTechs.data) {
    returnData.props.techs = resultTechs.data;
  }
  return returnData;
}
