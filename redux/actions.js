import { PRODUCT_SAVE, PRODUCT_SUCCESS, CATEGORIES_SUCCESS } from './types';

let products = [
  {
    name: 'Hleb',
    type: 'Hrana',
    price: '100',
    description: 'Njam njam'
  },
  {
    name: 'Voda',
    type: 'Pice',
    price: '50',
    description: 'Glu glu'
  }
];

let categories = [
  {
    id: 1,
    name: 'Hrana'
  },
  {
    id: 2,
    name: 'Pice'
  },
  {
    id: 3,
    name: 'Hemija'
  },
  {
    id: 4,
    name: 'Tehnika'
  }
];

export const getProducts = () => dispatch =>
  dispatch({
    type: PRODUCT_SUCCESS,
    products
  });

export const saveProduct = product => dispatch => {
  products.push(product);
  return dispatch({
    type: PRODUCT_SAVE,
    products
  });
};

export const getCategories = () => dispatch =>
  dispatch({
    type: CATEGORIES_SUCCESS,
    categories
  });
