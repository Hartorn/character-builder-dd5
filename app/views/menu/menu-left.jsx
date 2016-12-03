import React, { Component } from 'react';
import history from 'focus-core/history';
import Menu from 'focus-components/components/menu';
import { component as Modal } from 'focus-components/application/popin';

import { Link } from '../../components/router';
import { navigate } from '../../utilities/router';

//custom web component
import QuickSearchView from '../search/quick';

class MenuLeft extends Component {

    _getMenuItems() {
        return [
            { icon: 'home', route: '' }, // route: 'home'
            { icon: 'pets', route: 'races' },
            { icon: 'history', route: 'backgrounds' },
            { icon: 'face', route: 'classes' },
            { icon: 'build', route: 'generator' }
        ];
    }

    render() {
        const items = this._getMenuItems();
        return (
            <div>
                <Menu items={items} LinkComponent={(props) => (<Link {...props} />)} handleBrandClick={() => navigate('home')} />
            </div>
        );
    }
}

MenuLeft.displayName = 'MenuLeft';
MenuLeft.defaultProps = {
}
MenuLeft.propTypes = {

};

export default MenuLeft;