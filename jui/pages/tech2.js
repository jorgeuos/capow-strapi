import { useState } from 'react';
import Layout from '../components/Layout';
import Page from '../components/Pages/Page';
import Title from '../components/Texts/Title';
import { fetcher } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

const Tech = ({techs}) => {
  return (
    <>
      <Layout>
          <Title text="Techno">Technologies</Title>
      </Layout>
    </>
  );
};
export default Tech;

export async function getStaticProps() {
    const res = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/techs`
    );
    return {
        props: {
            techs: res,
        },
    };
}