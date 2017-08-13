import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

// import { hasRole } from 'focus-core/user';

export default function startApp(logger) {
    logger('Launching the app...');


    const renderCustom = Component => {
        render(
            <AppContainer>
                <Component />
            </AppContainer>,
            document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
        )
    }

    renderCustom(Root);

    if (module.hot) {
        module.hot.accept('./root', () => { renderCustom(Root) })
    }
}


