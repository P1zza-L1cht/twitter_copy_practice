import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

export default function Widgets({newsResults}) {
  const [articleNum, setArticleNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-grey-500 " />
          <input
            className="absolute inset-0 rounded-full pl-11 border-grey-500 text-grey-700 focus:shadow-lg focus:bg-white bg-grey-100"
            type="text"
            placeholder="Search Twitter" />
        </div>
      </div>

      <div className="text-grey-700 space-y-3 bg-grey-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.articles.slice(0, articleNum).map((article) => (
              <News key={article.title} article={article} />
          ))}
        <button onClick={() => setArticleNum(articleNum + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
      </div>
    </div>
  );
}
