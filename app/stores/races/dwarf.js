export default [
    { 
        name: 'hillDwarf',
        race: 'dwarf',
        size: 'M', // Medium
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'dwarvish'],
        abilityScoreBonuses: {
            CON: 2,
            WIS: 1
        },
        noHeavyArmorSlow: true,
        bonusHp: 1,
        racials: ['darkVision', 'dwarvenResilience', 'dwarvenCombatTraining', 'toolProficiency', 'stonecunning', 'dwarvenToughness' ],
        tools: { 
            count: 1,
            list: ['masonsTools', 'smithstools', 'brewersSupplies']
        },
        skill: [],
        spells: {
        },
        weapons: ['handAxe', 'lightHammer', 'battleAxe', 'warHammer']
    },
    { 
        name: 'mountainDwarf',
        race: 'dwarf',
        size: 'M', // Medium
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'dwarvish'],
        abilityScoreBonuses: {
            CON: 2,
            STR: 2
        },
        noHeavyArmorSlow: true,
        racials: ['darkVision', 'dwarvenResilience', 'dwarvenCombatTraining', 'toolProficiency', 'stonecunning'],
        tools: { 
            count: 1,
            list: ['masonsTools', 'smithstools', 'brewersSupplies']
        },
        skill: [],
        spells: {
        },
        weapons: ['handAxe', 'lightHammer', 'battleAxe', 'warHammer'],
        armors: ['light', 'medium']
    },
    { 
        name: 'grayDwarf',
        race: 'dwarf',
        size: 'M', // Medium
        speed: 25, // feet per round
        age: [20, 70, 120, 150], // Age category
        languages: ['common', 'dwarvish', 'undercommon'],
        abilityScoreBonuses: {
            CON: 2,
            STR: 1
        },
        noHeavyArmorSlow: true,
        racials: ['superiorDarkvision', 'dwarvenResilience', 'dwarvenCombatTraining', 'toolProficiency', 'stonecunning', 'duergarResilience', 'duergarMagic', 'sunlightSensibility'],
        tools: { 
            count: 1,
            list: ['masonsTools', 'smithsTools', 'brewersSupplies']
        },
        skill: [],
        spells: {
            ability: 'INT',
            0: {
                list: ['dancingLights'] 
            },
            1: {
                list: ['enlargeReduce'],
                restrictionLvl: 3,
                restrictions: ['yourself', 'enlargeOnly', 'noSunlight']
            },
            2: {
                list: ['invisibility'],
                restrictionLvl: 5,
                restrictions: ['yourself', 'noSunlight']
            }
        },
        weapons: ['handAxe', 'lightHammer', 'battleAxe', 'warHammer'],
        armors: ['light', 'medium']
    }

];