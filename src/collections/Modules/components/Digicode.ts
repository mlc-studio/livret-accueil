import { Field } from "payload";

export const Digicode: Field = {
    name: "digicode",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "digicode",
        description: "Configure the access code for your travelers.",
    },
    fields: [
        {
            name: "code",
            type: "text",
            admin: {
                description: "Enter the access code",
            },
            required: true,
        },
        {
            name: "instructions",
            type: "textarea",
            admin: {
                description: "Additional instructions for using the digicode",
            },
            required: false,
        }
    ]
};