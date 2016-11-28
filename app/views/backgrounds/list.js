import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'


import backgrounds from '../../stores/backgrounds'

const defaultProps = {

};

const propTypes = {
};

class BackgroundList extends Component {

    render() {
        const route = this.props.params.name;
        const dataList = backgrounds.map(item => {
            return {
                translatedName: translate('backgrounds.' + item.name),
                selected: route === item.name,
                ...item
            };
        })
        .sort((a, b) => {
            return a.translatedName.localeCompare(b.translatedName);
        })
    .map(background => {
        return {
            avatar: {
                //                    iconText: 'person',
                className: `iconClass ${background.name}`
            },
            LineContent: translate('backgrounds.' + background.name),
            onClick: () => navigate('backgrounds/' + background.name),
            selected: background.selected
           /* actions: [
                {
                    iconText: 'visibility',
                    action: () => navigate('backgrounds/' + background.name)
                }/*,
                    {
                        iconText: 'delete',
                        action: () => alert('Delete')
                    }
            ]*/
        }
    });

        return (
    <Grid>
        <Column size={6}>
            <List
                dataList={dataList}
                isWrapping
                nbItems={3}
                />
        </Column>
        <Column size={6}>
            {this.props.children}
        </Column>
    </Grid>
);
    }
}

BackgroundList.displayName = 'BackgroundList';
BackgroundList.defaultProps = defaultProps;
BackgroundList.propTypes = propTypes;

export default BackgroundList;
