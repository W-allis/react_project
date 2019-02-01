/* eslint-disable */

// Disables all rules for the rest of the file 
import React from 'react';
import ReactDOM from 'react-dom';
// import Router from 'react-router-dom';
import 'element-theme-default';
import './index.css';

import FastClick from 'fastclick'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Animate from 'rc-animate'

import route from './router'
// import configureStore from './store'
// const store = configureStore()
import store from './store'

import * as serviceWorker from './serviceWorker';

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        {/* <Animate transitionName='fade'> */}
          <Component/>
        {/* </Animate> */}
      </AppContainer>
    </Provider>
    , document.getElementById('root')
  )
}

render(route)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
