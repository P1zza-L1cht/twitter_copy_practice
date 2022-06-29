import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';


export default function Home({newsResults}) {
  return (
    <div>
      <Head>
        <title>twitter clone practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen mx-auto '>
        {/* Sidebar */}
        <Sidebar/>

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets newsResults={newsResults} />

        {/* modal */}
      </main>

    </div>
  )
}


//https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json
//5c0e27f4e34740f9a7ee447b4f1bcf29
//https://newsapi.org/v2/top-headlines?country=jp&apiKey=5c0e27f4e34740f9a7ee447b4f1bcf29


export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://newsapi.org/v2/top-headlines?country=jp&apiKey=5c0e27f4e34740f9a7ee447b4f1bcf29"
  ).then((res) => res.json());
  return{
    props:{
      newsResults,
    },
  };
}