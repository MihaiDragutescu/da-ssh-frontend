import './ProductsList.scss';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';

const ProductsList: React.FC = () => {
  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <PriceSlider />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
