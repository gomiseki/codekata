import useScrollPercent from '@/hooks/useScrollPercent';
import React from 'react';

interface newProgressBarProps{
  style?: React.CSSProperties;
  refactored?: boolean;
  [key: string]: any;
}

export default function InnerStateProgressBar({ style, refactored, ...rest }:newProgressBarProps) {
  const { scrollPer, domRef } = useScrollPercent<HTMLDivElement>();

  const progressBarOrigin:React.CSSProperties = {
    width: `${scrollPer}%`,
    backgroundColor: 'red',
    height: '5px',
  };

  const progressBarRefactor:React.CSSProperties = {
    width: '100%',
    backgroundColor: 'red',
    height: '5px',
    transform: `scaleX(${scrollPer / 100})`,
    transformOrigin: 'center left',
  };
  return (
    <>
      <style jsx>
        {`
          .container{
            display: flex;
            flex-direction: column;
            font-size: 1em;
            font-weight: bold;
            justify-content: space-between;
            text-align: center;
            height: 2em;
            padding-top: 5px;
          }
        `}
      </style>
      <div className="container" ref={domRef} style={{ ...style }} {...rest}>
        {refactored ? 'refactored new ProgressBar' : 'new ProgressBar'}
        <div
          style={refactored ? progressBarRefactor : progressBarOrigin}
        />
      </div>
    </>
  );
}

InnerStateProgressBar.defaultProps = {
  style: {},
  refactored: false,
};
