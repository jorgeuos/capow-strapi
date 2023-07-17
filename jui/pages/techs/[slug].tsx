import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import CapowHead from '../../components/Header/CapowHead';

const Tech = ({ tech, content }) => {

  let techHero = tech && tech.attributes.techHero || {};
  const og_settings = tech && tech.attributes.og_settings || {};
  let title = tech && tech.attributes.title || '';
  if (title === '') {
    title = 'Tech not found!';
    techHero.title = 'No such tech!';
    content = '<p class="text-center">Try going to the tech list again. <a href="/techs">Techs</a></p>';
  }

  return (
    <>
      <CapowHead ogSettings={og_settings}>
        <title>{title}</title>
      </CapowHead>
      <Layout title={title} pageHero={techHero}>
        <div>
          <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
              {title}
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

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;

  const populate = [
    'techHero',
    'techHero.title',
    'techHero.image',
    'thumbnail',
  ];
  const populateString = populate.map((p) => `populate[]=${p}`).join('&');

  const techResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/tech/${slug}?&${populateString}&locale=${locale}`,
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

export default Tech;
