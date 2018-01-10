/* eslint no-param-reassign: 0 */

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { sitecoreReducer } from '@sitecore-jss/sitecore-jss-react';

import about from 'about/reducer';
import app from 'app/reducer';
import home from 'home/reducer';
import downloadCallout from 'ui/components/downloadCallout/reducer';
import footerNav from '../FooterNav/components/reducer';

export const makeRootReducer = asyncReducers =>
  combineReducers({
    about,
    app,
    home,
    downloadCallout,
    footerNav,
    sitecore: sitecoreReducer,
    model: (state = {}) => state,
    viewBag: (state = {}) => state,
    routing,
    ...asyncReducers,
  });

export default makeRootReducer;
