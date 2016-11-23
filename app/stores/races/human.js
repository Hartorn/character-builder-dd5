export default [
    { 
        name: 'human',
        race: 'human',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 40, 60, 80], // Age category
        languages: ['common', 'RND'],
        abilityScoreBonuses: {
            STR: 1,
            DEX: 1,
            CON: 1,
            INT: 1,
            WIS: 1,
            CHA: 1
        }
    },
    { 
        name: 'human-feat',
        race: 'human',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 40, 60, 80], // Age category
        languages: ['common', 'RND'],
        abilityScoreBonuses: {
            RND: [1,1]
        },
        feats: 1,
        skills: { 
            count: 1
        }
    }
];