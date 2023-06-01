import React, { useEffect } from "react";
import cn from 'classnames';
import { useRouter } from 'next/router';
import UspMatomo from './matomo';
import UspWordpress from './wordpress';
import UspNextjs from './nextjs';
import UspStrapi from './strapi';
import UspVuejs from './vuejs';
import UspKubernetes from './kubernetes';
import UspDefault from './default';
import AOS from 'aos';
import aosStyles from 'aos/dist/aos.css';
import uspStyles from './usp-styles.module.scss';
import Link from 'next/link';


function AllUsps({techs}) {
  const router = useRouter();
  const locale = router.locale;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let allTechs = [];

  //     <UspMatomo></UspMatomo>
  //     <UspWordpress></UspWordpress>
  //     <UspNextjs></UspNextjs>
  //     <UspStrapi></UspStrapi>
  //     <UspVuejs></UspVuejs>
  //     <UspKubernetes></UspKubernetes>

  /**
   * The reason I keep them this way is because I have some animations inside the SVGs that I want to keep.
  */
  techs.map((t) => {
    console.log('t', t.attributes.slug);
    switch (t.attributes.slug) {
      case 'matomo' || 'matomo-sv':
        allTechs.push(<UspMatomo key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspMatomo>);
        break;
      case 'wordpress' || 'wordpress-sv':
        allTechs.push(<UspWordpress key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspWordpress>);
        break;
      case 'nextjs' || 'nextjs-sv':
        allTechs.push(<UspNextjs key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspNextjs>);
        break;
      case 'strapi' || 'strapi-sv':
        allTechs.push(<UspStrapi key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspStrapi>);
        break;
      case 'vue-js' || 'vuejs-sv':
        allTechs.push(<UspVuejs key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspVuejs>);
        break;
      case 'kubernetes' || 'kubernetes-sv':
        allTechs.push(<UspKubernetes key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspKubernetes>);
        break;
      default:
        allTechs.push(<UspDefault key={t.id}
          title={t.attributes.title}
          excerpt={t.attributes.excerpt}
          slug={t.attributes.slug}
        ></UspDefault>);
        break;
    }
  });
  return (
    <>
      {allTechs}
    </>
  );
}

export default AllUsps;
