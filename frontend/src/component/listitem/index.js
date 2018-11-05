'use strict';

import React from 'react';
import ListForm from '../listform/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listEdit: false
    };

    this.toggleListEdit = this.toggleListEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log('we are here!!!')
    this.props.listDelete(this.props.list)
  }

  toggleListEdit() {
    this.setState({ listEdit: !this.state.listEdit })
  }

  handleUpdate() {
    this.props.listUpdate(this.props.list)
  }

  render() {
    return (
      <section>
        <div>
          {!this.state.listEdit ?
            <div>
              <h3>{this.props.title}</h3>
              <button onClick={this.handleDelete} ><FontAwesomeIcon icon={faTrash} />
              </button>
              <button onClick={this.toggleListEdit} ><FontAwesomeIcon icon={faEdit} /></button>

            </div> :
            <ListForm
              onComplete={this.props.listUpdate}
              buttonText="update list"
              list={this.props.list}
              toggle={this.toggleListEdit}
            />


          }
        </div>
      </section>
    )
  }
}

export default ListItem;