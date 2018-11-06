'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create.js'
import Dashboard from '../dashboard';
import Landing from '../landing';
import SettingsContainer from '../settings-container/index'
import Navigation from '../navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Slider from '../slider'

library.add(faStroopwafel)

const store = appStoreCreate()

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <Navigation id="nav-content" />
              </header>

              <main id='main-container'>

                <Route exact path='/welcome/:auth' component={Landing} />
                <Route exact path='/todo' component={Dashboard} />
                <Route exact path="/profiles" component={SettingsContainer} />
                <Slider />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>

    )
  }
}


export default App;