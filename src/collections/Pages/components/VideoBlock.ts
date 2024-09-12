import { Block } from "payload";

const VideoBlock: Block = {
    slug: 'videoBlock',
    labels: {
        singular: 'Video Block',
        plural: 'Video Blocks',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
        },
        {
            name: 'videoType',
            type: 'select',
            label: 'Video Type',
            options: ['link', 'mediaLibrary'],
            required: true,
        },
        {
            name: 'videoLink',
            type: 'text',
            label: 'Video Link',
            required: true,
            admin: {
                condition: (data, siblingData) => siblingData.videoType === 'link',
            },
        },
        {
            name: 'videoFile',
            type: 'relationship',
            label: 'Video File',
            relationTo: 'video',
            required: true,
            admin: {
                condition: (data, siblingData) => siblingData.videoType === 'mediaLibrary',
            },
        },
        {
            name: 'caption',
            type: 'text',
            label: 'Caption',
        }
    ]
}

export default VideoBlock;