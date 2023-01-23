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

export default products;
