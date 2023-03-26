import React from 'react';
import Link from 'next/link';

export default function Nav({ posts }:{posts:string[]}) {
  return (
    <>
      <style jsx>
        {`
          div{
            width: fit-content;
            max-width: 767px;
            background-color: white;
            border: 2px solid black;
            border-radius: 1.2rem;
            margin: 1rem auto;
            padding: 1.5rem;
            overflow: hidden;
            text-align: center;
            text-overflow:ellipsis;
            white-space:nowrap;
            box-sizing: border-box;
            font-weight: bold;
          }
          @media (max-width:767px){
            div{
              width: 90%;
            }
          }
        `}
      </style>
      {
        posts.map((post) => (
          <div key={post}>
            <Link href={`/posts/${post.split('.')[0]}`}>{post.split('.')[0]}</Link>
          </div>
        ))
      }
    </>
  );
}
