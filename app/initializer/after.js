////////////////////////////////////////////////////////
/// SCRIPT EXECUTED AFTER DOM CONTENT LOADED
////////////////////////////////////////////////////////
import React from 'react';
import storesInitializer from './scripts/stores-initializer';
import headerInitializer from './scripts/header-initializer'
import consoleInitializer from './scripts/console-initializer'

/**
 * Launches initializers that has to be loaded after DOM content is loaded.
 */
export const initialize = () => {
    console.info('[INITIALIZER - AFTER CONTENT LOADED]');
    storesInitializer();
    headerInitializer();
    consoleInitializer();
};