import { Block } from "payload";

const ImageGalleryBlock: Block = {
    slug: 'imageGalleryBlock',
    labels: {
        singular: {
            en: 'Image Gallery Block',
            fr: 'Galerie d\'Images',
        },
        plural: {
            en: 'Image Gallery Blocks',
            fr: 'Galeries d\'Images',
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
            name: 'images',
            type: 'array',
            label: {
                en: 'Images',
                fr: 'Images',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
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
    ]
}

export default ImageGalleryBlock;
