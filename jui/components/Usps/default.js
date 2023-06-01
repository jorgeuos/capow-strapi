import React from "react";
import cn from "classnames";
import uspStyles from "./usp-styles.module.scss";
// import { useIntl } from "react-intl";
import Link from 'next/link';
import { useRouter } from 'next/router';

function UspDefault({title, excerpt, slug}) {
  // const intl = useIntl();
  const router = useRouter();
  const locale = router.locale;
  const append = locale === 'en' ? '' : `-${locale}`;
  const loc = locale === 'en' ? '' : `/${locale}`;
  const uspLink = `${loc}/techs/${slug}`;
  return (
    <Link
      href={uspLink}
      hrefLang={`${locale}`}
      data-aos="fade-left"
      className={`
      ${uspStyles.linkBlocks}
      ${cn(uspStyles.blocks)}
      basis-1/3 ${cn(
        uspStyles.k8sWrapper
      )}`}
    >
      <div
        className={`${cn(
          uspStyles.blockInner
        )} block-inner p-8 md:p-4 rounded-xl`}
      >
        <div className="font-small">
          <div className={`${cn(uspStyles.techWrap)}`}>
            <svg max-width="317" max-height="274" viewBox="0 0 317 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.37857 269.75L158.5 7.99999L309.621 269.75H7.37857Z" stroke="#303030" strokeWidth="8"/>
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

export default UspDefault;
