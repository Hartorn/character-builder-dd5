import React, { PropTypes } from 'react'

import Circle from './circle'

const Workflow = ({states, current}) => {

    return (
        <div className='flex workflow-container'>
            {states.map((label, idx) => <Circle key={idx} text={label} state={states.indexOf(current) === idx ? 'current' : states.indexOf(current) < idx ? 'futur' : 'past'} />)}
        </div>
    )
}

Workflow.displayName = 'Workflow';
Workflow.defaultProps = {
};
Workflow.propTypes = {
    current: PropTypes.string.isRequired,
    states: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Workflow;