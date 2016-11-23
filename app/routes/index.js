import HomeRoutes from './home-routes';
import RacesRoutes from './races';

import AppLayout from '../components/app-layout';

export default {
    path: `${__BASE_URL__}`,
    component: AppLayout,
    indexRoute: { onEnter: ({ params }, replace) => replace(`${__BASE_URL__}home`) },
    childRoutes: [...HomeRoutes, ...RacesRoutes]
};
