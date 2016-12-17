import React, { Component } from 'react'

import Sheet1 from './sheet1'
import Sheet2 from './sheet2'
import Sheet3 from './sheet3'

class CharacterSheet extends Component {
    render() {
        return (
            <div data-dd='character-sheet'>
                <Sheet1 />
                <Sheet2 />
                <Sheet3 />
            </div>
        );
    }
}
export default CharacterSheet;