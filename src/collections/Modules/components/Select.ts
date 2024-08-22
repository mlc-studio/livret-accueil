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
                    en: 'The type of module to display',
                    fr: 'Le type de module à afficher',
                }
            },
            name: 'modules',
            label: {
                en: 'Modules',
                fr: 'Modules',
            },
            type: 'select',
            options: allTypes,
            defaultValue: allTypes[0].value,
            required: true,
        }
    ]
};