import { Block } from "payload";

const ImageGalleryBlock: Block = {
    slug: 'imageGalleryBlock',
    labels: {
        singular: 'Image Gallery Block',
        plural: 'Image Gallery Blocks',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            name: 'images',
            type: 'array',
            label: 'Images',
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
                    label: 'Caption',
                }
            ]
        }
    ]
}

export default ImageGalleryBlock;
