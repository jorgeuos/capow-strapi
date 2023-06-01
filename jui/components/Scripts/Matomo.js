import Script from "next/script";

export default function Matomo() {
  return (
    <>
      <Script id="load-matomo">
        {`
          var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='https://matomo.capow.se/js/container_dx1WuKP7.js'; s.parentNode.insertBefore(g,s);
        `}
      </Script>
    </>
  );
}
