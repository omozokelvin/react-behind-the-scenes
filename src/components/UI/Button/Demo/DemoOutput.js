import React from 'react';
import Paragraph from './Paragraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');

  return <Paragraph show={props.show}></Paragraph>;
};

export default React.memo(DemoOutput);
