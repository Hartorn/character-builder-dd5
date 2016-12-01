import React from 'react';

import BackgroundListView from '../views/backgrounds/list';
import BackgroundDetail from '../views/backgrounds/detail';

const routes = [
    {
        path: 'backgrounds',
        component: (props) => (<BackgroundListView backgroundName={props.params && props.params.name} {...props} />),
        childRoutes: [
            {
                path: ':name',
                component: (props) => (<BackgroundDetail backgroundName={props.params.name} {...props} />)
            }
        ]
    }
];

export default routes;
