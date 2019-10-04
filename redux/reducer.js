import { PRODUCT_SAVE, PRODUCT_SUCCESS, CATEGORIES_SUCCESS } from './types';

export const market = (state, action) => {
  switch (action.type) {
    case PRODUCT_SUCCESS:
      return { ...state, products: action.products };
    case PRODUCT_SAVE:
      return { ...state, products: action.products };
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};
