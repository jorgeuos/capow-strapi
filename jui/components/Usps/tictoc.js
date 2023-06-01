import React from "react";
import cn from "classnames";
import uspStyles from "./usp-styles.module.scss";
import { useIntl } from "react-intl";
import Link from 'next/link';
import { useRouter } from 'next/router';

function UspMatomo({title, excerpt, slug}) {
  const intl = useIntl();
  const router = useRouter();
  const locale = router.locale;
  return (
    <Link href={`/techs/matomo`} hrefLang={`${locale}`}
      data-aos="fade-right"
      className={`
        ${uspStyles.linkBlocks}
        ${cn(uspStyles.blocks)}
        basis-1/3
        ${cn(uspStyles.matomoWrapper)}
      `}
    >
      <div
        className={`${cn(
          uspStyles.blockInner
        )} block-inner p-8 md:p-4 rounded-xl`}
      >
        <div className="font-small">
          <div className={`${cn(uspStyles.techWrap)}`}>
            <svg
              className={`${cn(uspStyles.matomoLogo)}`}
              max-width="372"
              max-height="212"
              viewBox="0 0 372 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="matomo-1"
                d="M362.8 129.7L361.8 128.2C361.6 128 361.5 127.8 361.3 127.6L295.2 26.9L209.7 90.4L272.5 186.9L273.3 188.1L273.7 188.6C290.5 212.9 323.9 219 348.2 202.2C371.8 185.9 378.3 153.9 363 129.7"
                className={`${cn(uspStyles.matomoPath1)}`}
              />
              <path
                id="matomo-2"
                d="M303.9 54.1C303.9 24.2 279.7 0 249.8 0C219.9 0 195.7 24.2 195.7 54.1C195.7 84 219.9 108.2 249.8 108.2H249.9C279.8 108.2 304 84 304 54.1"
                className={`${cn(uspStyles.matomoPath2)}`}
              />
              <path
                id="matomo-3"
                d="M108.2 157.1C108.2 127.2 84 103 54.1 103C24.2 103 0 127.2 0 157.1C0 187 24.2 211.2 54.1 211.2H54.2C84.1 211.2 108.3 187 108.3 157.1"
                className={`${cn(uspStyles.matomoPath3)}`}
              />
              <path
                id="matomo-4"
                d="M249.8 108.5C231.8 108.5 215 99.3999 205.1 84.3999L164.3 26.9999C148.8 1.69995 116 -6.20005 90.8 9.29995C83.6 13.6999 77.6 19.6999 73.2 26.8999L8.3 127.8C24.8 103.3 58.1 96.8999 82.6 113.4C89 117.8 94.5 123.5 98.5 130.1L141 189.5C158.4 213.3 191.8 218.5 215.6 201.1C220 197.9 223.9 194 227.2 189.5L227.6 188.8L230.7 184.3L294.2 85.1999C284.1 99.7999 267.5 108.5 249.8 108.5Z"
                className={`${cn(uspStyles.matomoPath4)}`}
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

export default UspMatomo;
