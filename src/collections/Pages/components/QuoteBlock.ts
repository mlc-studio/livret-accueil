import { Block } from "payload";

const QuoteBlock: Block = {
    slug: 'quoteBlock',
    labels: {
        singular: 'Quote Block',
        plural: 'Quote Blocks',
    },
    fields: [
        {
            name: 'quote',
            type: 'textarea',
            label: 'Quote',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            label: 'Author',
            required: true,
        }
    ]
}

export default QuoteBlock;

