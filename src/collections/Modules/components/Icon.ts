import { Field } from "payload";

export const Icon: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        name: "icon",
        type: "relationship",
        relationTo: "icons",
        required: true,
    },
]