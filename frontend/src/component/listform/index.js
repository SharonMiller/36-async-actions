'use strict';

import React from 'react'
import * as util from '../../lib/util.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.list);
    this.state = props.list ? props.list : { title: '' };
    // this.state = {
    //   title: props.list ? props.list.title : '',
    //   id: props.newItem ? props.newItem._id : '',
    // };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillReceiveProps(props) {
  //   if (props.list)
  //     this.setState(props.list);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state))
    if (this.props.toggle) this.props.toggle();
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <form id="item-form"
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'list-form': true,
          'error': this.state.error,
        })}>

        <input
          name='title'
          type='text'
          placeholder='item name'
          value={this.state.title}
          onChange={this.handleChange}

        />

        <button type='submit'><FontAwesomeIcon icon={faPlusSquare} /></button>
      </form>
    )
  }
}

export default ListForm