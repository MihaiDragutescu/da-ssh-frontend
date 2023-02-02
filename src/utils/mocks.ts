import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import image3 from '@Assets/images/card-image-3.png';
import { RouterPaths } from '@Types/routerPaths';

const products = [
  {
    id: '1',
    images: [image1, image2, image1, image2, image1],
    name: 'Brown overcoat',
    price: 125,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '2',
    images: [image2, image1, image2, image1, image2],
    name: 'Brown overcoat',
    price: 225,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '3',
    images: [image1, image2, image1, image2, image1],
    name: 'Brown overcoat',
    price: 325,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '4',
    images: [image2, image1, image2, image1, image2],
    name: 'Brown overcoat',
    price: 425,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '5',
    images: [image1, image2, image1, image2, image1, image2, image1],
    name: 'Brown overcoat',
    price: 525,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '6',
    images: [image2, image1, image2, image1, image2],
    name: 'Brown overcoat',
    price: 625,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
];

const featuredCollections = [
  {
    id: '1',
    image: image1,
    collection: 'All Autumn Collection',
    category: 'Overcoats',
    link: '#',
  },
  {
    id: '2',
    image: image1,
    collection: 'All Autumn Collection',
    category: 'Overcoats',
    link: '#',
  },
  {
    id: '3',
    image: image3,
    collection: 'Footwear',
    category: 'Boots',
    link: '#',
  },
];

const colors = [
  { id: '1', color: '#CA1010' },
  { id: '2', color: '#2127AF' },
  { id: '3', color: '#37940C' },
  { id: '4', color: '#333333' },
  { id: '5', color: '#AE19A8' },
  { id: '6', color: '#633102' },
];

const sizes = [
  { id: '1', name: 'XS' },
  { id: '2', name: 'S' },
  { id: '3', name: 'M' },
  { id: '4', name: 'L' },
  { id: '5', name: 'XL' },
  { id: '6', name: 'XXL' },
];

const brands = [
  { id: '1', name: 'Gucci' },
  { id: '2', name: 'Prada' },
  { id: '3', name: 'Burberry' },
  { id: '4', name: 'Dolce & Cabanna' },
  { id: '5', name: 'Versace' },
];

const collections = [
  { id: '1', name: 'All Autumn Collection' },
  { id: '2', name: 'Footwear' },
  { id: '3', name: 'All Autumn Collection' },
  { id: '4', name: 'Footwear' },
  { id: '5', name: 'All Autumn Collection' },
];

const categories = [
  { id: '1', name: 'Overcoats' },
  { id: '2', name: 'Boots' },
  { id: '3', name: 'Overcoats' },
  { id: '4', name: 'Boots' },
  { id: '5', name: 'Overcoats' },
];

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

const sort = [
  { id: '1', type: 'Price - Low to High' },
  { id: '2', type: 'Price - High to Low' },
  { id: '3', type: 'Newest' },
];

export {
  products,
  featuredCollections,
  colors,
  sizes,
  brands,
  collections,
  categories,
  accordionList,
  sort,
};
