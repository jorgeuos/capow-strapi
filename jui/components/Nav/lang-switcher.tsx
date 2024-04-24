import React from "react";
import cn from 'classnames';
import styles from './lang-switcher.module.scss';
// import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function LangSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const language = router.locale;
  const nextLocale = router.locale === 'en' ? 'sv' : 'en';
    return (
      <div className={cn(styles["j-lang-wrapper"])}>
        <div
          className={`
          ${cn(styles["j-lang-switcher"])}
          
          `}
          onClick={() => {
            router.push({ pathname, query }, asPath, { locale: nextLocale })
          }}>
              <Image
              src={ language === 'en' ? '/images/globe-sv.svg': '/images/globe-en.svg' }
              className={cn(styles["J-lang"])}
              width={24}
              height={24}
              alt='Language Switcher - Globe Icon'
              />
          </div>
      </div>
    );
}
