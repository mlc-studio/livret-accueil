import { Field } from "payload";

export const ExternalLink: Field = {
    name: 'externalLink',
    type: 'group',
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "external-link"
    },
    fields: [
        {
            name: 'url',
            type: 'text',
            required: true,
        },
    ]
};