import { CoreStore } from 'focus-core/store';

const characterBuilderStore = new CoreStore({
    definition: {
        builderRace: 'builderRace',
        builderBackground: 'builderBackground',
        builderLevel: 'builderLevel',
        builderClass: 'builderClass',
        builderAbilities: 'builderAbilities',
        builderProficiency: 'builderProficiency',
        builderOptions: 'builderOptions',
        builderHealthPoints: 'builderHealthPoints',
        builderSpells: 'builderSpells',
        builderEquipment: 'builderEquipment',
        builderClassAbilities: 'builderClassAbilities',
        builderPersonnalisation: 'builderPersonnalisation',
        builderSynthesis: 'builderSynthesis'
    }
});

export default characterBuilderStore;
