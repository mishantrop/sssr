'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';
import App from './App'

if (!global) {
  global = {};
}
global.React = React;
global.ReactDom = ReactDom;
global.ReactDomServer = ReactDomServer;
global.App = App;
