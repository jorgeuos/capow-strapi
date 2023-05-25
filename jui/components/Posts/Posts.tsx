import Link from 'next/link';

const Posts = ({ posts }) => {
    return (
        <>
            <ul>
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

            </ul>
        </>
    );
}
export default Posts;