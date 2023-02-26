import { priceRange } from '@Types/priceRange';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useState, useEffect } from 'react';
import './PriceRangeSlider.scss';

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  handlePriceChange: (
    min: number,
    max: number,
    priceChanged: priceRange
  ) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = (props: PriceSliderProps) => {
  const [minValue, setMinValue] = useState(props.minPrice);
  const [maxValue, setMaxValue] = useState(props.maxPrice);
  const [priceChanged, setPriceChanged] = useState<priceRange>();

  useEffect(() => {
    if (minValue !== props.minPrice) {
      setPriceChanged(priceRange.MIN_PRICE);
    } else if (maxValue !== props.maxPrice) {
      setPriceChanged(priceRange.MAX_PRICE);
    }
    props.handlePriceChange(minValue, maxValue, priceChanged as priceRange);
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
        minValue={props.minPrice}
        maxValue={props.maxPrice}
        step={100}
        stepOnly
        onInput={(e: ChangeResult) => {
          setMinValue(() => e.minValue);
          setMaxValue(() => e.maxValue);
        }}
      />
    </>
  );
};

export default PriceSlider;
