import React from 'react';
import dispatcher from 'focus-core/dispatcher';
import { translate } from 'focus-core/translation';

// import NotificationCenter from 'focus-notifications';

export default () => {
    console.info('|--- HEADER');

    //initialize account/notification

    dispatcher.handleViewAction({
        data: {
            summaryComponent: {
                component:
                () => (<h3 className='custom-font website-title'>{translate('website.title')}</h3>)
            }
            //         // barContentLeftComponent: { component: (props) => <div>Empty</div> },
            //         // barContentRightComponent: {
            //         //     component: (props) => {
            //         //         return <NotificationCenter config={{ rootURL: 'http://localhost:9999/x/notification' }} onSingleClick={url => console.log('navigate', url)} />
            //         //     }
            //         // }
        },
        type: 'update'
    });
}
