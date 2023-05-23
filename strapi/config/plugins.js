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
        page: {
          field: 'slug',
          references: 'title',
        },
        tech: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  navigation: {
    enabled: true,
    config: {
        contentTypes: ['api::page.page'],
        contentTypesNameFields: {
            'api::page.page': ['title']
        },
        pathDefaultFields: {
            'api::page.page': ['slug']
        },
        allowedLevels: 2,
    }
}
});
