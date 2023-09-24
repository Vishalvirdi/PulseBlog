import React from 'react'
import { Link } from "react-router-dom";
import {formatISO9075} from "date-fns";
const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
  return (
    <div className="grid grid-cols-[.9fr,1.1fr] gap-10 mb-10 bg-white p-4 rounded-xl shadow-lg">
    <div className="m-0">
      <Link to={`/post/${_id}`}>
      <img
        className="w-full h-full object-fill rounded-lg"
        src={'http://localhost:4000/'+cover}
        alt=""
      />
      </Link>
    </div>
    <div className="m-0">
      <Link to={`/post/${_id}`}>
      <h2 className="m-0 text-2xl  font-bold">
        {title}
      </h2>
      </Link>
      <p className=" m-0 text-xs font-bold my-1">
        <Link className="text-black">{author.username}</Link>
        <time className="text-slate-500 pl-4">{formatISO9075(new Date(createdAt))}</time>
      </p>
      <p className="text-md leading-6 font-light mt-3">
        {summary + cover}
      </p>
    </div>
  </div>
  )
}

export default Post