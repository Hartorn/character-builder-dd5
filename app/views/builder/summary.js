import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';

import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

const SummaryView = (props) => {
    return (
        <div className={'workflow-container builder-summary'}>
            {JSON.stringify(props)}
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
            level: GeneratorStore.getBuilderLevel() || 1,
            class: GeneratorStore.getBuilderClass() || {},
            abilities: GeneratorStore.getBuilderAbilities() || {},
            proficiency: GeneratorStore.getBuilderProficiency() || {}
        };
    }
);

export default connect(SummaryView);