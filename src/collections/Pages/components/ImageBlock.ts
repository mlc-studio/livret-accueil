import { Block } from "payload";

const ImageBlock: Block = {
    slug: 'imageBlock',
    labels: {
        singular: 'Image Block',
        plural: 'Image Blocks',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
            label: 'Caption',
        }
    ]
}

export default ImageBlock;
