'use strict';

import React from 'react';
import ListForm from '../listform/index';

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
              <h2>{this.props.title}</h2>
              <button onClick={this.handleDelete}>DELETE</button>
              <button onClick={this.toggleListEdit}>EDIT</button>

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