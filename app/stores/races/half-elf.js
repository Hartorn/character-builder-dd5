export default [
    { 
        name: 'halfElf',
        race: 'halfElf',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 100, 150, 180], // Age category
        languages: ['common', 'elvish', 'RND'],
        abilityScoreBonuses: {
            CHA: 2,
            RND: [1,1]
        },
        racials: ['darkvision', 'feyAncestry', 'skillVersability'],
        skills: { 
            count: 1
        }
    }
];