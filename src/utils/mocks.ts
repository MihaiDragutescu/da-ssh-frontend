import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import { RouterPaths } from '@Types/routerPaths';

const products = [
  {
    id: '1',
    image: image1,
    name: 'Brown overcoat',
    price: 125,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
  },
  {
    id: '2',
    image: image2,
    name: 'Brown overcoat',
    price: 225,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
  },
  {
    id: '3',
    image: image1,
    name: 'Brown overcoat',
    price: 325,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
  },
  {
    id: '4',
    image: image2,
    name: 'Brown overcoat',
    price: 425,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
  },
  {
    id: '5',
    image: image1,
    name: 'Brown overcoat',
    price: 525,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
  },
  {
    id: '6',
    image: image2,
    name: 'Brown overcoat',
    price: 625,
    description:
      "Luxury meets utility in the clean-lined Alby Jacket. It's supremely soft and light in Italian cotton garment washed to achieve a smooth, sueded finish while the relaxed fit and boxy shape infuse the look with a modern sensibility.",
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
    gallery: [image2, image2, image2, image2],
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

export {
  products,
  colors,
  sizes,
  brands,
  collections,
  categories,
  accordionList,
};
