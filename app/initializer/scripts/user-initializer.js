import dispatcher from 'focus-core/dispatcher';
import configServices from '../../services/config';
import { builtInStore as UserStore } from 'focus-core/user';

import { once } from 'lodash';

/*
import user from 'focus-core/user';

export default () => {
    console.info('|--- USER');
    user.setRoles(['DEFAULT_ROLE']);
}*/


const initialize = (appInitialisation) => {
    console.info('|--- USER');
    configServices.loadUser().then(
        (data) => {
            UserStore.addProfileChangeListener(once(appInitialisation));
            dispatcher.handleServerAction({
                data: {
                    profile: data.profile,
                    roles: data.roles,
                    login: data.login
                },
                type: 'update'
            });
        }
    );
};

export {
    initialize
};
