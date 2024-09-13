import { Block } from "payload";

const QuoteBlock: Block = {
    slug: 'quoteBlock',
    labels: {
        singular: {
            en: 'Quote Block',
            fr: 'Bloc de citation',
        },
        plural: {
            en: 'Quote Blocks',
            fr: 'Blocs de citations',
        },
    },
    fields: [
        {
            name: 'quote',
            type: 'textarea',
            label: {
                en: 'Quote',
                fr: 'Citation',
            },
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            label: {
                en: 'Author',
                fr: 'Auteur',
            },
            required: true,
        }
    ]
}

export default QuoteBlock;

