import React, { Component, PropTypes } from 'react';
import dispatcher from 'focus-core/dispatcher';
import Button from 'focus-components/components/button';

import { navigate } from '../../utilities/router';

import backgrounds from '../../stores/backgrounds';

import Article from '../../components/article';
import Section from '../../components/article/section';

const defaultProps = {

};

const propTypes = {
    backgroundName: PropTypes.string.isRequired
};

class BackgroundShortDetail extends Component {

    selectBackground() {
        dispatcher.handleViewAction({
            data: { builderBackground: backgrounds.filter(elt => elt.name === this.props.backgroundName)[0] },
            type: 'update'
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Button label={'action.validate'} onClick={() => {
                        this.selectBackground();
                        navigate('generator/level');
                    }
                    } />
                </div>
                <Article title={'backgrounds.' + this.props.backgroundName}>
                    <Section title={'Lorem ipsum dolor'}>
                        <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                        <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                    </Section>
                </Article>
            </div>
        );
    }
}

BackgroundShortDetail.displayName = 'BackgroundShortDetail';
BackgroundShortDetail.defaultProps = defaultProps;
BackgroundShortDetail.propTypes = propTypes;

export default BackgroundShortDetail;
