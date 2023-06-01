import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import CapowHead from '../../components/Header/CapowHead';

const Post = ({ tech, content }) => {
  return (
    <>
      <CapowHead ogSettings={tech.og_settings}>
        <title>{tech.attributes.title}</title>
      </CapowHead>
      <Layout title={tech.attributes.title} pageHero={tech.attributes.techHero}>
        <div>
          <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
              {tech.attributes.title}
            </span>
          </h1>
          <div
            className='tracking-wide font-normal content'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div></div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const populate = [
    'techHero',
    'techHero.title',
    'techHero.image',
    'thumbnail',
  ];
  const populateString = populate.map((p) => `populate[]=${p}`).join('&');

  const techResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/tech/${slug}?&${populateString}`,
  );
  // const tech = await techResponse.json();
  // return {
  //     props: {
  //         tech: techResponse.data
  //     },
  // };

  if (techResponse.data) {
    const content = await markdownToHtml(techResponse.data.attributes.content);
    return {
      props: {
        tech: techResponse.data,
        content: content,
      },
    };
  } else {
    return {
      props: {
        error: techResponse.error.message,
      },
    };
  }
}

export default Post;
