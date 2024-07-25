import { Field } from "payload";

const allTypes = [
    { label: 'Constructor', value: 'constructor' },
    { label: 'WiFi', value: 'wifi' },
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