import React from 'react';
import MDXLayout from '@/components/mdxViewer';
import Content from '@/contents/progressbar.mdx';

export default () => (
  <div style={{ padding: '20px' }}>
    <MDXLayout>
      <Content />
    </MDXLayout>
  </div>

);
