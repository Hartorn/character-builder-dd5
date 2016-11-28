import React, { Component, PropTypes } from 'react';

const defaultProps = {

};

const propTypes = {
    backgroundName: PropTypes.string.isRequired
};

class BackgroundDetail extends Component {

    render() {
        return (
            <div>
                {this.props.backgroundName}
            </div>
        );
    }
}

BackgroundDetail.displayName = 'BackgroundDetail';
BackgroundDetail.defaultProps = defaultProps;
BackgroundDetail.propTypes = propTypes;

export default BackgroundDetail;
