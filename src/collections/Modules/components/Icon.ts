import { Field } from "payload";

export const Icon: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        name: "icon",
        type: "upload",
        relationTo: "icons",
        required: true,
    },
]