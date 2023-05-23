import Layout from '../components/Layout';
import Button from '../components/Buttons/Button';
import Title from '../components/Texts/Title';

export default function Home({ locale }) {
  console.log('locale in Home');
  console.log(locale);
  return (
    <Layout>
      <Title text="This is Home" />
      {/* <h1 className='font-bold text-5xl'>This is Home</h1> */}
      {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          {post.attributes.title}
          </span>
      </h1> */}
      <Button
        primary = {true}
        size = "medium"
        label="Yo!"
      />
    </Layout>
  )
}
