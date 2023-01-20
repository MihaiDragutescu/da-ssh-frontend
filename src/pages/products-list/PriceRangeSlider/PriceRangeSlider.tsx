import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState } from 'react';
import './PriceRangeSlider.scss';

const PriceSlider: React.FC = () => {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(9000);

  return (
    <>
      <div className='multi-range-slider-values'>
        <span>{minValue}€</span>
        <span>-</span>
        <span>{maxValue}€</span>
      </div>
      <MultiRangeSlider
        min={0}
        max={10000}
        minValue={minValue}
        maxValue={maxValue}
        step={100}
        stepOnly
        onInput={(e: ChangeResult) => {
          setMinValue(e.minValue);
          setMaxValue(e.maxValue);
        }}
      />
    </>
  );
};

export default PriceSlider;
