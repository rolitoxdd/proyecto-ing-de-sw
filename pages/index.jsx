import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import contentData from '../utils/contentData';

export default function Index() {
  return (
    <>
      <Hero />
      <hr />
      <Content contentData={contentData} />
    </>
  );
}
