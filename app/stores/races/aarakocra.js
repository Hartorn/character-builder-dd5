export default [
    { 
        name: 'aarakocra',
        race: 'aarakocra',
        size: 'M', // Medium
        speed: 25, // feet per round
        flight: 50, // flight speed
        age: [3, 12, 21, 30], // Age category
        languages: ['common', 'aarakocra', 'auran'],
        abilityScoreBonuses: {
            DEX: 2,
            WIS: 1
        },
        unarmedStrike: {
            damage: '1d4',
            type: 'slashing',
            proficient: true
        }
    }
];