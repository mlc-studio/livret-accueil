import { Field } from "payload";

export const Digicode: Field = {
    name: "digicode",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "digicode",
        description: {
            en: "Add a digicode to your module",
            fr: "Ajoutez un digicode à votre module",
        },
    },
    label: {
        en: "Digicode",
        fr: "Digicode",
    },
    fields: [
        {
            name: "code",
            label: {
                en: "Code",
                fr: "Code",
            },
            type: "text",
            admin: {
                description: {
                    en: "The code to enter",
                    fr: "Le code à entrer",
                }
            },
            required: true,
        },
        {
            name: "instructions",
            type: "textarea",
            admin: {
                description: {
                    en: "Additional instructions for using the digicode",
                    fr: "Instructions supplémentaires pour utiliser le digicode",
                },
            },
            localized: true,
            required: false,
        }
    ]
};