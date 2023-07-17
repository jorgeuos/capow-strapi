import Script from "next/script";

export default function MtmoLocal() {
  const trackerUrl = process.env.NODE_ENV === "production" ?
    process.env.NEXT_PUBLIC_MATOMO_PRODUCTION_URL :
    process.env.NEXT_PUBLIC_MATOMO_DEVELOPMENT_URL;
  console.log("MtmoLocal trackerUrl", trackerUrl);
  return (
    <>
      <Script id="load-mtmo">
        {`
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
            var u="${trackerUrl}";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
        `}
      </Script>
    </>
  );
}
