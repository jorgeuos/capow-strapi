# Jorgeuos Capow Strapi Next.js site

## Strapi

Built and configured from these tutorials:
* [Strapi Youtube channel](https://www.youtube.com/watch?v=EnuvFyJE6dg&list=PL7Q0DQYATmvjXSuHfB8CY_n_oUeqZzauZ&ab_channel=Strapi)
* [Quick start](https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)


## Nextjs

* [Next.js Typescript](https://nextjs.org/docs/basic-features/typescript)

## Storybook

* [Introduktion(Watch the video!)](https://storybook.js.org/docs/react/writing-stories/introduction)


## Compiling

For simplicity across tutorials I'm using `npm` to compile. I might switch to yarn at a later point.

### Strapi

Remember to build when you do changes in config or add a plugin.

```sh
yarn build
yarn develop
```

Next.js
```sh
npm run dev
```

Storybook
```sh
npm run storybook
```

## Typescript

To generate typescript typings for project schemas:
```
yarn strapi ts:generate-types --verbose #optional flag

```

```sh
┌────────────────┬──────────────────────────────────────────────┬─────────────────────────────────────────┬──────────────────┐
│   Model Type   │ UID                                          │ Type                                    │ Attributes Count │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::permission                            │ AdminPermission                         │        9         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::user                                  │ AdminUser                               │        15        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::role                                  │ AdminRole                               │        9         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::api-token                             │ AdminApiToken                           │        12        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::api-token-permission                  │ AdminApiTokenPermission                 │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::transfer-token                        │ AdminTransferToken                      │        11        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ admin::transfer-token-permission             │ AdminTransferTokenPermission            │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::upload.file                          │ PluginUploadFile                        │        21        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::upload.folder                        │ PluginUploadFolder                      │        10        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::slugify.slug                         │ PluginSlugifySlug                       │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::navigation.audience                  │ PluginNavigationAudience                │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::navigation.navigation                │ PluginNavigationNavigation              │        10        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::navigation.navigation-item           │ PluginNavigationNavigationItem          │        17        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::navigation.navigations-items-related │ PluginNavigationNavigationsItemsRelated │        9         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::i18n.locale                          │ PluginI18NLocale                        │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::users-permissions.permission         │ PluginUsersPermissionsPermission        │        6         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::users-permissions.role               │ PluginUsersPermissionsRole              │        9         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ plugin::users-permissions.user               │ PluginUsersPermissionsUser              │        13        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ api::blog.blog                               │ ApiBlogBlog                             │        11        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ api::page.page                               │ ApiPagePage                             │        12        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ api::post.post                               │ ApiPostPost                             │        12        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│ CollectionType │ api::tech.tech                               │ ApiTechTech                             │        14        │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│   Component    │ hero.hero                                    │ HeroHero                                │        2         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│   Component    │ og.open-graph                                │ OgOpenGraph                             │        5         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│   Component    │ widgets.dynamic-content                      │ WidgetsDynamicContent                   │        0         │
├────────────────┼──────────────────────────────────────────────┼─────────────────────────────────────────┼──────────────────┤
│   Component    │ widgets.widgets                              │ WidgetsWidgets                          │        1         │
└────────────────┴──────────────────────────────────────────────┴─────────────────────────────────────────┴──────────────────┘
```
