import './ProductsList.scss';
import ColorPill from '@Components/ui/ColorPill';

const ProductsList: React.FC = () => {
  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <ColorPill
            handleClick={() => {
              console.log('ghj');
            }}
            color='#2127AF'
          />
          <ColorPill
            handleClick={() => {
              console.log('ghj');
            }}
            color='#2127AF'
            active
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
