import React, { PropTypes } from 'react'
import { translate } from 'focus-core/translation'
import { Link } from '../router';

const renderCircle = (text, state, hasElt) => (
    <div className={`${hasElt ? 'workflow-elt' : ''} ${state}`} >
        <div className={'flex space-around'}>
            <span className={'dash left'} />
            <div className={'circle'}>
                <div className={'inner-circle'}></div>
            </div>
            <span className={'dash right'} />
        </div>
        <span className={'workflow-text'}>{translate('workflow.state.' + text)}</span>
    </div>
);

const Circle = ({text, state, to}) => {

    if (to) {
        return (<Link to={to} className={'workflow-elt'}>
            {renderCircle(text, state, false)}
        </Link>
        );
    }

    return (
        renderCircle(text, state)
    )
}

Circle.displayName = 'Circle';
Circle.defaultProps = {
};
Circle.propTypes = {
    state: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
export default Circle;