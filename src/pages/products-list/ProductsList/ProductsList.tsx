import './ProductsList.scss';
import FilterPill from '@Components/ui/FilterPill';

const ProductsList: React.FC = () => {
  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <FilterPill
            handleClick={() => {
              console.log('asd');
            }}
          >
            XS
          </FilterPill>
          <FilterPill
            handleClick={() => {
              console.log('asd');
            }}
            active
          >
            M
          </FilterPill>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
