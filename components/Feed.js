import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "my name",
      username: "licht",
      userImg: "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png",
      img: "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "nice view",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "my name",
      username: "licht",
      userImg: "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png",
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "good",
      timestamp: "2 days ago",
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-grey-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-grey-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) =>(
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
