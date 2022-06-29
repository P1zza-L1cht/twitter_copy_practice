import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b border-grey-200 p-3 space-x-3">
      <img
        src="https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-grey-200">
        <div className="">
          <textarea className="w-full border-none focus:ring-0 text-lg placeholder-grey-700 tracking-wide min-h-[50px] text-grey-700 " rows="2" placeholder="What's happens?" ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100 " />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100 " />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
        </div>
      </div>
    </div>
  );
}