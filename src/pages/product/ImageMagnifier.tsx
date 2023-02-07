import { useState } from 'react';

interface ImageMagnifierProps {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight: number;
  magnifieWidth: number;
  zoomLevel: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = (
  props: ImageMagnifierProps
) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    const xVal = e.pageX - left - window.pageXOffset;
    const yVal = e.pageY - top - window.pageYOffset;
    setXY([xVal, yVal]);
  };

  return (
    <div
      style={{
        position: 'relative',
        height: props.height,
        width: props.width,
      }}
    >
      <img
        src={props.src}
        style={{ height: props.height, width: props.width }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt='selected-product'
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${props.magnifierHeight}px`,
          width: `${props.magnifieWidth}px`,
          top: `${y - props.magnifierHeight / 2}px`,
          left: `${x - props.magnifieWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${props.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * props.zoomLevel}px ${
            imgHeight * props.zoomLevel
          }px`,
          backgroundPositionX: `${
            -x * props.zoomLevel + props.magnifieWidth / 2
          }px`,
          backgroundPositionY: `${
            -y * props.zoomLevel + props.magnifierHeight / 2
          }px`,
        }}
      ></div>
    </div>
  );
};

export default ImageMagnifier;
