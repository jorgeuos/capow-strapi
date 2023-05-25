import { useState } from 'react';
import Layout from '../components/Layout';
import Page from '../components/Pages/Page';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

const Tech = ({ page, content, techs, locale }) => {
  return (
    <>
      {page.attributes ? (
        <Page title={page.attributes.title}>
          <Title text={page.attributes.title} />
          <div
            className='tracking-wide font-normal text-md content space-y-6 mb-6'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="mb-8">
            {techs.map((tech, i) => {
              const excerptOrder = i % 2 === 0 ? 'order-1' : 'order-2';
              const imageOrder = i % 2 !== 0 ? 'order-1' : 'order-2';
              // const titleOrder = i % 2 === 0 ? 'flex-row' : 'flex-row-reverse';
              return (
                <>
                  {/* ${titleOrder} */}
              <div className='flex flex-row  py-10 border-t border-gray-200'>
                <div className={`flex`}>
                  <div className={`basis-2/3 ${excerptOrder} pr-3`}>
                    <h3 className={``}>{tech.attributes.title}</h3>
                    <p className="font-normal">{tech.attributes.excerpt}</p>
                  </div>
                  <div className={`basis-1/3 ${imageOrder} pr-6`}>
                    <img src={`http://localhost:1337${tech.attributes.thumbnail.data.attributes.url}`} />
                  </div>
                </div>
              </div>
              </>
            )})}
          </div>
        </Page>
      ) : (
        <Page title='No content'>
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
  let returnData = {
    props: {
      page: null,
      content: null,
      techs: null,
    },
  };
  // First get the page
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/technologies?locale=${locale}`,
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
