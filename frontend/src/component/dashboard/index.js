'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ListForm from '../listform'
import ListItem from '../ListItem/'
import * as util from '../../lib/util.js'
import * as listActions from '../../action/list-actions'

class Dashboard extends React.Component {

  componentDidMount() {
    //add local storage to this area if this props &&
    console.log('didMount');
    this.props.listsFetch();
  }

  render() {
    return (
      <div className='dashboard'>
        <h2> User Dashboard </h2>
        <div className='list'>
          <h3> Add A Task: </h3>

          <ListForm
            buttonText='create list'
            onComplete={this.props.listCreate}
          />

          <ul>
            {this.props.lists.map(list =>
              <li key={list._id}>
                <ListItem
                  title={list.title}
                  listDelete={this.props.listDelete}
                  list={list}
                  listUpdate={this.props.listUpdate}
                ></ListItem>
              </li>
            )}
          </ul>
        </div>

      </div>
    )
  };
};

let mapStateToProps = (state) => ({ lists: state.lists });
let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listUpdate: (list) => dispatch(listActions.listUpdateRequest(list)),

  listsFetch: () => dispatch(listActions.listsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);