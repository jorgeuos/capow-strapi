import Link from 'next/link';
import { useState } from 'react';
import { PluginNavigationNavigation } from '../../types/schemas';
import { fetcher } from '../../lib/api';
import { getMainNav } from '../../lib/navigation';
import { useRouter } from "next/router";
import LangSwitcher from './lang-switcher';

function getRoutes(locale: string = 'en') {
  const mainNavEn = [
    {
      order: 1,
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      order: 2,
      id: 2,
      name: 'About',
      url: '/about'
    },
    {
      order: 3,
      id: 3,
      name: 'Blog',
      url: '/blog'
    },
    {
      order: 4,
      id: 4,
      name: 'Tech',
      url: '/techs'
    },
    {
      order: 5,
      id: 9,
      name: 'Contact',
      url: '/contact'
    }
  ];
  const mainNavSv = [
    {
      order: 1,
      id: 5,
      name: 'Hem',
      url: '/'
    },
    {
      order: 2,
      id: 6,
      name: 'Om oss',
      url: '/om-oss'
    },
    {
      order: 3,
      id: 7,
      name: 'Blogg',
      url: '/blogg'
    },
    {
      order: 4,
      id: 8,
      name: 'Tech',
      url: '/techs'
    },
    {
      order: 5,
      id: 10,
      name: 'Kontakt',
      url: '/kontakt'
    }
  ];
  const mainNav = locale === 'en' ? mainNavEn : mainNavSv;
  return mainNav;
}

