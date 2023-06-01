
const Meta = ({ ogSettings }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!ogSettings) {
        return (
            <>
            </>
        );
    }
    const imageUrl = baseUrl + ogSettings.image;

    return (
        <>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta key="description" name="description" content={`${ogSettings.description}`} />
        <meta key="og_title" property="og:title" content={ogSettings.title} />
        <meta key="og_description" property="og:description" content={ogSettings.description} />
        <meta key="og_type" property="og:type" content={ogSettings.type} />
        <meta key="og_image" property="og:image" content={imageUrl} />
        <meta key="og_url" property="og:url" content={baseUrl + ogSettings.url} />
        <meta key="fb_app_id" property="fb:app_id" content="665172961728924" />
        <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
        </>
    );
};

export default Meta;











