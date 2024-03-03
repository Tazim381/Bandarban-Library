import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap ml-auto mr-auto">
        {books?.map((data) => (
          <div className="p-3 m-3 border-2 rounded-md hover:bg-slate-100 ">
            <div className="w-36 h-64">
              <img className="w-full" src={data.image} alt="Image 1" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div class="font-semibold text-lg max-w-[200px] truncate">
                {data.bookName}
              </div>
              <div className="text-slate-400">{data.authorName}</div>
              <Link
                to={`/bookDetails/${data._id}`}
                className="bg-sky-600 text-white px-4 py-1 rounded-sm hover:bg-sky-500 cursor-pointer"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
