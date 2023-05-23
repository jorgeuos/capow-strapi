import Head from "next/head";

const siteTitle = 'Jorgeuos - Next generation Data Analysts';
const defaultOgImage = '/images/Jorgeuos-OG.png';
const defaultOgDescription = 'Get help with your integrity safe web analytics. We are Matomo experts.';
const baseUrl = 'https://jorgeuos.com';

const MetaTags = ({ ogSettings }) => {
    const { title, description } = ogSettings;
    // const router = useRouter();
    const router = {
        locale: 'en',
        asPath: `${window.location.pathname}`
    };
    const setOgTitle = ogSettings && ogSettings.title ? ogSettings.title : siteTitle;
    const setOgDescription = ogSettings && ogSettings.description ? ogSettings.description : defaultOgDescription;
    const setOgImage = ogSettings && ogSettings.image ? ogSettings.image : defaultOgImage;
    const setOgType = ogSettings && ogSettings.type ? ogSettings.type : 'website';
    const routeLocale = router.locale === 'en' ? '/' : '/' + router.locale;
    const setOgUrl = routeLocale + router.asPath;
    return (
        <Head>
        <title>{title}</title>
            <meta name="description" content={setOgDescription} />
            <meta property="og:title" content={setOgTitle} />
            <meta property="og:description" content={setOgDescription} />
            <meta property="og:type" content={setOgType} />
            <meta property="og:image" content={baseUrl + setOgImage} />
            <meta property="og:url" content={baseUrl + setOgUrl} />
            <meta property="fb:app_id" content="665172961728924" />
            <meta name='twitter:card' content='summary_large_image' />
        </Head>
    );
};

export default MetaTags;