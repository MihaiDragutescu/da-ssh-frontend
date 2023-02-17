import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState, useEffect } from 'react';
import './PriceRangeSlider.scss';

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  handlePriceChange: (min: number, max: number) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = (props: PriceSliderProps) => {
  const [minValue, setMinValue] = useState(props.minPrice);
  const [maxValue, setMaxValue] = useState(props.maxPrice);

  useEffect(() => {
    props.handlePriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

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
