import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';

import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

class AbilitiesView extends Component {

    componentWillMount() {
        this.setState({
            abilities: this.props.abilities
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            abilities: nextProps.abilities
        });
    }

    handleValidate() {
        dispatcher.handleViewAction({
            data: { builderAbilities: this.state.abilities },
            type: 'update'
        });
        navigate('generator/classAbilities');
    }

    handleOnChange(fieldName) {
        return event => {
            const newState = { ...this.state.abilities };
            newState[fieldName] = event.target.value;
            this.setState({
                abilities: newState
            });
        }
    }

    renderField(fieldName) {
        return (
            <div>
                <label>{translate('abilities.field.' + fieldName)}</label>
                <input
                    type="number"
                    step="1"
                    value={this.state.abilities[fieldName]}
                    min="1"
                    max="18"
                    onChange={this.handleOnChange(fieldName)}
                    />
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className={'custom-font  website-title'}>{translate('workflow.state.caracs')}</h3>
                </div>
                <div>
                    {this.renderField('STR')}
                    {this.renderField('DEX')}
                    {this.renderField('CON')}
                    {this.renderField('INT')}
                    {this.renderField('WIS')}
                    {this.renderField('CHA')}
                </div>
                <br />
                <div>
                    <Button label={'action.validate'} onClick={() => this.handleValidate()} />
                </div>
            </div>
        );
    }
}

AbilitiesView.displayName = 'AbilitiesView';
AbilitiesView.propTypes = {

};

const connect = connectToStore(
    [
        {
            store: GeneratorStore,
            properties: ['builderAbilities']
        }
    ],
    () => {
        return {
            abilities: GeneratorStore.getBuilderAbilities() || { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 }
        };
    }
);

export default connect(AbilitiesView);