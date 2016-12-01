import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'


import backgrounds from '../../stores/backgrounds'

const defaultProps = {
    LineContent: (background) => translate('backgrounds.' + background.name),
    onClickLine: (background) => () => navigate('backgrounds/' + background.name)
};

const propTypes = {
    backgroundName: PropTypes.string,
    LineContent: PropTypes.any.isRequired,
    onClickLine: PropTypes.func.isRequired
};

class BackgroundList extends Component {

    render() {
        const route = this.props.backgroundName;
        const dataList = backgrounds.map(item => {
            console.log('item', item.name, route);
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
                className: `iconClass ${background.name}`
            },
            LineContent: this.props.LineContent(background),
            onClick: this.props.onClickLine(background),
            selected: background.selected
        }
    });

        return (
    <div>
        <Grid>
            <Column size={4}>
                <h3 className={'custom-font website-title'}>{translate('backgrounds.title')}</h3>
                <List
                    dataList={dataList}
                    isWrapping
                    />
            </Column>
            <Column size={8}>
                {this.props.children}
            </Column>
        </Grid>
    </div>
);
    }
}

BackgroundList.displayName = 'BackgroundList';
BackgroundList.defaultProps = defaultProps;
BackgroundList.propTypes = propTypes;

export default BackgroundList;
