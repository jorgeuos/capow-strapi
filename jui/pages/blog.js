import Layout from '../components/Layout';
import { fetcher } from '../lib/api';
import Posts from '../components/Posts/Posts';
import useSWR from 'swr';
import { useState } from 'react';
import Title from '../components/Texts/Title';

const PostsList = ({ posts }) => {
  const [pageIndex, setPageIndex] = useState(1);
  // const [activePosts, setActivePosts] = useState(posts);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=${pageIndex}&pagination[pageSize]=5`,
    fetcher,
    {
      fallbackData: posts,
    },
  );
  // setActivePosts(data);
  return (
    <Layout>
      <Title text='This is Posts' />
      <Posts posts={data} />

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
    </Layout>
  );
};


export async function getStaticProps() {
  const posts = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=2`,
  );
  // const posts = await posts.json();
  return {
    props: {
      posts: posts,
    },
  };
}

export default PostsList;