import React from 'react';

const Paragraph = (props) => {
  console.log('Paragraph running');

  return <p>{props.show ? 'This is new' : ''}</p>;
};

export default Paragraph;
