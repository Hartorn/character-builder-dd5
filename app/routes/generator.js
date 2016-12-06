import React from 'react';

import GeneratorView from '../views/builder';

import RacesList from '../views/races/list';
import RaceDetail from '../views/races/detail';

import ClassList from '../views/classes/list';
import ClassDetail from '../views/classes/detail';

import BackList from '../views/backgrounds/list';
import BackDetail from '../views/backgrounds/detail';

import { navigate } from '../utilities/router';

const routes = [
    {
        path: 'generator',
        component: GeneratorView,
        childRoutes: [
            {
                path: 'race',
                component: (props) => (<RacesList raceName={props.params.race} onClickLine={(race) => () => navigate('generator/race/' + race.name)} {...props} />),
                childRoutes: [
                    {
                        path: ':race',
                        component: ({params}) => (<RaceDetail raceName={params.race} />)
                    }
                ]
            },
            {
                path: 'class',
                component: (props) => (<ClassList className={props.params.class} onClickLine={(classElt) => () => navigate('generator/class/' + classElt.name)} {...props} />),
                childRoutes: [
                    {
                        path: ':class',
                        component: ({params}) => (<ClassDetail className={params.class} />)
                    }
                ]
            },
            {
                path: 'background',
                component: (props) => (<BackList backgroundName={props.params.background} onClickLine={(background) => () => navigate('generator/background/' + background.name)} {...props} />),
                childRoutes: [
                    {
                        path: ':background',
                        component: ({params}) => (<BackDetail backgroundName={params.background} />)
                    }
                ]
            }

        ]
    }
];

export default routes;
