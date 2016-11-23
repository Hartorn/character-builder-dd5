export default [
    { 
        name: 'forestGnome',
        race: 'gnome',
        size: 'S', // Small
        speed: 25, // feet per round
        age: [20, 220, 420, 500], // Age category
        languages: ['common', 'gnomish'],
        abilityScoreBonuses: {
            DEX: 1,
            INT: 2
        },
        racials: ['darkvision', 'gnomeCunning', 'naturalIllusionist', 'speakSmallBeasts'],
        spells: {
            ability: 'INT',
            0: {
                list: ['minorIllusion'] 
            }
        }
    },
    { 
        name: 'rockGnome',
        race: 'gnome',
        size: 'S', // Small
        speed: 25, // feet per round
        age: [20, 220, 420, 500], // Age category
        languages: ['common', 'gnomish'],
        abilityScoreBonuses: {
            CON: 1,
            INT: 2
        },
        racials: ['darkvision', 'gnomeCunning', 'artificerLore', 'tinker'],
        tools: { 
            count: 1,
            list: ['tinkersTools']
        }
    },
    { 
        name: 'deepGnome',
        race: 'gnome',
        size: 'S', // Small
        speed: 25, // feet per round
        age: [25, 100, 175, 250], // Age category
        languages: ['common', 'gnomish', 'undercommon'],
        abilityScoreBonuses: {
            DEX: 1,
            INT: 2
        },
        racials: ['superiorDarkvision', 'gnomeCunning', 'stoneCamouflage']
    }
];