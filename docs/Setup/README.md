# How I set up everything


```sh
npx create-next-app jui --use-yarn
npx tailwindcss init -p
npx storybook@latest init
npm install -D tailwindcss/typography
npm i remark-prism
npm i --dev @storybook/addon-styling postcss autoprefixer postcss-loader
npm install classnames
npm install -D tailwindcss autoprefixer postcss
node -v > .nvmrc
npm install --save-dev sass
yarn add tailwindcss --dev
yarn add @tailwindcss/forms
yarn add cloudinary
yarn add formidable
yarn add js-cookie
yarn add remark
yarn add remark-html
yarn add swr
yarn add autoprefixer
yarn add postcss --dev
```


Runs
```
npm run storybook
npm run dev
```