import React, {PropTypes} from 'react'
import {translate} from 'focus-core/translation'

const Circle = ({text, state}) => {

    return (
        <div className={`workflow-elt ${state}`} >
            <div className={'flex space-around'}>
                <span className={'dash left'}/>
                <div className={'circle'}>
                    <div className={'inner-circle'}></div>
                </div>
                <span className={'dash right'}/>
            </div>
            <span className={'workflow-text'}>{translate('workflow.state.' + text)}</span>
        </div>
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