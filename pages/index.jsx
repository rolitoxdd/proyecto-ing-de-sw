import React from 'react';

import Hero from '../components/Hero';
// import Content from '../components/Content';
// import contentData from '../utils/contentData';
import { SwipeableTextMobileStepper } from '../components/carousel';
export default function Index() {
  return (
    <>
      <Hero />
      <SwipeableTextMobileStepper />
    </>
  );
}
