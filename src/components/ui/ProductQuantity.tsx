import './ProductQuantity.scss';

interface ProductQuantityProps {
  quantity: number;
  handleSubtractQuantity: () => void;
  handleAddQuantity: () => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = (
  props: ProductQuantityProps
) => {
  return (
    <div className='product-info__quantity'>
      <div className='product-info__quantity-box'>
        <button
          className='quantity-button quantity-button--subtract'
          onClick={props.handleSubtractQuantity}
        >
          -
        </button>
        <span className='product-quantity'>{props.quantity}</span>
        <button
          className='quantity-button quantity-button--add'
          onClick={props.handleAddQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
