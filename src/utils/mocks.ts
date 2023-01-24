import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import { RouterPaths } from '@Types/routerPaths';

const products = [
  {
    id: '1',
    image: image1,
    name: 'Brown overcoat',
    price: 125,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '2',
    image: image2,
    name: 'Brown overcoat',
    price: 225,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '3',
    image: image1,
    name: 'Brown overcoat',
    price: 325,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '4',
    image: image2,
    name: 'Brown overcoat',
    price: 425,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '5',
    image: image1,
    name: 'Brown overcoat',
    price: 525,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
  },
  {
    id: '6',
    image: image2,
    name: 'Brown overcoat',
    price: 625,
    get link() {
      return `${RouterPaths.SHOP}/${this.id}`;
    },
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

export { products, colors, sizes };
