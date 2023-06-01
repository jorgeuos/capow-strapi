import Link from 'next/link';

const Posts = ({ posts, locale }) => {
  const loc = locale === 'en' ? '' : locale;
  return (
    <>
      {/* <ul>
                {posts &&
                    posts.data.map((post) => {
                        return (
                            <li key={post.id} className='mb-4'>
                                <Link href={`post/` + post.attributes.slug}>
                                    {post.attributes.title}
                                </Link>
                            </li>
                    )}
                    )}

            </ul> */}
      <div className='mb-8'>
        {posts &&
          posts.data.map((post, i) => {
            const excerptOrder = i % 2 === 0 ? 'order-2' : 'order-1';
            const imageOrder = i % 2 !== 0 ? 'order-2' : 'order-1';
            // const titleOrder = i % 2 === 0 ? 'flex-row' : 'flex-row-reverse';
            return (
              <Link
                className='flex flex-row  py-10 border-t border-gray-200'
                href={`${loc}/post/${post.attributes.slug}`}
                key={i}
              >
                <div className={`md:flex md:grow md:flex-row`}>
                  <div className={`basis-full md:basis-1/3 md:${imageOrder} pr-6`}>
                    { post.attributes.thumbnail && post.attributes.thumbnail.data ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.attributes.thumbnail.data.attributes.url}`}
                      />
                    ) : (
                                    <img
                                        src={`https://placehold.co/302x202`}
                                    />
                    )
                }
                  </div>
                  <div className={`basis-full md:basis-2/3 md:${excerptOrder} pr-3`}>
                    <h3 className={``}>{post.attributes.title}</h3>
                    <p className='font-normal'>{post.attributes.excerpt}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
export default Posts;
