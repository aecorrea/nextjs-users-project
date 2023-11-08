"use client";

import Link from "next/link";
//React client component
import React from "react";
const PostCard = ({ el }) => {
  return (
    <div className="bg-gray-950 p-10">
      <Link href={`/posts/${el.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {el.id}. {el.title}
        </h3>
      </Link>
      <p className="text-slate-300">{el.body}</p>
      <button
        onClick={() => {
          alert("Hiciste Click!");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PostCard;
