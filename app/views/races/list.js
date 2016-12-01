import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'


import races from '../../stores/races'

const defaultProps = {
    LineContent: (race) => translate('races.' + race.name),
    onClickLine: (race) => () => navigate('races/' + race.name)
};

const propTypes = {
    raceName: PropTypes.string,
    LineContent: PropTypes.any.isRequired,
    onClickLine: PropTypes.func.isRequired
};

class RaceList extends Component {

    render() {
        const route = this.props.raceName;
        const dataList = races.map(item => {
            return {
                translatedName: translate('races.' + item.name),
                translatedRace: translate('races.' + item.race),
                selected: route === item.name,
                ...item 
            };
        })
        .sort((a, b) => {
            const sortByRace = a.translatedRace.localeCompare(b.translatedRace);
            return sortByRace === 0 ? a.translatedName.localeCompare(b.translatedName) : sortByRace
        })
    .map(race => {
        return {
            avatar: {
                className: `iconClass ${race.name}`
            },
            LineContent: this.props.LineContent(race),
            onClick: this.props.onClickLine(race),
            selected: race.selected
        }
    });

        return (
    <Grid>
        <Column size={4}>
            <h3 className={'custom-font website-title'}>{translate('races.title')}</h3>
            <List
                dataList={dataList}
                isWrapping
                />
        </Column>
        <Column size={8}>
            {this.props.children}
        </Column>
    </Grid>
);
    }
}

RaceList.displayName = 'RaceList';
RaceList.defaultProps = defaultProps;
RaceList.propTypes = propTypes;

export default RaceList;
