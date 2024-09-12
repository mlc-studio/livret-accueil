import { Block } from "payload";

const ListBlock: Block = {
    slug: 'listBlock',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
        },
        {
            name: 'items',
            label: 'Items',
            type: 'array',
            fields: [
                {
                    name: 'item',
                    label: 'Item',
                    type: 'text',
                }
            ]
        }
    ]
}

export default ListBlock;