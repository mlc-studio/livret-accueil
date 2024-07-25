import { Block, Field } from "payload";

const TextBlock: Block = {
    slug: "text-block",
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            name: "description",
            type: "textarea"
        },
    ]
};

const ImageBlock: Block = {
    slug: "image-block",
    fields: [
        {
            name: "image",
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ]
};

export const Constructor: Field = {
    name: 'blocks',
    type: 'blocks',
    admin: {
        position: "sidebar",
        condition: (values: any) => values.select.modules === "constructor"
    },
    blocks: [
        TextBlock,
        ImageBlock,
    ],
};