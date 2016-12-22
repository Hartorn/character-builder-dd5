import React, { Component, PropTypes } from 'react';
import dispatcher from 'focus-core/dispatcher';
import Button from 'focus-components/components/button';
import { component as Popin } from 'focus-components/application/popin';

import { translate } from 'focus-core/translation';

import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

import { navigate } from '../../utilities/router';

import classes from '../../stores/classes';

import Article from '../../components/article';
import Section from '../../components/article/section';

const defaultProps = {

};

const propTypes = {
    className: PropTypes.string.isRequired
};

class ClassShortDetail extends Component {
    state = {
        displayPopin: false,
        level: 1
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.className !== this.props.className) {
            this.setState({
                displayPopin: false,
                level: 1
            })
        }
    }


    selectClass() {
        const classes = this.props.class.slice();
        const currentClassName = this.props.className;
        let currentClass = classes.find(item => item.name === this.props.className);
        if (!currentClass) {
            currentClass = { name: this.props.className };
            classes.push(currentClass);
        }
        currentClass.level = this.state.level;

        dispatcher.handleViewAction({
            data: { builderClass: classes },
            type: 'update'
        });
        this.setState({
            displayPopin: false
        });
    }

    onChangeLevel(newValue) {
        this.setState({
            level: newValue
        })
    }

    resetClass() {
        dispatcher.handleViewAction({
            data: { builderClass: [] },
            type: 'update'
        });
    }

    showPopin() {
        this.setState({
            displayPopin: true
        });
    }

    hidePopin() {
        this.setState({
            displayPopin: false
        });
    }

    render() {

        const hasLevel = this.props.class && this.props.class.length > 0;
        return (
            <div>
                <div className='button-bar'>
                    <Button label={'action.select'} onClick={() => {
                        this.setState({
                            displayPopin: true
                        });
                    }
                    } />
                    {hasLevel &&
                        <Button label={'action.reset'} onClick={::this.resetClass} />
                    }
                    {hasLevel &&
                        <Button label={'action.nextStep'} onClick={() => navigate('generator/caracs')} />
                    }
                </div>
                <Article title={'classes.' + this.props.className}>
                    <Section title={'Lorem ipsum dolor'}>
                        <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                        <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                    </Section>
                </Article>
                {this.state.displayPopin && (
                    <Popin open={true} size={'small'} onPopinClose={::this.hidePopin}>
                        <div>
                    <div>{'Quel niveau souhaitez-vous dans la classe : ' + translate('classes.' + this.props.className) + ' ?'}</div>
                    <br />
                    <input
                        type="number"
                        step="1"
                        value={this.state.level}
                        min="1"
                        max="20"
                        onChange={(event) => this.onChangeLevel(event.target.value)}
                        />
                </div>
                <br />
                <Button label={'action.validate'} onClick={::this.selectClass} />
                    </Popin>
        )
    }
            </div>
        );
}
}

ClassShortDetail.displayName = 'ClassShortDetail';
ClassShortDetail.defaultProps = defaultProps;
ClassShortDetail.propTypes = propTypes;

const connect = connectToStore(
    [
        {
            store: GeneratorStore,
            properties: ['builderLevel', 'builderClass']
        }
    ],
    () => {
        return {
            level: GeneratorStore.getBuilderLevel() || 1,
            class: GeneratorStore.getBuilderClass() || []
        };
    }
);

export default connect(ClassShortDetail);