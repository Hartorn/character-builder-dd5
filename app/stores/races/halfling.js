export default [
    { 
        name: 'lighfootHalfling',
        race: 'halfling',
        size: 'S', // Short
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'halfling'],
        abilityScoreBonuses: {
            DEX: 2,
            CHA: 1
        },
        racials: ['lucky', 'brave', 'halflingNimbless', 'naturallyStealthy'],
        skill: [],
        spells: {
        },
        weapons: []
    },
    { 
        name: 'stoutHalfling',
        race: 'halfling',
        size: 'S', // Short
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'halfling'],
        abilityScoreBonuses: {
            DEX: 2,
            CHA: 1
        },
        racials: ['lucky', 'brave', 'halflingNimbless', 'stoutResilience'],
        skill: [],
        spells: {
        },
        weapons: []
    },
    { 
        name: 'ghostwiseHalfling',
        race: 'halfling',
        size: 'S', // Short
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'halfling'],
        abilityScoreBonuses: {
            DEX: 2,
            WIS: 1
        },
        racials: ['lucky', 'brave', 'halflingNimbless', 'silentSpeech'],
        skill: [],
        spells: {
        },
        weapons: []
    }
];