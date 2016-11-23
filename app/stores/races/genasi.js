export default [
    { 
        name: 'airGenasi',
        race: 'genasi',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 53, 87, 120], // Age category
        languages: ['common', 'primordial'],
        abilityScoreBonuses: {
            CON: 2,
            DEX: 1
        },
        racials: ['unendingBreath', 'mingleWithTheWind'],
        spells: {
            ability: 'CON',
            2: {
                list: ['levitate'] 
            }
        }
    },
    { 
        name: 'earthGenasi',
        race: 'genasi',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 53, 87, 120], // Age category
        languages: ['common', 'primordial'],
        abilityScoreBonuses: {
            CON: 2,
            STR: 1
        },
        racials: ['earthWalk', 'mergeWithStone'],
        spells: {
            ability: 'CON',
            2: {
                list: ['passWithoutTrace'] 
            }
        }
    },
    { 
        name: 'fireGenasi',
        race: 'genasi',
        size: 'M', // Medium
        speed: 30, // feet per round
        age: [20, 53, 87, 120], // Age category
        languages: ['common', 'primordial'],
        abilityScoreBonuses: {
            CON: 2,
            INT: 1
        },
        racials: ['darkvision', 'fireResistance', 'reachToTheBlaze'],
        spells: {
            ability: 'CON',
            0: {
                list: ['produceFlame']
            },
            1: {
                list: ['burningsHands'],
                restrictionLvl: 3
            }
        },
        resistance: ['fire']
    },
    { 
        name: 'waterGenasi',
        race: 'genasi',
        size: 'M', // Medium
        speed: 30, // feet per round
        swim: 30,
        age: [20, 53, 87, 120], // Age category
        languages: ['common', 'primordial'],
        abilityScoreBonuses: {
            CON: 2,
            WIS: 1
        },
        racials: ['darkvision', 'acidResistance', 'amphibious', 'callToTheWave'],
        spells: {
            ability: 'CON',
            0: {
                list: ['shapeWater']
            },
            1: {
                list: ['createOrDestroyWater'],
                restrictionLvl: 3,
                spellLvl: 2
            }
        },
        resistance: ['acid']
    }

];