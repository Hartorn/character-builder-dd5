import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';

import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

const LevelView = ({level}) => {
    return (
        <div>
            <div>
                <h3 className={'custom-font'}>{translate('generator.levelTitle')}</h3>
            </div>
            <div>
                <input
                    type="number"
                    step="1"
                    value={level}
                    min="1"
                    max="20"
                    onChange={(event) => {
                        dispatcher.handleViewAction({
                            data: { builderLevel: event.target.value },
                            type: 'update'
                        });
                    }
                    }
                    />
            </div>
            <br />
            <div>
                <Button label={'action.validate'} onClick={() => navigate('generator/class')} />
            </div>
        </div>
    );
}

LevelView.displayName = 'LevelView';
LevelView.propTypes = {

};

const connect = connectToStore(
    [
        {
            store: GeneratorStore,
            properties: ['builderLevel']
        }
    ],
    () => {
        return {
            level: GeneratorStore.getBuilderLevel() || 1
        };
    }
);

export default connect(LevelView);