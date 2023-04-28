import React from 'react';

interface ProgressBarProps{
  per: number;
  style?: React.CSSProperties;
  refactored?: boolean;
  [key: string]: any;
}

export default function ProgressBar({
  per, style, refactored, ...rest
}:ProgressBarProps) {
  const progressBarOrigin:React.CSSProperties = {
    width: `${per}%`,
    backgroundColor: 'red',
    height: '5px',
  };

  const progressBarRefactor:React.CSSProperties = {
    width: '100%',
    backgroundColor: 'red',
    height: '5px',
    transform: `scaleX(${per / 100})`,
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
      <div className="container" style={{ ...style }} {...rest}>
        {refactored ? 'refactored ProgressBar' : 'ProgressBar'}
        <div
          style={refactored ? progressBarRefactor : progressBarOrigin}
        />
      </div>
    </>
  );
}

ProgressBar.defaultProps = {
  style: {},
  refactored: false,
};
