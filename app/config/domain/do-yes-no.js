import { component as SelectRadio } from 'focus-components/components/input/radio';
import { translate } from 'focus-core/translation';

export default {
    SelectComponent: SelectRadio,
    refContainer: { yesNoList: [{ code: true, label: 'select.oui' }, { code: false, label: 'select.non' }] },
    listName: 'yesNoList',
    formatter: translate
};
