import React from "react";
import cn from "classnames";
import uspStyles from "./usp-styles.module.scss";
import { useIntl } from "react-intl";
import Link from 'next/link';
import { useRouter } from 'next/router';

function UspStrapi({title, excerpt, slug}) {
  const intl = useIntl();
  const router = useRouter();
  const locale = router.locale;
  // const uspLink = `/techs/matomo` + append;
  const loc = locale === 'en' ? '' : `${locale}`;
  const uspLink = `${loc}/techs/${slug}`;
  return (
    <Link
      href={uspLink}
      hrefLang={`${locale}`}
      data-aos="fade-up"
      className={`
        ${uspStyles.linkBlocks}
        ${cn(uspStyles.blocks)}
      basis-1/3 ${cn(
        uspStyles.vueWrapper
      )}`}
    >
      <div
        className={`${cn(
          uspStyles.blockInner
        )} block-inner p-8 md:p-4 rounded-xl
        bg-violet-200/60 dark:bg-violet-900/60
        hover:bg-violet-200/90 dark:hover:bg-violet-900/90
        shadow-lg
        shadow-violet-500/40`}
      >
        <div className="font-small">
          <div className={`${cn(uspStyles.techWrap)}`}>
            <svg
              className={`${cn(uspStyles.vueLogo)}`}
              max-width="370"
              max-height="319"
              viewBox="0 0 370 319"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M227.781 0.90625L185 74.3281L142.219 0.90625H0L185 318.875L370 0.90625H227.781Z"
                className={`${cn(uspStyles.vuePath1)}`}
                // fill="#C2C2C2"
              />
              <path
                d="M227.781 0.90625L185 74.3281L142.219 0.90625H74L185 191.688L296 0.90625H227.781Z"
                className={`${cn(uspStyles.vuePath2)}`}
                // fill="#5F5F5F"
              />
            </svg>
            {/* <Image
                    priority
                    src='/images/VueJS-Greyed.svg'
                    className={uspStyles.card}
                    id='vuejs-logo'
                    height={212}
                    width={372}
                    alt='vuejs-logo'
                  /> */}
          </div>
          <div className="text-indigo-900 dark:text-indigo-200">
            <h3>
            {title}
            </h3>
          </div>
          <div className="text-slate-700 dark:text-violet-200">
            <p>
            {excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UspStrapi;
