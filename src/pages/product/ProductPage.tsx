import Accordion from '@Components/ui/Accordion';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import { products } from '@Utils/mocks';

const ProductsPage = () => {
  const accordionList = [
    {
      label: 'Size & Fit',
      content:
        "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    },
    {
      label: 'Shipping Instructions',
      content:
        "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    },
    {
      label: 'Fit & Size',
      content:
        "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    },
  ];

  return (
    <>
      <Accordion accordionList={accordionList} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default ProductsPage;
