import React, {Component, PropTypes} from 'react'
import Grid from 'focus-components/components/grid'
import Column from 'focus-components/components/column'

import {translate} from 'focus-core/translation'

import {navigate} from '../../utilities/router'

import List from '../../components/list'


import races from '../../stores/races'

const defaultProps = {

};

const propTypes = {
    raceName: PropTypes.string.isRequired
};

class RaceDetail extends Component {

    render() {
        const dataList = races.map(race => {
            return {
                avatar: {
//                    iconText: 'person',
                    className: `iconClass ${race.name}`
                },
                name: translate(race.name),
                LineContent: translate(race.race),
                actions: [
                    {
                        iconText: 'visibility',
                        action: () => navigate('races/' + race.name)
                    },
                    {
                        iconText: 'delete',
                        action: () => alert('Delete')
                    }
                ]
            }
        });

        return (
            <Grid>
                <Column size={3}>
                    <List dataList={dataList} />
                </Column>
                <Column size={9}>
                {this.props.children}
                </Column>
            </Grid>
        );
    }
}

RaceDetail.displayName = 'RaceDetail';
RaceDetail.defaultProps = defaultProps;
RaceDetail.propTypes = propTypes;

export default RaceDetail;
