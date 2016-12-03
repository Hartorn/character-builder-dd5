import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import Carousel from '../../components/carousel'
import List from '../../components/list'

import { navigate } from '../../utilities/router'

import races from '../../stores/races'

const typesArray = [
    {
        nbElts: 7,
        type: 'dwarf'
    },
    {
        nbElts: 23,
        type: 'elf'
    },
    {
        nbElts: 5,
        type: 'gnome'
    },
    {
        nbElts: 7,
        type: 'halfElf'
    },
    {
        nbElts: 5,
        type: 'halfling'
    },
    {
        nbElts: 37,
        type: 'human'
    },
    {
        nbElts: 2,
        type: 'halfOrc'
    },
    {
        nbElts: 1,
        type: 'tiefling'
    }
];

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
    buildElt(item, currentElt) {
        return {
            translatedName: translate('races.' + item.name),
            translatedRace: translate('races.' + item.race),
            selected: currentElt === item.name,
            ...item
        };
    }

    sortElts(a, b) {
        const sortByRace = a.translatedRace.localeCompare(b.translatedRace);
        return sortByRace === 0 ? a.translatedName.localeCompare(b.translatedName) : sortByRace
    }

    buildListPropsElt(item, lineContentBuilder, clickLineBuilder) {
        return {
            avatar: {
                className: `iconClass ${item.name}`
            },
            LineContent: lineContentBuilder(item),//this.props.LineContent(classe),
            onClick: clickLineBuilder(item), // this.props.onClickLine(classe),
            selected: item.selected
        }
    }

    buildListProps(races, currentElt, lineContentBuilder, clickLineBuilder) {
        return (races || []).map(item => (this.buildElt(item, currentElt)))
            .sort(this.sortElts)
            .map(race => (this.buildListPropsElt(race, lineContentBuilder, clickLineBuilder)));
    }

    render() {

        const route = this.props.raceName;
        const dataList = this.buildListProps(races, route, this.props.LineContent, this.props.onClickLine);

        const raceType = (races.find(item => {
            return item.name === route;
        }) || {}).race;

        const types = raceType ? typesArray.filter(elt => {
            return elt.type === raceType;
        }) : typesArray;
        return (
            <div>
                <Grid>
                    <Column size={4}>
                        <h3 className={'custom-font website-title'}>{translate('races.title')}</h3>
                        <Carousel typesArray={types} />
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

RaceList.displayName = 'RaceList';
RaceList.defaultProps = defaultProps;
RaceList.propTypes = propTypes;

export default RaceList;
