import { Field } from "payload";

export const Commandation: Field = {
    name: "commandation",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "commandation",
        description: "Add your best local recommendations for your travelers.",
    },
    fields: [
        {
            name: 'array',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'titleIcon',
                    label: 'Title Icon',
                    type: 'upload',
                    relationTo: 'icons',
                    required: true,
                },
                {
                    name: 'commandationList',
                    label: 'Commandation List',
                    type: 'relationship',
                    relationTo: 'commandations',
                    hasMany: true,
                }
            ]
        }
    ]
};