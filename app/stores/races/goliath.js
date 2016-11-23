export default [
    { 
        name: 'goliath',
        race: 'goliath',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 47, 74, 100], // Age category
        languages: ['common', 'giant'],
        abilityScoreBonuses: {
            STR: 2,
            CON: 1
        },
        racials: ['naturalAthlete', 'stoneEndurance', 'powerfulBuild', 'mountainBorn'],
        skills: { 
            count: 1,
            list: ['athletics']
        }
    }
];