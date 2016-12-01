import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'


import races from '../../stores/races'

const defaultProps = {

};

const propTypes = {
};

class RaceList extends Component {

    render() {
        const route = this.props.params.name;
        const dataList = races.map(item => {
            return {
                translatedName: translate('races.' + item.name),
                translatedRace: translate('races.' + item.race),
                selected: route === item.name,
                ...item 
            };
        })
        .sort((a, b) => {
    //  return a.race.localeCompare(b.race);
            const sortByRace = a.translatedRace.localeCompare(b.translatedRace);
            return sortByRace === 0 ? a.translatedName.localeCompare(b.translatedName) : sortByRace
        })
    .map(race => {
        return {
            avatar: {
                //                    iconText: 'person',
                className: `iconClass ${race.name}`
            },
            LineContent: translate('races.' + race.name),
            onClick: () => navigate('races/' + race.name),
            selected: race.selected
            /*actions: [
                {
                    iconText: 'visibility',
                    action: () => navigate('races/' + race.name)
                },
                {
                    iconText: 'delete',
                    action: () => alert('Delete')
                }
            ]*/
        }
    });

        return (
    <Grid>
        <Column size={4}>
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
