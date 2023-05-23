import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Post = ({ post, content }) => {
    return (
        <Layout>
            <div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    {post.attributes.title}
                    </span>
                </h1>
                <div
                    className="tracking-wide font-normal content"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const postResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/post/${slug}`);
    // console.log(postResponse);
    // const post = await postResponse.json();
    // return {
    //     props: {
    //         post: postResponse.data
    //     },
    // };

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