import React from 'react'

const Sheet1 = (props) => {
    return (
        <div className='sheet'>
            <div data-dd='character-sheet header-1'>
                <div className='character-name absolute'>Milo Karnupito</div>
                <div className='level-class-name absolute'>Magicien 5 / Guerrier 3</div>
                <div className='historique-name absolute'>Criminel</div>
                <div className='player-name absolute'>Hartorn</div>
                <div className='race-name absolute'>Halfelin</div>
                <div className='alignement-name absolute'>Chaotique bon</div>
                <div className='xp-name absolute'>10 550</div>
            </div>
        </div>
    );
}

export default Sheet1;