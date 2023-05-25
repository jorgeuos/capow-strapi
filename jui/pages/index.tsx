import Layout from '../components/Layout';
import Button from '../components/Buttons/Button';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Page from '../components/Pages/Page';

export default function Home({ locale, page, content }) {
  const pageHero = page.attributes.pageHero;
  const title = page.attributes.title;
  return (
    <>
      {page.attributes ? (
        <Page page={page} title={title}>
          <Title text={title} />
          <div
            className='tracking-wide font-normal text-md content space-y-6 mb-6'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Page>
      ) : (
        <Page title='No content' page = {page} >
          <Title text='No content' />
          "No content"
        </Page>
      )}
    </>
  );
}

export async function getStaticProps() {
  // populate[0]=pageHero&populate[1]=pageHero.title&populate[2]=pageHero.image
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/home?populate[0]=pageHero&populate[1]=pageHero.title&populate[2]=pageHero.image`,
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