const Nav = () => {
  const { locale } = useRouter();
  const mainNav = getRoutes(locale);


  return (
    <>
      <nav
        className='
            flex flex-wrap
            items-center
            justify-between
            w-full
            py-4
            px-4
            text-lg text-gray-700
            bg-white
            fixed z-50
            shadow-lg shadow-indigo-500/40
          '
      >
        <div>
          <Link href='/' passHref>
            {/* eslint-disable @next/next/no-img-element */}
            {/* <img
              className='m-3'
              src='/Jorgeuos-logo-black.png'
              width={200}
              height={50}
              alt='Jorgeuos Logo'
            /> */}
            <svg width="200" height="50" viewBox="0 0 256 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.5966 74.3567C89.5966 80.3331 88.7021 85.5521 86.913 90.014C85.1646 94.4348 82.4403 98.1189 78.7401 101.066C75.0807 104.013 70.425 106.224 64.7731 107.697C59.1618 109.13 52.4934 109.846 44.7678 109.846C37.0422 109.846 30.3535 109.13 24.7016 107.697C19.0904 106.224 14.455 104.013 10.7955 101.066C7.13602 98.1189 4.41173 94.4348 2.62264 90.014C0.874213 85.5521 0 80.3331 0 74.3567C0 68.3803 0.874213 63.1817 2.62264 58.7608C4.41173 54.299 7.13602 50.5945 10.7955 47.6472C14.455 44.7 23.4208 40.7703 23.4208 40.7703C23.4208 40.7703 25.5032 40.8949 26.0129 41.8755C26.534 42.878 25.3725 44.7 25.3725 44.7C25.3725 44.7 18.2365 47.5654 14.9429 50.1033C11.6901 52.6002 9.25039 55.8545 7.62395 59.866C5.99751 63.8366 5.18429 68.6669 5.18429 74.3567C5.18429 80.0874 5.99751 84.9381 7.62395 88.9087C9.25039 92.8793 11.6901 96.1336 14.9429 98.6715C18.2365 101.168 22.3636 102.99 27.3242 104.136C32.2849 105.241 38.0994 105.794 44.7678 105.794C51.4362 105.794 57.2508 105.241 62.2114 104.136C67.1721 102.99 71.2992 101.168 74.5927 98.6715C77.8863 96.1336 80.3463 92.8793 81.9727 88.9087C83.5991 84.9381 84.4124 80.0874 84.4124 74.3567C84.4124 68.6669 83.5991 63.8366 81.9727 59.866C80.3463 55.8954 71.8285 46.5225 63.4313 40.7703C55.034 35.0181 39.7415 29.9637 39.7415 29.9637C63.1781 15.7699 89.5966 0 89.5966 0V58.7608V74.3567Z" fill="black"/>
              <path d="M104.049 102.402C101.944 102.402 100.168 102.194 98.7195 101.78C97.2709 101.35 96.0968 100.744 95.1972 99.9609C94.3128 99.1781 93.6724 98.2263 93.276 97.1058C92.8795 95.9852 92.6813 94.7188 92.6813 93.3066C92.6813 91.6795 92.9024 90.2903 93.3446 89.139C93.802 87.9724 94.4958 87.013 95.4259 86.2608C96.3713 85.5087 97.553 84.956 98.9711 84.603C100.404 84.2499 102.097 84.0734 104.049 84.0734C106 84.0734 107.685 84.2499 109.103 84.603C110.537 84.956 111.718 85.5087 112.648 86.2608C113.594 87.013 114.288 87.9724 114.73 89.139C115.187 90.2903 115.416 91.6795 115.416 93.3066C115.416 94.7188 115.218 95.9852 114.821 97.1058C114.425 98.2263 113.777 99.1781 112.877 99.9609C111.993 100.744 110.826 101.35 109.378 101.78C107.929 102.194 106.153 102.402 104.049 102.402ZM104.049 101.043C105.436 101.043 106.633 100.943 107.639 100.744C108.646 100.529 109.5 100.237 110.201 99.8688C110.918 99.5004 111.49 99.0706 111.917 98.5794C112.359 98.0882 112.702 97.5586 112.946 96.9907C113.205 96.4073 113.373 95.8087 113.449 95.1947C113.54 94.5653 113.586 93.936 113.586 93.3066C113.586 91.879 113.403 90.6663 113.037 89.6686C112.671 88.6708 112.099 87.8572 111.322 87.2279C110.544 86.5985 109.553 86.1457 108.349 85.8694C107.144 85.5777 105.711 85.4319 104.049 85.4319C102.371 85.4319 100.93 85.5777 99.7258 85.8694C98.5365 86.1457 97.553 86.5985 96.7754 87.2279C95.9977 87.8572 95.4259 88.6708 95.06 89.6686C94.694 90.6663 94.511 91.879 94.511 93.3066C94.511 93.936 94.5492 94.5653 94.6254 95.1947C94.7169 95.8087 94.8846 96.4073 95.1286 96.9907C95.3878 97.5586 95.7309 98.0882 96.1578 98.5794C96.6 99.0706 97.1718 99.5004 97.8732 99.8688C98.5899 100.237 99.4514 100.529 100.458 100.744C101.464 100.943 102.661 101.043 104.049 101.043Z" fill="black"/>
              <path d="M132.995 84.626C133.163 84.6721 133.285 84.7642 133.361 84.9023C133.437 85.0251 133.476 85.1633 133.476 85.3168C133.476 85.5163 133.407 85.7005 133.27 85.8694C133.148 86.0382 132.957 86.1227 132.698 86.1227C132.622 86.1227 132.576 86.1227 132.561 86.1227C132.545 86.1073 132.5 86.092 132.423 86.0766C131.829 85.9078 131.257 85.7773 130.708 85.6852C130.174 85.5931 129.587 85.547 128.947 85.547C128.047 85.547 127.186 85.6391 126.362 85.8233C125.554 85.9922 124.815 86.2608 124.144 86.6292C123.488 86.9823 122.916 87.4428 122.428 88.0107C121.94 88.5634 121.575 89.2157 121.331 89.9679V100.56C121.331 100.959 121.277 101.327 121.17 101.665C121.064 102.003 120.82 102.171 120.439 102.171C120.225 102.171 120.05 102.125 119.913 102.033C119.791 101.941 119.699 101.818 119.638 101.665C119.577 101.511 119.539 101.342 119.524 101.158C119.508 100.959 119.501 100.759 119.501 100.56V85.8233C119.501 85.4703 119.562 85.1709 119.684 84.9253C119.806 84.6644 120.088 84.5339 120.53 84.5339C120.866 84.5339 121.079 84.6567 121.17 84.9023C121.277 85.1479 121.331 85.4549 121.331 85.8233V88.4943C121.575 87.5579 121.994 86.7981 122.589 86.2148C123.198 85.6315 123.869 85.1863 124.601 84.8793C125.348 84.5569 126.111 84.342 126.888 84.2346C127.666 84.1271 128.352 84.0734 128.947 84.0734C129.526 84.0734 130.022 84.0964 130.434 84.1425C130.861 84.1732 131.226 84.2192 131.531 84.2806C131.836 84.3267 132.103 84.3804 132.332 84.4418C132.561 84.5032 132.782 84.5646 132.995 84.626Z" fill="black"/>
              <path d="M146.137 85.6622C144.323 85.6622 142.768 85.8003 141.472 86.0766C140.191 86.3376 139.139 86.775 138.315 87.3891C137.492 87.9877 136.89 88.7783 136.508 89.7607C136.127 90.7431 135.937 91.9404 135.937 93.3526C135.937 94.7649 136.097 95.9622 136.417 96.9446C136.737 97.927 137.255 98.7252 137.972 99.3392C138.704 99.9379 139.657 100.375 140.831 100.652C142.02 100.913 143.477 101.043 145.2 101.043C145.993 101.043 146.785 101.005 147.578 100.928C148.386 100.836 149.179 100.698 149.957 100.514C150.735 100.314 151.482 100.068 152.198 99.7767C152.915 99.4851 153.586 99.132 154.211 98.7176V90.1061C154.104 89.6763 153.906 89.2081 153.616 88.7015C153.342 88.1796 152.9 87.6961 152.29 87.2509C151.695 86.7904 150.902 86.4143 149.911 86.1227C148.92 85.8157 147.662 85.6622 146.137 85.6622ZM145.543 108.388C146.793 108.388 147.944 108.273 148.996 108.043C150.064 107.828 150.979 107.49 151.741 107.03C152.519 106.569 153.121 105.978 153.548 105.257C153.99 104.551 154.211 103.699 154.211 102.701V99.9609C153.555 100.421 152.854 100.813 152.107 101.135C151.36 101.442 150.59 101.688 149.797 101.872C149.019 102.056 148.226 102.187 147.418 102.263C146.625 102.356 145.855 102.402 145.108 102.402C143.37 102.402 141.822 102.271 140.465 102.01C139.108 101.734 137.957 101.258 137.012 100.583C136.066 99.9072 135.342 98.9862 134.839 97.8196C134.351 96.6376 134.107 95.1486 134.107 93.3526C134.107 91.5567 134.389 90.0677 134.953 88.8857C135.517 87.6884 136.318 86.7367 137.355 86.0306C138.391 85.3091 139.634 84.8025 141.083 84.5109C142.546 84.2192 144.17 84.0734 145.954 84.0734C147.525 84.0734 148.813 84.2269 149.82 84.5339C150.841 84.8256 151.657 85.194 152.267 85.6391C152.892 86.0689 153.342 86.5448 153.616 87.0667C153.906 87.5886 154.104 88.0645 154.211 88.4943C154.211 88.218 154.196 87.9033 154.165 87.5502C154.15 87.1818 154.143 86.8211 154.143 86.468C154.143 85.9461 154.188 85.4933 154.28 85.1096C154.386 84.7258 154.608 84.5339 154.943 84.5339C155.172 84.5339 155.355 84.5876 155.492 84.6951C155.629 84.7872 155.736 84.91 155.812 85.0635C155.904 85.217 155.965 85.3935 155.995 85.5931C156.026 85.7773 156.041 85.9615 156.041 86.1457V102.701C156.041 105.126 155.126 106.945 153.296 108.158C151.482 109.386 148.897 110 145.543 110C144.445 110 143.461 109.946 142.592 109.839C141.738 109.731 140.976 109.586 140.305 109.401C139.649 109.232 139.062 109.033 138.544 108.803C138.025 108.572 137.56 108.342 137.149 108.112C136.981 108.066 136.783 107.943 136.554 107.744C136.325 107.559 136.211 107.337 136.211 107.076C136.211 106.784 136.31 106.577 136.508 106.454C136.722 106.331 136.874 106.27 136.966 106.27C137.103 106.27 137.263 106.316 137.446 106.408C137.629 106.515 137.835 106.631 138.064 106.753C138.308 106.892 138.574 107.03 138.864 107.168C139.154 107.321 139.474 107.444 139.825 107.536C140.465 107.751 141.243 107.943 142.158 108.112C143.073 108.296 144.201 108.388 145.543 108.388Z" fill="black"/>
              <path d="M171.081 85.4319C169.663 85.4319 168.405 85.5547 167.308 85.8003C166.21 86.0459 165.272 86.445 164.494 86.9976C163.732 87.5349 163.137 88.2333 162.71 89.0929C162.283 89.9526 162.039 91.0041 161.978 92.2474H179.224V91.0041C179.224 90.2365 179.079 89.5151 178.789 88.8397C178.515 88.1643 178.057 87.5733 177.417 87.0667C176.777 86.5602 175.938 86.161 174.901 85.8694C173.864 85.5777 172.591 85.4319 171.081 85.4319ZM169.892 101.043C171.341 101.043 172.606 100.951 173.689 100.767C174.771 100.583 175.702 100.36 176.479 100.099C177.257 99.8381 177.89 99.5695 178.378 99.2932C178.881 99.0169 179.27 98.7866 179.544 98.6024C179.635 98.5717 179.696 98.5564 179.727 98.5564C179.895 98.5564 180.047 98.6408 180.184 98.8097C180.337 98.9632 180.413 99.132 180.413 99.3162C180.413 99.4851 180.337 99.6232 180.184 99.7307C180.047 99.8688 179.75 100.084 179.292 100.375C178.85 100.667 178.21 100.966 177.371 101.273C176.533 101.565 175.496 101.826 174.261 102.056C173.026 102.286 171.562 102.402 169.869 102.402C168.1 102.402 166.599 102.179 165.363 101.734C164.128 101.289 163.122 100.667 162.344 99.8688C161.567 99.0706 161.003 98.1112 160.652 96.9907C160.301 95.8701 160.126 94.6421 160.126 93.3066C160.126 91.526 160.408 90.0447 160.972 88.8627C161.536 87.6807 162.306 86.7367 163.282 86.0306C164.273 85.3091 165.432 84.8025 166.759 84.5109C168.1 84.2192 169.541 84.0734 171.081 84.0734C174.253 84.0734 176.624 84.6874 178.195 85.9154C179.78 87.1281 180.573 88.8704 180.573 91.1422C180.573 91.3571 180.558 91.595 180.527 91.856C180.497 92.1169 180.451 92.3702 180.39 92.6158C180.345 92.8461 180.284 93.0456 180.207 93.2145C180.146 93.368 180.085 93.4447 180.024 93.4447H173.3L161.956 93.2145C161.986 94.6421 162.169 95.8547 162.504 96.8525C162.855 97.8349 163.358 98.6408 164.014 99.2702C164.685 99.8842 165.508 100.337 166.484 100.629C167.46 100.905 168.596 101.043 169.892 101.043Z" fill="black"/>
              <path d="M202.315 98.9248C201.995 99.3085 201.583 99.7076 201.08 100.122C200.592 100.521 199.982 100.89 199.25 101.227C198.534 101.565 197.687 101.849 196.712 102.079C195.736 102.294 194.607 102.402 193.327 102.402C191.695 102.402 190.3 102.248 189.141 101.941C187.997 101.619 187.06 101.128 186.328 100.467C185.596 99.7921 185.062 98.9401 184.727 97.9117C184.391 96.8679 184.224 95.6168 184.224 94.1585V86.1917C184.224 85.9922 184.231 85.7926 184.246 85.5931C184.277 85.3935 184.323 85.217 184.384 85.0635C184.445 84.91 184.536 84.7872 184.658 84.6951C184.78 84.5876 184.94 84.5339 185.138 84.5339C185.367 84.5339 185.543 84.5876 185.665 84.6951C185.786 84.7872 185.87 84.91 185.916 85.0635C185.977 85.217 186.015 85.3935 186.03 85.5931C186.046 85.7926 186.053 85.9922 186.053 86.1917V94.1585C186.053 95.448 186.16 96.5301 186.374 97.4051C186.587 98.2801 186.961 98.9862 187.494 99.5234C188.043 100.061 188.783 100.452 189.713 100.698C190.658 100.928 191.863 101.043 193.327 101.043C194.394 101.043 195.377 100.951 196.277 100.767C197.192 100.583 198.023 100.352 198.77 100.076C199.517 99.7844 200.188 99.462 200.783 99.109C201.377 98.7559 201.896 98.4106 202.338 98.0728V86.1917C202.338 85.9922 202.346 85.7926 202.361 85.5931C202.376 85.3935 202.407 85.217 202.452 85.0635C202.513 84.91 202.597 84.7872 202.704 84.6951C202.826 84.5876 202.986 84.5339 203.184 84.5339C203.413 84.5339 203.588 84.5876 203.71 84.6951C203.848 84.7872 203.947 84.91 204.008 85.0635C204.084 85.217 204.13 85.3935 204.145 85.5931C204.16 85.7926 204.168 85.9922 204.168 86.1917V100.56C204.168 100.759 204.153 100.959 204.122 101.158C204.107 101.342 204.069 101.511 204.008 101.665C203.947 101.818 203.855 101.941 203.733 102.033C203.627 102.125 203.482 102.171 203.299 102.171C202.872 102.171 202.597 102.033 202.475 101.757C202.369 101.465 202.315 101.135 202.315 100.767V98.9248Z" fill="black"/>
              <path d="M219.643 102.402C217.539 102.402 215.762 102.194 214.314 101.78C212.865 101.35 211.691 100.744 210.792 99.9609C209.907 99.1781 209.267 98.2263 208.87 97.1058C208.474 95.9852 208.276 94.7188 208.276 93.3066C208.276 91.6795 208.497 90.2903 208.939 89.139C209.396 87.9724 210.09 87.013 211.02 86.2608C211.966 85.5087 213.147 84.956 214.565 84.603C215.999 84.2499 217.691 84.0734 219.643 84.0734C221.595 84.0734 223.28 84.2499 224.698 84.603C226.131 84.956 227.313 85.5087 228.243 86.2608C229.188 87.013 229.882 87.9724 230.324 89.139C230.782 90.2903 231.01 91.6795 231.01 93.3066C231.01 94.7188 230.812 95.9852 230.416 97.1058C230.019 98.2263 229.371 99.1781 228.471 99.9609C227.587 100.744 226.421 101.35 224.972 101.78C223.524 102.194 221.747 102.402 219.643 102.402ZM219.643 101.043C221.03 101.043 222.227 100.943 223.234 100.744C224.24 100.529 225.094 100.237 225.795 99.8688C226.512 99.5004 227.084 99.0706 227.511 98.5794C227.953 98.0882 228.296 97.5586 228.54 96.9907C228.799 96.4073 228.967 95.8087 229.043 95.1947C229.135 94.5653 229.18 93.936 229.18 93.3066C229.18 91.879 228.998 90.6663 228.632 89.6686C228.266 88.6708 227.694 87.8572 226.916 87.2279C226.139 86.5985 225.147 86.1457 223.943 85.8694C222.738 85.5777 221.305 85.4319 219.643 85.4319C217.966 85.4319 216.525 85.5777 215.32 85.8694C214.131 86.1457 213.147 86.5985 212.37 87.2279C211.592 87.8572 211.02 88.6708 210.654 89.6686C210.288 90.6663 210.105 91.879 210.105 93.3066C210.105 93.936 210.143 94.5653 210.22 95.1947C210.311 95.8087 210.479 96.4073 210.723 96.9907C210.982 97.5586 211.325 98.0882 211.752 98.5794C212.194 99.0706 212.766 99.5004 213.468 99.8688C214.184 100.237 215.046 100.529 216.052 100.744C217.058 100.943 218.255 101.043 219.643 101.043Z" fill="black"/>
              <path d="M254.17 97.3591C254.17 96.5455 253.881 95.9161 253.301 95.471C252.737 95.0258 251.982 94.7035 251.037 94.5039C250.107 94.289 249.039 94.1585 247.835 94.1125C246.645 94.0511 245.426 94.005 244.175 93.9743C242.94 93.9283 241.72 93.8592 240.516 93.7671C239.326 93.6596 238.259 93.4524 237.314 93.1454C236.384 92.8231 235.629 92.3702 235.049 91.7869C234.485 91.1883 234.203 90.3747 234.203 89.3462C234.203 88.287 234.485 87.4198 235.049 86.7443C235.629 86.0689 236.384 85.5317 237.314 85.1326C238.244 84.7335 239.296 84.4572 240.47 84.3037C241.644 84.1502 242.841 84.0734 244.061 84.0734C246.058 84.0734 247.919 84.2423 249.642 84.58C251.365 84.9023 252.966 85.4549 254.445 86.2378C254.597 86.3145 254.696 86.4143 254.742 86.5371C254.803 86.6446 254.841 86.7597 254.856 86.8825C254.856 87.0821 254.795 87.2586 254.673 87.4121C254.551 87.5656 254.414 87.6423 254.262 87.6423C254.17 87.6423 254.109 87.627 254.079 87.5963C252.783 86.9362 251.311 86.4143 249.665 86.0306C248.033 85.6315 246.196 85.4319 244.152 85.4319C243.116 85.4319 242.109 85.501 241.133 85.6391C240.157 85.7619 239.288 85.9768 238.526 86.2838C237.779 86.5755 237.176 86.9746 236.719 87.4812C236.262 87.9724 236.033 88.5941 236.033 89.3462C236.033 90.1137 236.315 90.7047 236.879 91.1192C237.459 91.5336 238.213 91.8406 239.143 92.0402C240.089 92.2244 241.156 92.3395 242.346 92.3856C243.55 92.4316 244.77 92.4777 246.005 92.5237C247.255 92.5698 248.475 92.6542 249.665 92.777C250.869 92.8845 251.936 93.107 252.867 93.4447C253.812 93.7671 254.567 94.243 255.131 94.8723C255.71 95.4863 256 96.3152 256 97.3591C256 98.2954 255.71 99.086 255.131 99.7307C254.551 100.375 253.781 100.897 252.821 101.296C251.86 101.68 250.747 101.964 249.482 102.148C248.231 102.317 246.935 102.402 245.593 102.402C244.77 102.402 243.878 102.379 242.917 102.333C241.972 102.302 241.019 102.217 240.058 102.079C239.113 101.926 238.198 101.703 237.314 101.412C236.445 101.105 235.682 100.69 235.027 100.168C234.813 99.9993 234.706 99.7998 234.706 99.5695C234.706 99.3699 234.76 99.2011 234.866 99.0629C234.988 98.9094 235.133 98.8327 235.301 98.8327C235.423 98.8327 235.514 98.8634 235.575 98.9248C236.216 99.3699 236.902 99.7307 237.634 100.007C238.381 100.283 239.166 100.498 239.99 100.652C240.813 100.805 241.675 100.913 242.574 100.974C243.474 101.02 244.404 101.043 245.365 101.043C246.508 101.043 247.606 100.989 248.658 100.882C249.726 100.759 250.663 100.56 251.471 100.283C252.295 99.9916 252.95 99.6155 253.438 99.155C253.926 98.6792 254.17 98.0805 254.17 97.3591Z" fill="black"/>
              </svg>
          </Link>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          id='menu-button'
          className='h-6 w-6 cursor-pointer md:hidden block'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>

        <div
          className='hidden w-full md:flex md:items-center md:w-auto'
          id='menu'
        >
          <ul
            className='
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between
                md:pt-0 space-x-2'
          >
            {mainNav && mainNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className='md:p-2 py-2 block hover:text-purple-400'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <LangSwitcher></LangSwitcher>
        </div>
      </nav>
      <div className='h-20'></div>
    </>
  );
};

export default Nav;
