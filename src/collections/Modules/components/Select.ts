import { Field, FieldHook } from "payload";

const allTypes = [
    { label: 'WiFi', value: 'wifi' },
    { label: 'Accueil', value: 'home' },
    { label: 'Digicode', value: 'pin-code' },
];

export const Select: Field = {
    name: "select",
    type: "group",
    fields: [
        {
            name: 'modules',
            type: 'select',
            options: allTypes,
        }
    ]
};