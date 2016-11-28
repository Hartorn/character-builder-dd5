import React from 'react';

import RaceListView from '../views/races/list';
import RaceDetail from '../views/races/detail';

const routes = [
    {
        path: 'races',
        component: RaceListView,
        childRoutes: [
            {
                path: ':name',
                component: (props) => (<RaceDetail raceName={props.params.name} {...props} />)
            }
        ]
    }
];

export default routes;
