'use strict'

import React from 'react';
import { connect } from 'react-redux'
import AuthForm from '../auth-form'
import { signupRequest, loginRequest } from '../../action/auth-actions';
import { Redirect } from 'react-router-dom';


class Landing extends React.Component {
  render() {
    let { params } = this.props.match;

    let handleComplete = params.auth === 'signup' ? this.props.signup : this.props.login;

    let replaceHistory = (path) => this.props.history.replace('/todo');

    return (
      <div>
        <AuthForm
          onComplete={handleComplete}
          auth={params.auth}
          redirect={replaceHistory}
        />
      </div>
    )
  }

}

let mapStateToProps = (state) => ({
  token: state.token,
})

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);