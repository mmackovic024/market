import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { market } from './reducer';

export default function store(initialState = {}) {
  return createStore(market, initialState, applyMiddleware(thunk));
}
