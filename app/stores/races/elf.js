export default [
    { 
        name: 'highElf',
        race: 'elf',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [25, 450, 650, 750], // Age category
        languages: ['common', 'elvish', 'RND'],
        abilityScoreBonuses: {
            DEX: 2,
            INT: 1
        },
        racials: ['darkvision', 'keenSenses', 'feyAncestry', 'trance', 'elfWeaponTraining', 'cantrips', 'additionalLanguage'],
        skills: { 
            count: 1,
            list: ['perception']
        },
        spells: {
            ability: 'INT',
            type: 'wizard', 
            0: {
                list: ['RND'] 
            }
        },
        weapons: ['shortBow', 'longBow', 'shortSword', 'longSword']
    },
    { 
        name: 'woodElf',
        race: 'elf',
        size: 'M', // Medium
        speed: 35, // feet per round
        age: [25, 450, 650, 750], // Age category
        languages: ['common', 'elvish'],
        abilityScoreBonuses: {
            DEX: 2,
            WIS: 1
        },
        racials: ['darkvision', 'keenSenses', 'feyAncestry', 'trance', 'elfWeaponTraining', 'maskOfTheWild', 'floatingFoot'],
        skills: { 
            count: 1,
            list: ['perception']
        },
        weapons: ['shortBow', 'longBow', 'shortSword', 'longSword']
    },
    { 
        name: 'darkElf',
        race: 'elf',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [25, 450, 650, 750], // Age category
        languages: ['common', 'elvish'],
        abilityScoreBonuses: {
            DEX: 2,
            CHA: 1
        },
        racials: ['superiorDarkvision', 'keenSenses', 'feyAncestry', 'trance', 'elfWeaponTraining', 'sunlightSensibility', 'drowMagic'],
        skills: { 
            count: 1,
            list: ['perception']
        },
        weapons: ['rapier', 'shortSword', 'handCrossbow'],
        spells: {
            ability: 'CHA',
            0: {
                list: ['dancingLights'] 
            },
            1: {
                list: ['faerieFire'],
                restrictionLvl: 3
            },
            2: {
                list: ['darkness'],
                restrictionLvl: 5
            }
        }
    }
];