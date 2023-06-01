import Head from 'next/head';
import Matomo from '../Scripts/Matomo';
import Meta from '../Meta/Meta';

const CapowHead = ({ ogSettings, children }) => {
  return (
    <>
      <Head>
        {children}
        <Meta ogSettings={ogSettings}></Meta>
      </Head>
      <Matomo />
    </>
  );
};

export default CapowHead;
