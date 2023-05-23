import Posts from './Posts';


// const mockPosts = [
//     {
//         id: 1,
//         attributes: {
//             title: 'Post 1',
//             slug: 'post-1-slug',
//         }
//     },
//     {
//         id: 2,
//         attributes: {
//             title: 'Post 2',
//             slug: 'post-2-slug',
//         }
//     }
// ];

const mockPosts = {
    "data": [
        {
            "id": 1,
            "attributes":
            {
                "title": "Post 1",
                "content": "Lorem ipsum...",
                "createdAt": "2023-04-14T12:45:01.277Z",
                "updatedAt": "2023-04-18T20:29:59.024Z",
                "publishedAt": "2023-04-14T14:17:54.704Z",
                "posted_at": "2022-12-05",
                "locale": "en",
                "slug": "post-1"
            }
        },
        {
            "id": 2,
            "attributes":
            {
                "title": "Post 2",
                "content": "Lorem ipsum...",
                "createdAt": "2023-04-14T12:45:01.277Z",
                "updatedAt": "2023-04-18T20:29:59.024Z",
                "publishedAt": "2023-04-14T14:17:54.704Z",
                "posted_at": "2022-12-05",
                "locale": "en",
                "slug": "post-2"
            }
        },
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 2,
            "pageCount": 3,
            "total": 5
        }
    }
}

export default {
    title: 'Posts/Posts',
    component: Posts,
    tags: ['autodocs'],
    // args: {
    //     posts: mockPosts,
    // },
};

export const List = {
    args: {
      posts: mockPosts,
    },
  };