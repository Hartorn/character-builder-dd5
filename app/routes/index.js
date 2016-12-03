import HomeRoutes from './home-routes';
import RacesRoutes from './races';
import BackgroundsRoutes from './backgrounds';
import ClassRoutes from './classes';
import GeneratorRoutes from './generator';

import AppLayout from '../components/app-layout';
import HomeView from '../views/home';

export default {
    path: `${__BASE_URL__}`,
    component: AppLayout,
    indexRoute: {
        component: HomeView
    },
    childRoutes: [...HomeRoutes, ...RacesRoutes, ...BackgroundsRoutes, ...ClassRoutes, ...GeneratorRoutes]
};
