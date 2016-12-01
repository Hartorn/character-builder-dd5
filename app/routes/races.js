import React from 'react';

import RaceListView from '../views/races/list';
import RaceDetail from '../views/races/detail';

const routes = [
    {
        path: 'races',
        component: ({params, children}) => (<RaceListView children={children} raceName={params && params.name} />),
        childRoutes: [
            {
                path: ':name',
                component: (props) => (<RaceDetail {...props} raceName={props.params.name} />)
            }
        ]
    }
];

export default routes;
