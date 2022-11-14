import React from 'react';
import useCanvas from './UseCanvas';

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} width="500" height="400" />;
};

export default Canvas;
