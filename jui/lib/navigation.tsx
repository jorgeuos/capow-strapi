import { fetcher } from './api';

export async function getMainNav() {
    const locale = 'en';
    const mainNav = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/navigation/render/1?locale=${locale}`);
    console.log(mainNav);
    return mainNav;
}
