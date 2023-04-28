import React from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Titlemap } from '@/consts';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx>
        {`
          main {
            animation: fadein 2s;
            max-height: 90%;
          }
          .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            margin:0;
            padding:0;
            display: flex;
            flex-direction: column;
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
      <Head>
        <title>{Titlemap[Number(router.pathname.split('/').pop())] || 'Next-Codekata'}</title>
        <meta name="description" content="Next-codkata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Link href="/">
          <div className="home-icon">
            <Image src="/kata.webp" alt="katarina" width="100" height="100" />
          </div>
        </Link>
        <video autoPlay muted loop>
          <source src="/leesin.webm" type="video/webm" />
        </video>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
