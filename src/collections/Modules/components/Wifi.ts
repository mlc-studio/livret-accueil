import { Field } from "payload";

export const Wifi: Field = {
    name: "wifi",
    type: "group",
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "wifi",
        description: {
            en: 'Add a WiFi network to your module, The Wifi module may be difficult to configure. Please refer to the documentation for more information.',
            fr: 'Ajoutez un réseau WiFi à votre module, Le module Wifi peut être difficile à configurer. Veuillez vous référer à la documentation pour plus d\'informations.'
        },
    },
    fields: [
        {
            name: "SSID",
            label: {
                en: 'Network Name',
                fr: 'Nom du réseau',
            },
            type: "text",
            admin: {
                description: {
                    en: 'The name of the network',
                    fr: 'Le nom du réseau',
                },
            },
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'The password for the network',
                    fr: 'Le mot de passe du réseau',
                },
            },
            name: "password",
            label: {
                en: 'Password',
                fr: 'Mot de passe',
            },
            type: "text",
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'The security type of the network, if you are unsure, please refer to the documentation or leave the default value.',
                    fr: 'Le type de sécurité du réseau, si vous n\'êtes pas sûr, veuillez vous référer à la documentation ou laissez la valeur par défaut.',
                }
            },
            name: "security",
            label: {
                en: 'Security Type',
                fr: 'Type de sécurité',
            },
            type: "select",
            options: [
                { label: "WEP", value: "wep" },
                { label: "WPA", value: "wpa" },
                { label: "WPA2", value: "wpa2" },
                { label: "WPA3", value: "wpa3" },
            ],
            defaultValue: "wpa2",
            required: true,
        },
        {
            admin: {
                description: {
                    en: 'If the network is hidden, please check this box.',
                    fr: 'Si le réseau est caché, veuillez cocher cette case.',
                }
            },
            name: "hidden",
            label: {
                en: 'Hidden Network',
                fr: 'Réseau caché',
            },
            type: "checkbox",
        }
    ]
};