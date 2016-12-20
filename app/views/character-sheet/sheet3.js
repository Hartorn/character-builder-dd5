import React from 'react'

const Sheet3 = (props) => {
    return (
        <div className='sheet'>
            <div data-dd='character-sheet header-3'>
                <div className='spellcaster-name absolute'>Magicien (INT)</div>
                <div className='spellcaster-label label absolute'><div>CLASSE DE LANCEUR DE SORTS </div><div>(CARACTÉRISTIQUE POUR LANCER DES SORTS)</div></div>
                <div className='spell-memorisation-name absolute'>10</div>
                <div className='spell-memorisation-label label absolute'>SORTS À MÉMORISER</div>
                <div className='saving-throw-name absolute'>15</div>
                <div className='saving-throw-label label absolute'>DD DE SAUVEGARDE DES SORTS</div>
                <div className='spell-attack-name absolute'>5</div>
                <div className='spell-attack-label label absolute'>BONUS D'ATTAQUE</div>
            </div>
            <div data-dd='column column-11' className='absolute'>
            </div>
            <div data-dd='column column-3' className='absolute'>
            </div>
            <div data-dd='column column-4' className='absolute'>
            </div>
        </div>
    );
}

export default Sheet3;