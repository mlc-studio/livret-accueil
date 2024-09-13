import { Block } from "payload";

const ListBlock: Block = {
    slug: 'listBlock',
    labels: {
        singular: {
            en: 'List Block',
            fr: 'Bloc de liste',
        },
        plural: {
            en: 'List Blocks',
            fr: 'Blocs de liste',
        },
    },
    fields: [
        {
            name: 'title',
            label: {
                en: 'Title',
                fr: 'Titre',
            },
            type: 'text',
        },
        {
            name: 'description',
            label: {
                en: 'Description',
                fr: 'Description',
            },
            type: 'textarea',
        },
        {
            name: 'items',
            label: {
                en: 'Items',
                fr: 'Items',
            },
            type: 'array',
            fields: [
                {
                    name: 'item',
                    label: {
                        en: 'Item',
                        fr: 'Item',
                    },
                    type: 'text',
                }
            ]
        }
    ]
}

export default ListBlock;