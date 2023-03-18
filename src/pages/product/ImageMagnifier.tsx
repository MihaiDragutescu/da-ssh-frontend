import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import { BREAKPOINTS } from '@Utils/constants';

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
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
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
      className='relative'
      style={{
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
        alt='Selected product'
      />

      {breakpoint === 'desktop' && (
        <div
          className='absolute pointer-events-none opacity-100 bg-white bg-no-repeat border border-solid border-[#d3d3d3]'
          style={{
            display: showMagnifier ? '' : 'none',
            height: `${props.magnifierHeight}px`,
            width: `${props.magnifieWidth}px`,
            top: `${y - props.magnifierHeight / 2}px`,
            left: `${x - props.magnifieWidth / 2}px`,
            backgroundImage: `url('${props.src}')`,
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
      )}
    </div>
  );
};

export default ImageMagnifier;
