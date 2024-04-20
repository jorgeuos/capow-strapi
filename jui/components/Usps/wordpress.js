import React from "react";
import cn from "classnames";
import uspStyles from "./usp-styles.module.scss";
import { useIntl } from "react-intl";
import Link from 'next/link';
import { useRouter } from 'next/router';

function UspWordpress({title, excerpt, slug}) {
  const intl = useIntl();
  const router = useRouter();
  const locale = router.locale;
  const append = locale === 'en' ? '' : `-${locale}`;
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
        basis-1/3
        ${cn(uspStyles.wordpressWrapper)}
      `}
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
              {/* <Image
          priority
          src='/images/Wordpress.svg'
          className={uspStyles.card}
          height={212}
          width={372}
          alt='Wordpress'
        /> */}
              <svg
                className={`${cn(uspStyles.wordpressLogo)}`}
                max-width="370"
                max-height="370"
                viewBox="0 0 370 370"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M179.783 12.2037C213.321 12.2037 245.967 22.1938 273.618 40.925C300.555 59.1211 321.784 84.8097 334.45 114.78C356.57 167.048 350.683 226.81 318.929 273.727C300.733 300.665 275.045 321.893 245.075 334.559C192.806 356.68 133.044 350.793 86.1269 319.039C59.1896 300.843 37.9609 275.154 25.295 245.184C3.17431 192.915 9.06127 133.154 40.8151 86.2368C59.0112 59.2995 84.6999 38.0707 114.67 25.4048C135.185 16.6636 157.484 12.2037 179.783 12.2037ZM179.783 1.50012C81.3103 1.50012 1.39038 81.4202 1.39038 179.893C1.39038 278.366 81.3103 358.286 179.783 358.286C278.256 358.286 358.176 278.366 358.176 179.893C358.176 81.4202 278.256 1.50012 179.783 1.50012Z"
                  className={`${cn(uspStyles.wordpressPath1)}`}
                  // fill="#787878"
                />
                <path
                  d="M31.1873 179.89C31.1873 236.797 63.6547 288.888 115.032 313.685L44.0315 119.415C35.4687 138.503 31.1873 159.018 31.1873 179.89ZM280.224 172.398C280.224 154.023 273.623 141.357 267.914 131.368C262.206 121.378 253.286 108.712 253.286 96.5811C253.286 84.4504 263.633 70.1789 278.261 70.1789H280.224C219.748 14.6988 125.735 18.8018 70.2553 79.4554C64.9035 85.3423 59.9085 91.5861 55.6271 98.1866H65.2603C80.7805 98.1866 104.863 96.2243 104.863 96.2243C112.891 95.6891 113.783 107.463 105.755 108.533C105.755 108.533 97.7278 109.425 88.8081 109.961L142.861 271.049L175.329 173.468L152.137 109.961C144.11 109.425 136.617 108.533 136.617 108.533C128.59 107.998 129.482 95.8675 137.509 96.2243C137.509 96.2243 162.127 98.1866 176.577 98.1866C191.027 98.1866 216.181 96.2243 216.181 96.2243C224.208 95.6891 225.1 107.463 217.072 108.533C217.072 108.533 209.045 109.425 200.125 109.961L253.821 269.8L269.163 221.277C275.942 200.048 280.045 185.063 280.045 172.219L280.224 172.398ZM182.286 192.734L137.688 322.426C167.658 331.167 199.59 330.454 229.025 320.107L227.954 318.144L182.286 192.734ZM310.194 108.533C310.907 113.528 311.264 118.702 311.264 123.875C311.264 139.038 308.41 155.985 300.025 177.036L254.535 308.333C324.108 267.838 348.905 179.176 310.194 108.533Z"
                  className={`${cn(uspStyles.wordpressPath2)}`}
                  // fill="#787878"
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

export default UspWordpress;
