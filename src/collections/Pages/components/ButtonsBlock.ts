import { Block } from "payload";

const ButtonsBlock: Block = {
    slug: 'buttonsBlock',
    labels: {
        singular: 'Buttons Block',
        plural: 'Buttons Blocks',
    },
    fields: [
        {
            name: 'buttons',
            type: 'array',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    label: 'Text',
                    required: true,
                },
                {
                    name: 'url',
                    type: 'text',
                    label: 'URL',
                    required: true,
                },
                {
                    name: 'style',
                    type: 'select',
                    label: 'Style',
                    options: ['plain', 'outline'],
                    required: true,
                    defaultValue: 'plain',
                },
            ],
        },
    ],
};

export default ButtonsBlock;