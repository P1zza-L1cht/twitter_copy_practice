import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'


export default function Home() {
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

        {/* modal */}
      </main>

    </div>
  )
}
