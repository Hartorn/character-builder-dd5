export default [
    { 
        name: 'tiefling',
        race: 'tiefling',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 47, 74, 100], // Age category
        languages: ['common', 'infernal'],
        abilityScoreBonuses: {
            CHA: 2,
            INT: 1
        },
        racials: ['darkvision', 'hellishResistance', 'infernalLegacy'],
        spells: {
            ability: 'CHA',
            0: {
                list: ['thaumaturgy'] 
            },
            1: {
                list: ['hellishRebuke'],
                restrictionLvl: 3,
                spellLvl: 2
            },
            2: {
                list: ['darkness'],
                restrictionLvl: 5
            }
        },
        resistance: ['fire']
    }
];