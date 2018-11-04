'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create.js'
import Dashboard from '../dashboard';
import Landing from '../landing';
import SettingsContainer from '../settings-container/index'

const store = appStoreCreate()

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header> <h1>Welcome!</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'> Signup</Link></li>
                    <li><Link to='/welcome/login'> Login</Link></li>
                    <li><Link to='/todo'> Dashboard</Link></li>

                  </ul>
                </nav>
              </header>

              <main>
                <Route exact path='/welcome/:auth' component={Landing} />
                <Route exact path='/todo' component={Dashboard} />
                <Route exact path="/settings" component={SettingsContainer} />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>

    )
  }
}


export default App;