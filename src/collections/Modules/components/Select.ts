import { Field } from "payload";

const allTypes = [
    { label: 'Constructor', value: 'constructor' },
    { label: 'External Link', value: 'external-link' },
    { label: 'WiFi', value: 'wifi' },
    { label: 'Digicode', value: 'digicode' },
];

export const Select: Field = {
    name: "select",
    type: "group",
    fields: [
        {
            name: 'modules',
            type: 'select',
            options: allTypes,
            defaultValue: allTypes[0].value,
            required: true,
        }
    ]
};