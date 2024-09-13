import { Block } from "payload";

const ButtonsBlock: Block = {
    slug: 'buttonsBlock',
    labels: {
        singular: {
            en: 'Buttons Block',
            fr: 'Bloc de boutons',
        },
        plural: {
            en: 'Buttons Blocks',
            fr: 'Blocs de boutons',
        },
    },
    fields: [
        {
            name: 'buttons',
            type: 'array',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    label: {
                        en: 'Text',
                        fr: 'Texte',
                    },
                    required: true,
                },
                {
                    name: 'url',
                    type: 'text',
                    label: {
                        en: 'URL',
                        fr: 'URL',
                    },
                    required: true,
                },
                {
                    name: 'style',
                    type: 'select',
                    label: {
                        en: 'Style',
                        fr: 'Style',
                    },
                    options: [
                        {
                            label: {
                                en: 'Plain',
                                fr: 'Simple',
                            },
                            value: 'plain',
                        },
                        {
                            label: {
                                en: 'Outline',
                                fr: 'Contour',
                            },
                            value: 'outline',
                        },
                    ],
                    required: true,
                    defaultValue: 'plain',
                },
            ],
        },
    ],
};

export default ButtonsBlock;