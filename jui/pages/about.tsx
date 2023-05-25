import { useState } from 'react';
import Layout from '../components/Layout';
import Page from '../components/Pages/Page';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { useRouter } from 'next/router';

const About = ({ page, content }) => {
  const { locale } = useRouter();
  if (locale !== 'en') {
    const redirectSlug = page.attributes.localizations.data[0].attributes.slug;
    const redirectTo = `/${locale}/${redirectSlug}`;
    useRouter().push(redirectTo);
  }

  return (
    <>
      {page.attributes ? (
        <Page title={page.attributes.title} page={page}>
          <Title text={page.attributes.title} />
          <div
            className='tracking-wide font-normal text-md content space-y-6 mb-6'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Page>
      ) : (
        <Page title='No content' page={page}>
          <Title text='No content' />
          "No content"
        </Page>
      )}
    </>
  );
};
export default About;

export async function getStaticProps() {
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/about-us?populate=*`,
  );

  if (resultPage.data) {
    const content = await markdownToHtml(resultPage.data.attributes.content);
    return {
      props: {
        page: resultPage.data,
        content: content,
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
