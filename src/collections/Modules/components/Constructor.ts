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

const IconArray: Block = {
    slug: 'icon-array',
    fields: [
        {
            name: 'array',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: "icon",
                    type: "upload",
                    relationTo: "icons",
                    required: true
                },
                {
                    name: "title",
                    type: "text",
                    required: true
                },
                {
                    name: "overview",
                    type: "textarea",
                    required: false
                }
            ]
        }
    ]
};

const GalleryBlock: Block = {
    slug: 'gallery-block',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: false,
        },
        {
            name: 'images',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ]
        }
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
        IconArray,
        GalleryBlock
    ],
};