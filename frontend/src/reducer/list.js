'use strict';

let validateList = (payload) => {
  if (!payload._id)
    throw new Error('VALIDATION ERROR: list must have an id');
  if (!payload.title)
    throw new Error('VALIDATION ERROR: list must be given a title');

};


export defalt(state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case 'LIST_SET':
      return payload;

    case 'LIST_CREATE':
      return [payload, ...state];

    case 'LIST_UPDATE':
      return state.map(item =>
        item._id === payload._id ? payload : item);

    case 'LIST_DELETE':
      return state.filter(item => item._id !== payload_id);

    default:
      return state;
  }
}
