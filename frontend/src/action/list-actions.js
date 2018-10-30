'use strict';
import superagent from 'superagent';

//SYNC ACTIONS

export const listSet = (lists) => {
  console.log(lists);
  return {
    type: 'LIST_SET',
    payload: lists,
  }
};

export const listCreate = (list) => ({
  type: 'LIST_CREATE',
  payload: list,
});

export const listDelete = (list) => ({
  type: 'LIST_DELETE',
  payload: list,
});

export const listUpdate = (list) => ({
  type: 'LIST_UPDATE',
  payload: list,
});


//ASYNC ACTIONS:
export const listCreateRequest = list => dispatch => {
  return superagent.post(`${__API_URL__}/api/lists`)
    .send(list)
    .then(res => {
      //console.log(res.body);
      dispatch(listCreate(res.body));
      return res;
    })
    .catch(console.error);
};

export const listDeleteRequest = list => dispatch => {
  console.log('LISTID FOR DELETE', list._id)
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
    .then(res => {
      dispatch(listDelete(list));
      return res;
    })
    .catch(err => console.error(err));
};

export const listsFetchRequest = () => dispatch => {
  // isFetching = true;
  return superagent.get(`${__API_URL__}/api/lists`)
    .then(res => {
      dispatch(listSet(res.body));
      // isFetching = false;
      return res;
    });
}