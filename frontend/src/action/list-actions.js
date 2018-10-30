'use strict';
import superagent from 'superagent';

//SYNC ACTIONS

export const listSet = (lists) => ({
  type: 'LIST_SET',
  payload: lists,
});

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