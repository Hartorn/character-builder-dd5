import React from 'react'

const Sheet2 = (props) => {
    return (
        <div className='sheet'>
            <div data-dd='character-sheet header-2'>
                <div className='character-name absolute'>Milo Karnupito</div>
                <div className='age-name absolute'>150 ans</div>
                <div className='height-name absolute'>1.80m</div>
                <div className='weight-name absolute'>80kg</div>
                <div className='eyes-name absolute'>Bleux</div>
                <div className='skin-name absolute'>Brun doré</div>
                <div className='hair-name absolute'>Dreadlocks noirs</div>
            </div>
            <div data-dd='column-11 column' className='absolute'>
                <div data-dd='physical-appearance' className='absolute'></div>
                <div data-dd='past-story' className='absolute'></div>
            </div>
            <div data-dd='column-23 column' className='absolute'>
                <div data-dd='allies-organisation' className='absolute'></div>
                <div data-dd='additional-capacities' className='absolute'></div>
                <div data-dd='treasures' className='absolute'></div>
            </div>
        </div>
    );
}

export default Sheet2;