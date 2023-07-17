import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import CapowHead from '../../components/Header/CapowHead';

const Post = ({ post, content }) => {
  const postHero = post && post.attributes.postHero || {};
  const og_settings = post && post.attributes.og_settings || {};
  let title = post && post.attributes.title || '';
  if (title === '') {
    title = 'Post not found!';
    postHero.title = 'No such post!';
    content = '<p class="text-center">Try going to the post list again. <a href="/techs">Blog</a></p>';
  }
  return (
    <>
      <CapowHead ogSettings={og_settings}>
            <title>{title}</title>
      </CapowHead>
      <Layout title={title} pageHero={postHero}>
        <div>
          <h2 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
              {title}
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

  const populate = [
    'postHero',
    'postHero.title',
    'postHero.image',
    'og_settings',
    'og_settings.image',
  ];
  const populateString = populate.map((p, i) => `populate[${i}]=${p}`).join('&');
  const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/post/${slug}?${populateString}&locale=${locale}`;

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
