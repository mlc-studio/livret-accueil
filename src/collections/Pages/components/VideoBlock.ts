import { Block } from "payload";

const VideoBlock: Block = {
    slug: 'videoBlock',
    labels: {
        singular: {
            en: 'Video Block',
            fr: 'Bloc de vidéo',
        },
        plural: {
            en: 'Video Blocks',
            fr: 'Blocs de vidéo',
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
            name: 'videoType',
            type: 'select',
            label: {
                en: 'Video Type',
                fr: 'Type de vidéo',
            },
            options: ['link', 'mediaLibrary'],
            required: true,
        },
        {
            name: 'videoLink',
            type: 'text',
            label: {
                en: 'Video Link',
                fr: 'Lien de vidéo',
            },
            required: true,
            admin: {
                condition: (data, siblingData) => siblingData.videoType === 'link',
            },
        },
        {
            name: 'videoFile',
            type: 'relationship',
            label: {
                en: 'Video File',
                fr: 'Fichier de vidéo',
            },
            relationTo: 'video',
            required: true,
            admin: {
                condition: (data, siblingData) => siblingData.videoType === 'mediaLibrary',
            },
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

export default VideoBlock;