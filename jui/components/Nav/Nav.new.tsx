import Link from 'next/link';
import {useState} from 'react';
import {PluginNavigationNavigation} from '../../types/schemas';
import {fetcher} from '../../lib/api';
import {getMainNav} from '../../lib/navigation';
import {useRouter} from 'next/router';
import LangSwitcher from './lang-switcher';
import cn from 'classnames';
import styles from './lang-switcher.module.scss';

function getRoutes(locale: string = 'en') {
  const mainNavEn = [
    {
      order: 1,
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      order: 2,
      id: 2,
      name: 'About',
      url: '/about',
    },
    {
      order: 3,
      id: 3,
      name: 'Blog',
      url: '/blog',
    },
    {
      order: 4,
      id: 4,
      name: 'Tech',
      url: '/techs',
    },
    {
      order: 5,
      id: 9,
      name: 'Contact',
      url: '/contact',
    },
  ];
  const mainNavSv = [
    {
      order: 1,
      id: 5,
      name: 'Hem',
      url: '/',
    },
    {
      order: 2,
      id: 6,
      name: 'Om oss',
      url: '/om-oss',
    },
    {
      order: 3,
      id: 7,
      name: 'Blogg',
      url: '/blogg',
    },
    {
      order: 4,
      id: 8,
      name: 'Tech',
      url: '/techs',
    },
    {
      order: 5,
      id: 10,
      name: 'Kontakt',
      url: '/kontakt',
    },
  ];
  const mainNav = locale === 'en' ? mainNavEn : mainNavSv;
  return mainNav;
}

const Nav = () => {
  const {locale} = useRouter();
  const mainNav = getRoutes(locale);

  return (
    <>
      <nav
        className={`absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent ${cn(
          styles['nav-effects'],
        )}`}>
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
          <div
            className={`
                   relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4
                      ${cn(styles['nav-effects'])}`}>
            <div
              className={`
                       relative z-20 flex w-full justify-between md:px-0 lg:w-max
                      ${cn(styles['nav-effects'])}`}>
              <a
                href='/#home'
                aria-label='logo'
                className={`
                           flex items-center space-x-2
                          ${cn(styles['nav-effects'])}`}>
                <div
                  aria-hidden='true'
                  className='flex space-x-1 nav-effects'>
                  <div
                    className={`
                                      h-4 w-4 rounded-full bg-gray-900 dark:bg-white
                                      ${cn(styles['nav-effects'])}`}></div>
                  <div
                    className={`
                             h-6 w-2 bg-primary
                             ${cn(styles['nav-effects'])}`}></div>
                </div>
                <span
                  className={`
                                  text-2xl font-bold text-gray-900 dark:text-white
                              ${cn(styles['nav-effects'])}`}>
                  Astrolus
                </span>
              </a>

              <div
                className={`
                              relative flex max-h-10 items-center lg:hidden
                              ${cn(styles['nav-effects'])}`}>
                <button
                  aria-label='humburger'
                  id='hamburger'
                  className='relative -mr-6 p-6 nav-effects'>
                  <div
                    aria-hidden='true'
                    id='line'
                    className={`
                                      m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300
                                      ${cn(styles['nav-effects'])}`}></div>
                  <div
                    aria-hidden='true'
                    id='line2'
                    className={`
                                      m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 
                                      ${cn(styles['nav-effects'])}`}></div>
                </button>
              </div>
            </div>
            <div
              id='navLayer'
              aria-hidden='true'
              className={`
                          fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden
                          ${cn(styles['nav-effects'])}`}></div>
            <div
              id='navlinks'
              className={`
                          invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none
                          ${cn(styles['nav-effects'])}`}>
              <div className='w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0 nav-effects'>
                <ul
                  className={`
                              flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm
                              ${cn(styles['nav-effects'])}`}>
                  <li className={`${cn(styles['nav-effects'])}`}>
                    <a
                      href='/#features'
                      className='hover:text-primary block transition dark:hover:text-white md:px-4 nav-effects'>
                      <span className={`${cn(styles['nav-effects'])}`}>Features</span>
                    </a>
                  </li>
                  <li className={`${cn(styles['nav-effects'])}`}>
                    <a
                      href='/#solution'
                      className='hover:text-primary block transition dark:hover:text-white md:px-4 nav-effects'>
                      <span className={`${cn(styles['nav-effects'])}`}>Solution</span>
                    </a>
                  </li>
                  <li className={`${cn(styles['nav-effects'])}`}>
                    <a
                      href='/#reviews'
                      className='hover:text-primary block transition dark:hover:text-white md:px-4 nav-effects'>
                      <span className={`${cn(styles['nav-effects'])}`}>Reviews</span>
                    </a>
                  </li>
                  <li className={`${cn(styles['nav-effects'])}`}>
                    <a
                      href='https://tailus.gumroad.com/l/astls-premium'
                      target='_blank'
                      className={`
                                          flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4
                                          ${cn(styles['nav-effects'])}`}>
                      <span className={`${cn(styles['nav-effects'])}`}>Premium</span>
                      <span
                        className={`
                                              flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300
                                              ${cn(styles['nav-effects'])}`}>
                        {' '}
                        new
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='mt-12 lg:mt-0 nav-effects'>
                <a
                  href='/register'
                  className={`
                                  relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max
                                  ${cn(styles['nav-effects'])}`}>
                  <span
                    className={`
                                      relative text-sm font-semibold text-white
                                      ${cn(styles['nav-effects'])}`}>
                    {' '}
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
