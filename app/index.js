// import 'babel-preset-focus/dist/focus-polyfill';

// import focusDemoConf from '../package.json';
// import focusCoreConf from 'focus-core/package.json';
// import focusComponentsConf from 'focus-components/package.json';
import { initialize as appConfigInitializer } from './initializer/scripts/app-configuration-initializer';
import { initialize as userInitializer } from './initializer/scripts/user-initializer';
import { initialize as afterDomContentLoadedScript } from './initializer/after';
import { initialize as beforeDomContentLoadedScript } from './initializer/before'
import application from './application';
// console.info(
//     `
//         FOCUS DEMO
//         version: ${focusDemoConf.version}
//         focus-core: ${focusCoreConf.version}
//         focus-components: ${focusComponentsConf.version}
//         web: http://getfocus.io
//     `
// );

// Flag to know if DOM was loaded
document.addEventListener('DOMContentLoaded', () => { window._hasFiredDOMContentLoaded = true; });


const appInit = () => {
    // initializers before DOM CONTENT LOADED
    beforeDomContentLoadedScript();

    // initializers after DOM CONTENT LOADED
    const onDOMContentLoaded = () => {
        const info = console.info;
        afterDomContentLoadedScript();
        info('#########################[START APP]############################');
        application(info);
        info('#########################[APP STARTED]##########################');
    };

    window.onDOMContentLoaded = onDOMContentLoaded;
    if (window._hasFiredDOMContentLoaded) {
        onDOMContentLoaded();
    } else {
        document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    }
};
console.log('[INITIALIZER - BEFORE ANYTHING (prerequisites)]');
// Initalisation de la configuration applicative (avant tout le reste, si besoin pour autres initialisers)
// Initalisation de l'utilisateur connecté
appConfigInitializer(() => userInitializer(appInit));


//import app demo styles
import './styles';