import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';

import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

class LevelView extends Component {

    componentWillMount() {
        this.setState({
            level:this.props.level
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            level:nextProps.level
        });
    }

    handleValidate() {
        dispatcher.handleViewAction({
            data: { builderLevel: this.state.level },
            type: 'update'
        });
        navigate('generator/class');
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className={'custom-font'}>{translate('generator.levelTitle')}</h3>
                </div>
                <div>
                    <input
                        type="number"
                        step="1"
                        value={this.state.level}
                        min="1"
                        max="20"
                        onChange={(event) => this.setState({ level: event.target.value})}
                        />
                </div>
                <br />
                <div>
                    <Button label={'action.validate'} onClick={() => this.handleValidate()} />
                </div>
            </div>
        );
    }
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