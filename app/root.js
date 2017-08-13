import React from 'react'
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

// import { hasRole } from 'focus-core/user';
import { filterByRoles } from './utilities/router'

export default () => (
    <Router
        history={browserHistory}
        routes={filterByRoles(Routes)}
    />
);
