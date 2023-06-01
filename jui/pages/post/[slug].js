import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import CapowHead from '../../components/Header/CapowHead';

const Post = ({ post, content }) => {
  return (
    <>
      <CapowHead ogSettings={post.attributes.og_settings}>
            <title>{post.attributes.title}</title>
      </CapowHead>
      <Layout title={post.attributes.title} pageHero={post.attributes.postHero}>
        <div>
          <h2 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
              {post.attributes.title}
            </span>
          </h2>
          <div
            className='tracking-wide font-normal content'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  console.log('slug locale', locale);

  const populate = [
    'postHero',
    'postHero.title',
    'postHero.image',
    'og_settings',
    'og_settings.image',
  ];
  const populateString = populate.map((p, i) => `populate[${i}]=${p}`).join('&');
  const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/post/${slug}?${populateString}&locale=${locale}`;
  console.log('requestUrl', requestUrl);

  const postResponse = await fetcher(
    requestUrl,
  );

  if (postResponse.data) {
    const content = await markdownToHtml(postResponse.data.attributes.content);
    return {
      props: {
        post: postResponse.data,
        content: content,
      },
    };
  } else {
    return {
      props: {
        error: postResponse.error.message,
      },
    };
  }
}

export default Post;
