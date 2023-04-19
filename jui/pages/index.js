import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className='font-bold text-5xl'>This is Home</h1>
      <button
        className="text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700"
      >Yo!</button>
    </Layout>
  )
}
