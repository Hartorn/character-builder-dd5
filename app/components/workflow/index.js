import React, { PropTypes } from 'react'

import Circle from './circle'

const Workflow = ({states, current}) => {
    return (
        <div className='flex workflow-container'>
            {states.map((label, idx) => {
                const currentIdx = states.indexOf(current);
                return (
                    <Circle
                        key={idx}
                        to={currentIdx < idx ? null : `generator/${label}`}
                        text={label}
                        state={currentIdx === idx ? 'current' : currentIdx < idx ? 'futur' : 'past'}
                        />
                )
            }
            )
            }
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