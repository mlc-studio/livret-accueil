import { Block } from "payload";

const TextBlock: Block = {
    slug: 'textBlock',
    labels: {
        singular: {
            en: 'Text Block',
            fr: 'Bloc de texte',
        },
        plural: {
            en: 'Text Blocks',
            fr: 'Blocs de texte',
        },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title'
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
        }
    ],
}

export default TextBlock;