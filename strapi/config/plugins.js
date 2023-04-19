module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
        post: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});
