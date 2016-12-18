import React from 'react';
import Button from 'focus-components/components/button';

import GeneratorView from '../views/builder';

import RacesList from '../views/races/list';
import RaceDetail from '../views/builder/race-short-detail';

import ClassList from '../views/classes/list';
import ClassDetail from '../views/builder/class-short-detail';

import BackList from '../views/backgrounds/list';
import BackDetail from '../views/builder/background-short-detail';

import LevelView from '../views/builder/level';
import AbilitiesView from '../views/builder/abilities';
import SynthesisView from '../views/builder/synthesis';

import { navigate } from '../utilities/router';

const ButtonNavigate = (dest) => (
    <Button label={'action.validate'} onClick={() => navigate('generator/' + dest)} />
);

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
                path: 'caracs',
                component: AbilitiesView
            },
            {
                path: 'classAbilities',
                component: () => (ButtonNavigate('proficiency'))

            },
            {
                path: 'proficiency',
                component: () => (ButtonNavigate('options'))
            },
            {
                path: 'options',
                component: () => (ButtonNavigate('healthPoints'))
            },
            {
                path: 'healthPoints',
                component: () => (ButtonNavigate('spells'))
            },
            {
                path: 'spells',
                component: () => (ButtonNavigate('equipment'))
            },
            {
                path: 'equipment',
                component: () => (ButtonNavigate('personnalisation'))
            },
            {
                path: 'personnalisation',
                component: () => (ButtonNavigate('synthesis'))
            },
            {
                path: 'synthesis',
                component: SynthesisView
            }
        ]
    }
];

export default routes;
