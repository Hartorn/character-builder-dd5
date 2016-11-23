export default [
    { 
        name: 'halfOrc',
        race: 'halfOrc',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [15, 35, 55, 75], // Age category
        languages: ['common', 'orc'],
        abilityScoreBonuses: {
            STR: 2,
            CON: 1
        },
        racials: ['darkvision', 'menacing', 'relentlessEndurance', 'savageAttacks'],
        skills: { 
            count: 1,
            list: ['intimidation']
        }
    }
];