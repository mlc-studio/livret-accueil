import { Block } from "payload";

const ImageBlock: Block = {
    slug: 'imageBlock',
    labels: {
        singular: {
            en: 'Image Block',
            fr: 'Bloc d\'Image',
        },
        plural: {
            en: 'Image Blocks',
            fr: 'Blocs d\'Images',
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
            name: 'image',
            type: 'upload',
            label: {
                en: 'Image',
                fr: 'Image',
            },
            relationTo: 'media',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
            label: {
                en: 'Caption',
                fr: 'Légende',
            },
        }
    ]
}

export default ImageBlock;
