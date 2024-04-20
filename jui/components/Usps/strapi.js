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
  const loc = locale === 'en' ? '' : `${locale}`;
  const uspLink = `${loc}/techs/${slug}`;
  return (
    <Link
      href={uspLink}
      hrefLang={`${locale}`}
      data-aos="fade-right"
      className={`
      ${uspStyles.linkBlocks}
      ${cn(uspStyles.blocks)}
      basis-1/3 ${cn(
        uspStyles.strapiWrapper
      )}`}
    >
      <div
        className={`${cn(
          uspStyles.blockInner
        )} block-inner p-8 md:p-4 rounded-xl
        bg-violet-200/60 dark:bg-violet-900/60
        hover:bg-violet-200/90 dark:hover:bg-violet-900/90
        shadow-lg
        shadow-black/30
        `}
      >
        <div className="font-small">
          <div className={`${cn(uspStyles.techWrap)}`}>
            <svg
              className={`${cn(uspStyles.strapiLogo)}`}
              max-width="370"
              max-height="370"
              viewBox="0 0 370 370"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 128.267C0 67.8011 0 37.5684 18.7841 18.7841C37.5684 0 67.8011 0 128.267 0H241.734C302.199 0 332.431 0 351.216 18.7841C370 37.5684 370 67.8011 370 128.267V241.734C370 302.199 370 332.431 351.216 351.216C332.431 370 302.199 370 241.734 370H128.267C67.8011 370 37.5684 370 18.7841 351.216C0 332.431 0 302.199 0 241.734V128.267Z"
                id="strapi-path-1"
                className={`${cn(uspStyles.strapiPath1)}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M255.3 112.233H130.733V175.75H194.25V239.266H257.766V114.7C257.766 113.338 256.661 112.233 255.3 112.233Z"
                className={`${cn(uspStyles.strapiPath2)}`}
              />
              <path
                d="M194.249 175.75H191.782V178.217H194.249V175.75Z"
                className={`${cn(uspStyles.strapiPath3)}`}
              />
              <path
                d="M130.733 175.75H191.782C193.145 175.75 194.25 176.855 194.25 178.216V239.266H133.199C131.837 239.266 130.733 238.163 130.733 236.8V175.75Z"
                className={`${cn(uspStyles.strapiPath4)}`}
              />
              <path
                d="M194.25 239.266H257.766L196.355 300.677C195.578 301.456 194.25 300.904 194.25 299.806V239.266Z"
                className={`${cn(uspStyles.strapiPath5)}`}
              />
              <path
                d="M130.732 175.75H70.1931C69.0945 175.75 68.5442 174.422 69.321 173.645L130.732 112.233V175.75Z"
                className={`${cn(uspStyles.strapiPath6)}`}
              />
            </svg>
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
