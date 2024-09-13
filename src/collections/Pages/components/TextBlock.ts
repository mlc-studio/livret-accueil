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
            label: {
                en: 'Title',
                fr: 'Titre',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            label: {
                en: 'Description',
                fr: 'Description',
            },
        }
    ],
}

export default TextBlock;