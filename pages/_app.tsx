import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx>
        {`
          .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            margin:0;
            padding:0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .home-icon{
            position: absolute;
            top: 30px;
            left: 30px;
            animation: fadein 2s;
          }
          .container video {
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              display: block;
              margin:0;
              padding:0; 
              height: 100%;
              width: 100%;
              object-fit: cover; // background-size: cover 와 비슷함. (HTML 요소 or 비디오와 작동)
          }
        `}
      </style>
      <div className="container">
        <Link href="/">
          <div className="home-icon">
            <Image src="/kata.webp" alt="katarina" width="100" height="100" />
          </div>
        </Link>
        <video autoPlay muted loop>
          <source src="/leesin.webm" type="video/webm" />
        </video>
        <Component {...pageProps} />
      </div>
    </>
  );
}
