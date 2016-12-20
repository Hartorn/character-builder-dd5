import React from 'react'

const Sheet1 = (props) => {
    return (
        <div className='sheet'>
            <div data-dd='character-sheet header-1' className='absolute'>
                <div className='character-name absolute'>Milo Karnupito</div>
                <div className='level-class-name absolute'>Magicien 5 / Guerrier 3</div>
                <div className='historique-name absolute'>Criminel</div>
                <div className='player-name absolute'>Hartorn</div>
                <div className='race-name absolute'>Halfelin</div>
                <div className='alignement-name absolute'>Chaotique bon</div>
                <div className='xp-name absolute'>10 550</div>
            </div>
            <div data-dd='column-1' className='absolute'>
                <div data-dd='ability-container' className='absolute'>
                    <div data-dd='empty-ability'></div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Force</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Dexterité</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Constitution</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Intelligence</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Sagesse</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                    <div data-dd='ability'>
                        <div data-dd='ability-label'>Charisme</div>
                        <div data-dd='ability-value'>15</div>
                        <div data-dd='ability-bonus'>+2</div>
                    </div>
                </div>
                <div data-dd='perception-container' className='absolute'>
                    <div data-dd='perception-value'>15</div>
                    <div data-dd='perception-label'>Perception passive (Sagesse)</div>
                </div>
                <div data-dd='proficiencies-languages' className='absolute'>
                </div>
            </div>
            <div data-dd='column-2' className='absolute'>
                <div data-dd='inspiration'>
                </div>
                <div data-dd='proficiency-bonus'>
                </div>
                <div data-dd='saving-throws'>
                </div>
                <div data-dd='skills'>
                </div>
            </div>
            <div data-dd='column column-3' className='absolute'>
                <div data-dd='ca-init-speed'>
                    <div data-dd='ca'>
                    </div>
                    <div data-dd='init'>
                    </div>
                    <div data-dd='speed'>
                    </div>
                </div>
                <div data-dd='health-point'>
                </div>
                <div data-dd='temporary-health-point'>
                </div>
                <div data-dd='hp-dice-death'>
                    <div data-dd='hp-dice'>
                    </div>
                    <div data-dd='death'>
                    </div>
                </div>
                <div data-dd='attack-spell'>
                </div>
                <div data-dd='equipement'>
                </div>
            </div>
            <div data-dd='column column-4' className='absolute'>
                <div data-dd='background'>
                    <div data-dd='traits'>
                    </div>
                    <div data-dd='ideal'>
                    </div>
                    <div data-dd='link'>
                    </div>
                    <div data-dd='default'>
                    </div>
                </div>
                <div data-dd='capacities'>
                </div>
            </div>
        </div>
    );
}

export default Sheet1;