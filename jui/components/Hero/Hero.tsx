import cn from 'classnames';
import heroStyles from './hero.module.scss';
import LookingGlass from './looking-glass';
import MouseMove from './mouse-move';
import Link from 'next/link';
import Image from 'next/image';

export type HeroType = {
  title: string;
  image: any;
  lookingGlass: boolean;
  marker: boolean;
};


export default function Hero({ title, description, image, lookingGlass, marker }) {
  const defaultImage = '/images/Jorgeuos-background-black.svg';
  // ./capow-strapi/jui/public/public/uploads/Jorgeuos_background_black_8e97123236.svg
  // If we wanna use webp and png fallback e.g.
  // const imageFallback = 'background-image: url(pics/img.webp), url(pics/img.png);';

  image = image && image.data.attributes.url;
  const imageStyle = image ? `backgroundImage: 'url("${image}")'` : `backgroundImage: 'url("${defaultImage}")'`;
  return (
    // items-center
    //  grid-flow-col
    <div
      className={`${cn(heroStyles.hero)}
       h-dvh 
       grid
       md:grid-rows-4
       md:grid-cols-4
       gap-4
       bg-top
       bg-cover
       bg-fixed
       px-6
       `}
      style={{ backgroundImage: `url("${image}")` }}
      // ${imageStyle}
      // bg-fixed
        //   stylish='background:url("../images/Sthlmish.jpg");'
          // style={{backgroundImage: 'url("../images/Sthlmish.jpg")'}}
      // style={{ backgroundImage: 'url("../images/Jorgeuos-background-black.svg")' }}
    >
      { lookingGlass && (
      <LookingGlass></LookingGlass>
    )}
      {marker && (
        <MouseMove></MouseMove>
      )}
      <section className={`
        row-start-2
        col-start-1
        col-span-2
        `}>
        <div
          className='
          row-span-2
          text-left
          max-w-2xl
          rounded-xl
          shadow-lg
          shadow-black/30
          bg-zinc-800/90
          text-white
          p-8
          '
        >
          <h1 className='text-4xl'>{title}</h1>
          <p>{description}</p>
          <Link
            href="#first-section"
            className="
          text-white
          bg-gradient-to-r
          from-purple-500
          via-purple-600
          to-purple-700
          hover:bg-gradient-to-br
          focus:ring-4
          focus:outline-none
          focus:ring-purple-300
          dark:focus:ring-purple-800
          font-medium
          rounded-full
          text-sm
          px-5
          py-2.5
          text-center me-2 mb-2"
          >Learn more</Link>
        </div>
      </section>
      {/* <div
        className='
        row-start-2
        col-start-3
        col-span-1
        '
      >
        <Image
          priority
          src='/images/Matomo-Master-Trainer-Badge.svg'
          id='Certified Matomo Master Trainer Badge'
          height={235}
          width={315}
          alt='Certified Matomo Master Trainer Badge'
        />
      </div> */}
    </div>
  );
}
