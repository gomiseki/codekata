/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import MDXLayout from '@/components/mdxViewer';
import ProgressBar from '@/components/progressBar';
import Content from '@/contents/progressbar.mdx';
import useScrollPercent from '@/hooks/useScrollPercent';
import NewProgressBar from '@/components/newProgressBar';

function DP({ refactor }:{refactor:boolean}) {
  const { scrollPer, domRef } = useScrollPercent<HTMLDivElement>();
  return (
    <div className="mdx-container" ref={domRef}>
      <ProgressBar refactored={refactor} per={scrollPer} style={{ position: 'sticky', top: '0', backgroundColor: 'white' }} />
      <MDXLayout>
        <Content />
      </MDXLayout>
    </div>
  );
}

function IP({ refactor }:{refactor:boolean}) {
  return (
    <>
      <NewProgressBar refactored={refactor} style={{ position: 'sticky', top: '0', backgroundColor: 'white' }} />
      <MDXLayout>
        <Content />
      </MDXLayout>
    </>
  );
}

export default () => {
  const [refactor, setRefactor] = useState<0|1|2|3>(0);

  const clickHandler = (num: 0|1|2|3) => {
    setRefactor(num);
  };

  return (
    <>
      <style jsx>
        {`
        .container{
          position: relative;
          overflow: auto;
          height: 100%;
        }
        .container::-webkit-scrollbar {
            width: 5px;
            }
        .container::-webkit-scrollbar-thumb {
            background-color: gray;
        }
  `}
      </style>
      <div className="container">
        <button type="button" onClick={() => clickHandler(0)}>drilling props</button>
        <button type="button" onClick={() => clickHandler(1)}>drilling props + refactored CSS</button>
        <button type="button" onClick={() => clickHandler(2)}>inner props</button>
        <button type="button" onClick={() => clickHandler(3)}>inner props + refactored CSS</button>
        {refactor === 0 ? <DP refactor={false} />
          : refactor === 1 ? <DP refactor />
            : refactor === 2 ? <IP refactor={false} />
              : refactor === 3 ? <IP refactor />
                : null }
      </div>
    </>
  );
};
