import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import { navigate } from '../../utilities/router';
import GeneratorStore from '../../stores/builder';

const caracRender = (name, abilities) => (<div><label>{translate('abilities.field.' + name)}</label>{abilities[name]}</div>)

const SummaryView = (props) => {
    return (
        <div>
            <div className={'workflow-container builder-summary'}>
                {props.race.name &&
                    <div className={'race-container summary-elt'} >
                        <h5>{translate('races.' + props.race.name)}</h5>
                    </div>
                }
                {props.background.name &&
                    <div className={'background-container summary-elt'} >
                        <h5>{translate('backgrounds.' + props.background.name)}</h5>
                    </div>
                }
                {!!props.level && props.level > 0 &&
                    <div className={'level-container summary-elt'} >
                        <h5>{translate('generator.levelTitle') + ' ' + props.level}</h5>
                    </div>
                }
                {props.class.name &&
                    <div className={'class-container summary-elt'} >
                        <h5>{translate('classes.' + props.class.name)}</h5>
                    </div>
                }
                {props.abilities.STR &&
                    <div className={'class-container summary-elt'} >
                        <h5>{translate('workflow.state.caracs')}</h5>
                        {caracRender('STR', props.abilities)}
                        {caracRender('DEX', props.abilities)}
                        {caracRender('CON', props.abilities)}
                        {caracRender('INT', props.abilities)}
                        {caracRender('WIS', props.abilities)}
                        {caracRender('CHA', props.abilities)}
                    </div>
                }
            </div>
            <div>{JSON.stringify(props)}</div>
        </div>
    );
}

SummaryView.displayName = 'SummaryView';
SummaryView.propTypes = {

};

const connect = connectToStore(
    [
        {
            store: GeneratorStore,
            properties: ['builderRace', 'builderBackground', 'builderLevel', 'builderClass', 'builderAbilities', 'builderProficiency', 'builderOptions', 'builderHealthPoints', 'builderSpells', 'builderEquipment', 'builderPersonnalisation']
        }
    ],
    () => {
        return {
            race: GeneratorStore.getBuilderRace() || {},
            background: GeneratorStore.getBuilderBackground() || {},
            level: GeneratorStore.getBuilderLevel() || 0,
            class: GeneratorStore.getBuilderClass() || {},
            abilities: GeneratorStore.getBuilderAbilities() || {},
            proficiency: GeneratorStore.getBuilderProficiency() || {}
        };
    }
);

export default connect(SummaryView);