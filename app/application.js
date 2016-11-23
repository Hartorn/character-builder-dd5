import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

import {hasRole} from 'focus-core/user';
import {filterByRoles} from './utilities/router'

export default function startApp() {
    console.log('Launching the app...');
    render((
        <Router
            history={browserHistory}
            routes={filterByRoles(Routes)}
        />
    ),
    document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
  );
}
