import React, { Component, PropTypes } from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import { translate } from 'focus-core/translation'

import { navigate } from '../../utilities/router'

import List from '../../components/list'

import classes from '../../stores/classes'

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

    render() {
        const route = this.props.className;
        const dataList = classes.map(item => {
            return {
                translatedName: translate('classes.' + item.name),
                selected: route === item.name,
                ...item 
            };
        })
        .sort((a, b) => {
            return a.translatedRace.localeCompare(b.translatedRace);
        })
    .map(classe => {
        return {
            avatar: {
                className: `iconClass ${classe.name}`
            },
            LineContent: this.props.LineContent(classe),
            onClick: this.props.onClickLine(classe),
            selected: classe.selected
        }
    });

        return (
    <Grid>
        <Column size={4}>
            <h3 className={'custom-font website-title'}>{translate('classes.title')}</h3>
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

ClassList.displayName = 'ClassList';
ClassList.defaultProps = defaultProps;
ClassList.propTypes = propTypes;

export default ClassList;
