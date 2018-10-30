import reducer from '../reducer/';
import thunk from 'redux-thunk';
import logger from './middleware/logger'
import { createStore, applyMiddleware } from 'redux';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk, logger));

export default appStoreCreate;