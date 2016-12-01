import React from 'react';

import ClassListView from '../views/classes/list';
import ClassDetail from '../views/classes/detail';

const routes = [
    {
        path: 'classes',
        component: ({params}) => (<ClassListView className={params.name} />),
        childRoutes: [
            {
                path: ':name',
                component: (props) => (<ClassDetail className={props.params.name} {...props} />)
            }
        ]
    }
];

export default routes;
