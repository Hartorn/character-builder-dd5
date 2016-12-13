import React from 'react';

import GeneratorView from '../views/builder';

import RacesList from '../views/races/list';
import RaceDetail from '../views/races/detail';

import ClassList from '../views/classes/list';
import ClassDetail from '../views/classes/detail';

import BackList from '../views/backgrounds/list';
import BackDetail from '../views/backgrounds/detail';

import LevelView from '../views/builder/level';

import { navigate } from '../utilities/router';

const routes = [
    {
        path: 'generator',
        indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}generator/race`) },
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
                path: 'background',
                component: (props) => (<BackList backgroundName={props.params.background} onClickLine={(background) => () => navigate('generator/background/' + background.name)} {...props} />),
                childRoutes: [
                    {
                        path: ':background',
                        component: ({params}) => (<BackDetail backgroundName={params.background} />)
                    }
                ]
            },
            {
                path: 'level',
                component: LevelView
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
                path: 'caracs'
            },
            {
                path: 'proficiency'
            },
            {
                path: 'options'
            },
            {
                path: 'healthPoints'
            },
            {
                path: 'spells'
            },
            {
                path: 'equipment'
            },
            {
                path: 'classAbilities'
            },
            {
                path: 'personnalisation'
            },
            {
                path: 'synthesis'
            }
        ]
    }
];

export default routes;
