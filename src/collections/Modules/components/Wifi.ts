import { Field } from "payload";

export const Wifi: Field = {
    name: "wifi",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "wifi",
        description: "The Wifi module may be difficult to configure. Please refer to the documentation for more information.",
    },
    fields: [
        {
            name: "SSID",
            type: "text",
            admin: {
                description: "The name of the network",
            },
            required: true,
        },
        {
            name: "password",
            type: "text",
            required: true,
        },
        {
            name: "security",
            type: "select",
            options: [
                { label: "WEP", value: "wep" },
                { label: "WPA", value: "wpa" },
                { label: "WPA2", value: "wpa2" },
                { label: "WPA3", value: "wpa3" },
            ],
            required: true,
        },
        {
            name: "hidden",
            type: "checkbox",
            label: "Hidden Network",
        }
    ]
};