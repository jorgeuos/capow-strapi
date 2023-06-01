import cn from 'classnames';
import heroStyles from './hero.module.scss';
import LookingGlass from './looking-glass';
import MouseMove from './mouse-move';

export type HeroType = {
  title: string;
  image: any;
  lookingGlass: boolean;
  marker: boolean;
};


export default function Hero({ title, image, lookingGlass, marker }) {
  const defaultImage = '/images/Jorgeuos-background-black.svg';
  // ./capow-strapi/jui/public/public/uploads/Jorgeuos_background_black_8e97123236.svg
  // If we wanna use webp and png fallback e.g.
  // const imageFallback = 'background-image: url(pics/img.webp), url(pics/img.png);';
  image = image.data.attributes.url;
  const imageStyle = image ? `backgroundImage: 'url("${image}")'` : `backgroundImage: 'url("${defaultImage}")'`;
  return (
    <div
      className={`${cn(heroStyles.hero)} flex justify-center items-center place-items-end bg-top bg-cover bg-fixed px-6 `}
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
        <section className={
        `${heroStyles.heroHeading} text-center max-w-4xl rounded-xl shadow-lg shadow-black/50`}>
          <h1>{title}</h1>
        </section>
    </div>
  );
}
