import React from 'react';

const AwesomeImage = (props) => {
  const { src, width, height } = props;
  return (
    <img width={width} height={height} src={src} alt=""/>
  );
}

export default AwesomeImage;
