'use strict';

let validateList = (payload) => {
  if (!payload._id)
    throw new Error('VALIDATION ERROR: list must have an id');
  if (!payload.title)
    throw new Error('VALIDATION ERROR: list must be given a title');

};


export default (state = [], action) => {
  let { type, payload } = action;
  //console.log(type);
  console.log(action);
  switch (type) {
    case 'LIST_SET':
      return payload;

    case 'LIST_CREATE':
      return [payload, ...state];

    case 'LIST_UPDATE':
      return state.map(item =>
        item._id === payload._id ? payload : item);

    case 'LIST_DELETE':
      return state.filter(item => item._id !== payload._id);

    default:
      return state;
  }
}
