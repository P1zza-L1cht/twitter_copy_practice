import { ArrowLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import CommentModal from "../../components/CommentModal";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import Post from "../../components/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function PostPage({newsResults, randomUsersResults}) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [comment, setComment] = useState();

  useEffect(() =>
    onSnapshot(doc(db, "posts", id),
    (snapshot) => setPost(snapshot))
  ,[id]);

  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen mx-auto '>
        {/* Sidebar */}
        <Sidebar/>

        {/* post */}
        <div className="xl:ml-[370px] border-l border-r border-grey-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-grey-200">
            <div className="hoverEffect" onClick={() => router.push("/")}>
              <ArrowLeftIcon className="h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
              Tweet
            </h2>
          </div>

          <Post id={id} post={post} />
        </div>

        {/* widgets */}
        <Widgets newsResults={newsResults} randomUsersResults={randomUsersResults}/>

        {/* modal */}
        <CommentModal />
      </main>

    </div>
  )
}


//https://newsapi.org/v2/top-headlines?country=jp&apiKey=5c0e27f4e34740f9a7ee447b4f1bcf29


export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://newsapi.org/v2/top-headlines?country=jp&apiKey=5c0e27f4e34740f9a7ee447b4f1bcf29"
  ).then((res) => res.json());

  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return{
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}