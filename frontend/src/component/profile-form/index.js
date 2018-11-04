'use strict'

import React from 'react';
import * as util from '../../lib/util.js'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.profile ? { ...props.profile, preview: '' } : { bio: '', avatar: null, preview: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
}

