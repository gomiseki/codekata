import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import CodeBlock from './codeBlock';
import 'github-markdown-css';

interface MDXProps{
  children: React.ReactNode;
}

const components = {
  code: CodeBlock,
};

export default function MDXLayout({ children }:MDXProps) {
  return (
    <>
      <style jsx>
        {`
          .markdown-body{
            padding: 20px;
          }
        `}
      </style>
      <MDXProvider components={components as MDXComponents}>
        <div className="markdown-body">
          {children}
        </div>
      </MDXProvider>
    </>
  );
}
