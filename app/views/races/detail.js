import React, { Component, PropTypes } from 'react';

const defaultProps = {

};

const propTypes = {
    raceName: PropTypes.string.isRequired
};

class RaceDetail extends Component {

    render() {
        return (
            <div>
                {this.props.raceName}
            </div>
        );
    }
}

RaceDetail.displayName = 'RaceDetail';
RaceDetail.defaultProps = defaultProps;
RaceDetail.propTypes = propTypes;

export default RaceDetail;
