import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../components/UserContext";
import {Link} from 'react-router-dom';

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, [id]);

  if (!postInfo) return '';

  return (
    <div className="object-cover w-full text-center mb-4 text-sm font-bold">
      <h1 className="text-center, mx-2 my-1 font-bold text-2xl">{postInfo.title}</h1>
      <time className="text-center block text-lg text-[#aaa]">{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="text-center mb-4 text-sm font-bold">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="text-center mb-4">
          <Link className="bg-[#333] rounded-lg inline-flex items-center gap-2 color-[#fff] px-4 py-8" to={`/edit/${postInfo._id}`}>
            <svg className="w-6 h-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit this post
          </Link>
        </div>
      )}
      <div className="image">
        <img className="object-cover w-full" src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
      </div>
      <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}