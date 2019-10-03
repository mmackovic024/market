import { PRODUCT_SAVE, PRODUCT_SUCCESS, CATEGORIES_SUCCESS } from './types';

let products = [
  {
    name: 'Suboticki beli',
    type: 'Hleb',
    price: '40',
    description: 'Za jelo',
    category: '0'
  },
  {
    name: 'Rosa',
    type: 'Voda',
    price: '30',
    description: 'Za pice',
    category: '1'
  },
  {
    name: 'Tide',
    type: 'Deterdzent',
    price: '500',
    description: 'Za pranje',
    category: '2'
  }
];

let categories = ['hrana', 'pice', 'hemija', 'tehnika'];

export const getProducts = () => dispatch => {
  const prod = products.map(pr => ({ ...pr, category: categories[+pr.category] }));
  console.log(products);
  dispatch({
    type: PRODUCT_SUCCESS,
    products: prod
  });
};

export const saveProduct = product => dispatch => {
  products.push(product);
  const prod = products.map(pr => ({ ...pr, category: categories[+pr.category] }));
  console.log(products);
  return dispatch({
    type: PRODUCT_SAVE,
    products: prod
  });
};

export const getCategories = () => dispatch =>
  dispatch({
    type: CATEGORIES_SUCCESS,
    categories
  });
