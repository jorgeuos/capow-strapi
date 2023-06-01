import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
import Posts from '../components/Posts/Posts';
import useSWR from 'swr';
import { useState } from 'react';
import Title from '../components/Texts/Title';
import markdownToHtml from '../lib/markdownToHtml';
import Page from '../components/Pages/Page';

const PostsList = ({ page, content, posts, locale }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=${pageIndex}&pagination[pageSize]=5&sort[0]=posted_at:desc&populate[]=thumbnail&locale=${locale}`,
    fetcher,
    {
      fallbackData: posts,
    },
  );

  return (
    <Page page={page} title={page.attributes.title} locale={locale}>
      <Title text={page.attributes.title} />
      <div
        className='prose lg:prose-xl mb-10'
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Posts posts={data} locale={locale} />
      {/* Pagination */}
      <div className='space-x-2 space-y-2'>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
          }`}
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          {' '}
          Previous
        </button>
        <button
          className={`md:p-2 rounded py-2 text-black text-white p-2 ${
            pageIndex === (data && data.meta.pagination.pageCount)
              ? 'bg-gray-300'
              : 'bg-blue-400'
          }`}
          disabled={pageIndex === (data && data.meta.pagination.pageCount)}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
      {/* End pagination */}
    </Page>
  );
};


export async function getStaticProps(locales) {
  const { locale } = locales;


  const populate = [
    'og_settings',
    'og_settings.image',
  ];
  const populateString = populate.map((p, i) => `populate[${i}]=${p}`).join('&');

  let returnData = {
    props: {
      page: null,
      content: null,
      posts: null,
    },
  };
  // First get the page
  const resultPage = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/page/blogg?locale=${locale}&${populateString}&locale=${locale}`,
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

  // Then get the posts
  const posts = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=5&sort[0]=posted_at:desc&populate[]=thumbnail&locale=${locale}`,
  );
  if (posts.data) {
    returnData.props.posts = posts;
  }
  return returnData;
}

export default PostsList;