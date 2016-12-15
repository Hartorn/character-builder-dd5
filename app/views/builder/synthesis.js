import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';

import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

class SynthesisView extends Component {

    handleValidate() {
        navigate('generator/class');
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className={'custom-font website-title'}>{translate('workflow.state.synthesis')}</h3>
                </div>
                <div data-dd={'character-sheet'}>
                    <h4>{'loool'}</h4>
                    <div>{'Test'}</div>
                </div>
                <div>
                    <Button label={'action.validate'} onClick={() => this.handleValidate()} />
                </div>
            </div>
        );
    }
}

SynthesisView.displayName = 'LevelView';
SynthesisView.propTypes = {

};

export default SynthesisView;