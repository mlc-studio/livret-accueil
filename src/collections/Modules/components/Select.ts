import { Field } from "payload";

const allTypes = [
    { label: { en: 'Custom component', fr: 'Composant sur mesure' }, value: 'constructor' },
    { label: { en: 'External link', fr: 'Lien externe' }, value: 'external-link' },
    { label: { en: 'Commandation', fr: 'Recommandation' }, value: 'commandation' },
    { label: { en: 'Wifi', fr: 'Wifi' }, value: 'wifi' },
    { label: { en: 'Digicode', fr: 'Digicode' }, value: 'digicode' },
];

export const Select: Field = {
    name: "select",
    label: {
        en: 'Select',
        fr: 'Sélectionner',
    },
    type: "group",
    fields: [
        {
            admin: {
                description: {
                    en: 'The action type to be added to this button',
                    fr: 'Le type d\'action à ajouter à ce bouton',
                }
            },
            name: 'modules',
            label: {
                en: 'The type of action',
                fr: 'Le type d\'action',
            },
            type: 'select',
            options: allTypes,
            defaultValue: allTypes[0].value,
            required: true,
        }
    ]
};