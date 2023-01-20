import './ProductsSort.scss';

interface ProductsSortProps {
  visible: boolean;
}

const ProductsSort: React.FC<ProductsSortProps> = (
  props: ProductsSortProps
) => {
  return (
    <div className={`products-sort ${!props.visible ? 'hidden' : ''}`}>123</div>
  );
};

export default ProductsSort;
