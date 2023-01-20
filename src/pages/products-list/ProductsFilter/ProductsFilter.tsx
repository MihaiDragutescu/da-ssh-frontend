import './ProductsFilter.scss';

interface ProductsFilterProps {
  visible: boolean;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  return (
    <div className={`products-filters ${!props.visible ? 'hidden' : ''}`}>
      123
    </div>
  );
};

export default ProductsFilter;
