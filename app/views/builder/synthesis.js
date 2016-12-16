import React, { Component, PropTypes } from 'react';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';
import downloadData from '../../utilities/file-download';
import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

class SynthesisView extends Component {

    handleValidate() {
        const doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
        const html = doc.documentElement;
        // Head
        const head = doc.createElement('head');
        const title = doc.createElement('title');
        title.innerText = 'Character sheet';
        head.appendChild(title);
        const style = doc.createElement('style');
        let rules = '';
        for (let i = 0; i < document.styleSheets.length; i++) {
            const styleSheet = document.styleSheets[i];
            for (let j = 0; j < styleSheet.cssRules.length; j++) {
                rules += styleSheet.cssRules[j].cssText;
                rules += '\n';
            }
        }
        style.innerHTML = rules;
        head.appendChild(style);
        html.appendChild(head);

        // Head
        const body = doc.createElement('body');
        body.innerHTML = this.refs['character-sheet'].outerHTML;
        html.appendChild(body);
        downloadData(html.outerHTML, 'character.html', 'text/html');
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className={'custom-font website-title'}>{translate('workflow.state.synthesis')}</h3>
                </div>
                <div ref='character-sheet' data-dd={'character-sheet'}>
                    <h4>{'loool'}</h4>
                    <i className="iconClass halfElf mdl-list__item-avatar" style={{ display: 'block' }}></i>
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