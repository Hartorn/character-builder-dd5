import React, { Component, PropTypes } from 'react'
import { translate } from 'focus-core/translation'

import Workflow from '../../components/workflow'
import Circle from '../../components/workflow/circle'

import RacesList from '../races/list'
import { navigate } from '../../utilities/router'
import Summary from './summary'

const defaultProps = {

};

const propTypes = {
};

class BuilderView extends Component {

    render() {
        const currentStep = this.props.routes.reduce((acc, curr) => {
            if (curr.path === 'generator') {
                return true;
            }
            return acc === true ? curr.path : acc;
        }, false);

        return (
            <div>
                <h3 className={'custom-font website-title'}>{translate('generator.title')}</h3>
                <Workflow
                    current={currentStep ? currentStep : ''}
                    states={['race', 'background', 'class', 'caracs', 'classAbilities', 'proficiency', 'options', 'healthPoints', 'spells', 'equipment', 'personnalisation', 'synthesis']}
                    />
                <Summary />
                {this.props.children}
            </div>
        );
    }
}

BuilderView.displayName = 'BuilderView';
BuilderView.defaultProps = defaultProps;
BuilderView.propTypes = propTypes;

export default BuilderView;
