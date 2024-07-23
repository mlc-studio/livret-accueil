import { Field } from "payload";

export const Wifi: Field = {
    name: "wifi",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values) => values.select.modules === "wifi",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "password",
            type: "text",
            required: true,
        },
    ]
};