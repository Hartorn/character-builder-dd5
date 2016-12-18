import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Button from 'focus-components/components/button';

import dispatcher from 'focus-core/dispatcher';
import { navigate } from '../../utilities/router';
import { exportHtml } from '../../utilities/export-helper';
import { translate } from 'focus-core/translation';
import connectToStore from 'focus-components/behaviours/store/connect';

import GeneratorStore from '../../stores/builder';

import CharacterSheet from '../character-sheet';

class SynthesisView extends Component {
    state = {
        showPreview: false
    }

    exportHtmlAction() {
        const charSt = findDOMNode(this.refs['character-sheet']);
        exportHtml(charSt, document.styleSheets, 'Feuille de personnage', 'character-sheet.html');
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className={'custom-font website-title'}>{translate('workflow.state.synthesis')}</h3>
                </div>
                <div>
                    <Button label={'action.exportHtml'} onClick={() => this.exportHtmlAction()} />
                </div>
                <br />
                <div>
                    <Button label={`${this.state.showPreview ? 'action.hidePreview' : 'action.showPreview'}`} onClick={() => this.setState({ showPreview: !this.state.showPreview })} />
                </div>
                <CharacterSheet ref='character-sheet' isVisible={!this.state.showPreview} />
            </div>
        );
    }
}

SynthesisView.displayName = 'SynthesisView';
SynthesisView.propTypes = {

};

export default SynthesisView;