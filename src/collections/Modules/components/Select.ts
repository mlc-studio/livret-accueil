import { Field } from "payload";

const allTypes = [
    { label: 'Constructor', value: 'constructor' },
    { label: 'External Link', value: 'external-link' },
    { label: 'Commandation', value: 'commandation' },
    { label: 'WiFi', value: 'wifi' },
    { label: 'Digicode', value: 'digicode' },
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