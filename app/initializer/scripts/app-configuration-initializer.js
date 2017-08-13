import dispatcher from 'focus-core/dispatcher';
import configServices from '../../services/config';
import ConfigStore from '../../stores/config';

import { once } from 'lodash';

const initialize = (appInitialisation) => {
    console.log('#########################[INIT APP CONFIG]#######################################');
    configServices.loadConfig().then(
        (data) => {
            ConfigStore.addConfigChangeListener(once(appInitialisation));
            dispatcher.handleServerAction({
                data: {
                    config: data
                },
                type: 'update'
            });
        }
    );
};

export {
    initialize
};
