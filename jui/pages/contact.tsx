import Page from '../components/Pages/Page';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

const Contact = ({page, content, locale}) => {
  return (
    <>
      {page.attributes ? (
        <Page title={page.attributes.title} page={page} locale={locale}>
          <Title text={page.attributes.title} />
          <div
            className='tracking-wide font-normal text-md content space-y-6 mb-6'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Page>
      ) : (
        <Page title='No content' page={page} locale={locale}>
          <Title text='No content' />
          "No content"
        </Page>
      )}
    </>
  );
};
export default Contact;

export async function getStaticProps() {
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/contact`,
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
