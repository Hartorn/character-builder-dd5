import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'
import Carousel from '../../components/carousel'

import classes from '../../stores/classes'

const typesArray = [
    {
        nbElts: 14,
        type: 'wizard'
    },
    {
        nbElts: 2,
        type: 'barbarian'
    },
    {
        nbElts: 3,
        type: 'bard'
    },
    {
        nbElts: 8,
        type: 'cleric'
    },
    {
        nbElts: 19,
        type: 'fighter'
    },
    {
        nbElts: 1,
        type: 'paladin'
    },
    {
        nbElts: 1,
        type: 'druid'
    }
];


const defaultProps = {
    LineContent: (race) => translate('classes.' + race.name),
    onClickLine: (race) => () => navigate('classes/' + race.name)
};

const propTypes = {
    className: PropTypes.string,
    LineContent: PropTypes.any.isRequired,
    onClickLine: PropTypes.func.isRequired
};

class ClassList extends Component {

    buildElt(item, currentElt) {
        return {
            translatedName: translate('classes.' + item.name),
            selected: currentElt === item.name,
            ...item
        };
    }

    sortElts(a, b) {
        return a.translatedName.localeCompare(b.translatedName);
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

    buildListProps(classes, currentElt, lineContentBuilder, clickLineBuilder) {
        return (classes || []).map(item => (this.buildElt(item, currentElt)))
            .sort(this.sortElts)
            .map(classe => (this.buildListPropsElt(classe, lineContentBuilder, clickLineBuilder)));
    }

    render() {
        const route = this.props.className;
        const dataList = this.buildListProps(classes, route, this.props.LineContent, this.props.onClickLine);

        const types = route ? typesArray.filter(elt => {
            return elt.type === route;
        }) : typesArray;

        return (
            <div>
                <Grid>
                    <Column size={4}>
                        <h3 className={'custom-font website-title'}>{translate('classes.title')}</h3>
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

ClassList.displayName = 'ClassList';
ClassList.defaultProps = defaultProps;
ClassList.propTypes = propTypes;

export default ClassList;
