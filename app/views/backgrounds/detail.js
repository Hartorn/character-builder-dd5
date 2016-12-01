import React, { Component, PropTypes } from 'react';
import Article from '../../components/article';
import Section from '../../components/article/section';

const defaultProps = {

};

const propTypes = {
    backgroundName: PropTypes.string.isRequired
};

class BackgroundDetail extends Component {

    render() {
        return (
            <div>
                <div>
                    <Article title={'races.' + this.props.backgroundName}>
                        <Section title={'Lorem ipsum dolor'}>
                            <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                            <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                        </Section>
                        <Section title={'Praesent sit amet lectus'}>
                            <p>{'Praesent sit amet lectus iaculis, euismod turpis sit amet, cursus erat. Ut rhoncus fermentum sem efficitur pharetra. Ut sed metus nec orci tempus semper a eget magna. Suspendisse non ligula posuere, mattis lacus quis, mollis tortor. Vestibulum convallis posuere sem sit amet bibendum. Nunc non nisl ac ipsum posuere hendrerit pellentesque sed libero. Aenean accumsan bibendum vulputate. Maecenas vel facilisis diam, sit amet gravida risus. In eleifend sem eu erat mollis bibendum. Sed interdum auctor nibh, vel finibus libero auctor a. '}</p>
                        </Section>
                        <Section title={'Lorem ipsum dolor'}>
                            <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                            <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                        </Section>
                        <Section title={'Lorem ipsum dolor'}>
                            <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                            <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                            <p> {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum vehicula ligula, ut ultrices dui molestie at. Suspendisse potenti. Mauris commodo gravida semper. Pellentesque porta ultrices nisi, non pellentesque neque iaculis id. Sed finibus quam nec nisi mollis, malesuada placerat nisl laoreet. Nullam sit amet condimentum ligula. Nam volutpat gravida turpis et aliquam.'}</p>
                            <p> {' Aenean varius vestibulum pretium. Donec lacinia magna ultrices placerat consectetur. Nulla facilisi. Fusce ex mauris, efficitur non ornare lacinia, ornare nec turpis. Sed justo purus, finibus non venenatis eget, ultricies a turpis. Etiam quam nisl, ultrices nec convallis a, semper a lectus. Ut quam tortor, dictum in sollicitudin eget, elementum maximus ex. Sed feugiat dignissim nunc, et ornare tellus laoreet sed. Mauris ac purus condimentum, molestie nunc eget, imperdiet tellus. Sed at ligula sed turpis bibendum vulputate sed id lectus. Integer placerat diam non pulvinar gravida. Fusce accumsan tellus vestibulum, consectetur leo ultricies, interdum augue. Nullam nec justo eu tortor dignissim fermentum. Aliquam tincidunt est ac tortor feugiat, at bibendum mi lobortis. '}</p>
                        </Section>
                    </Article>
                </div>
            </div>
        );
    }
}

BackgroundDetail.displayName = 'BackgroundDetail';
BackgroundDetail.defaultProps = defaultProps;
BackgroundDetail.propTypes = propTypes;

export default BackgroundDetail;
