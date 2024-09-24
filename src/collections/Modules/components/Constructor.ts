import { Block, Field } from "payload";

const TextBlock: Block = {
    slug: "text-block",
    labels: {
        singular: {
            en: 'Text',
            fr: 'Texte',
        },
        plural: {
            en: 'Texts',
            fr: 'Textes',
        }
    },
    fields: [
        {
            admin: {
                description: {
                    en: 'The title of the text',
                    fr: 'Le titre du texte',
                }
            },
            name: "title",
            label: {
                en: 'Title',
                fr: 'Titre',
            },
            type: "text"
        },
        {
            admin: {
                description: {
                    en: 'The description of the text',
                    fr: 'La description du texte',
                }
            },
            name: "description",
            label: {
                en: 'Description',
                fr: 'Description',
            },
            type: "textarea"
        },
    ]
};

const ImageBlock: Block = {
    slug: "image-block",
    labels: {
        singular: {
            en: 'Image',
            fr: 'Image',
        },
        plural: {
            en: 'Images',
            fr: 'Images',
        }
    },
    fields: [
        {
            admin: {
                description: {
                    en: 'The image',
                    fr: 'L\'image',
                }
            },
            name: "image",
            label: {
                en: 'Image',
                fr: 'Image',
            },
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ]
};

const IconArray: Block = {
    slug: 'icon-array',
    labels: {
        singular: {
            en: 'Icons List',
            fr: 'Liste d\'icônes',
        },
        plural: {
            en: 'Icons List',
            fr: 'Liste d\'icônes',
        }
    },
    fields: [
        {
            admin: {
                description: {
                    en: 'An array of icons',
                    fr: 'Un tableau d\'icônes',
                }
            },
            name: 'array',
            label: {
                en: 'Array',
                fr: 'Tableau',
            },
            labels: {
                singular: {
                    en: 'Icon',
                    fr: 'Icône',
                },
                plural: {
                    en: 'Icons',
                    fr: 'Icônes',
                }
            },
            type: 'array',
            minRows: 1,
            fields: [
                {
                    admin: {
                        description: {
                            en: 'The icon',
                            fr: 'L\'icône',
                        }
                    },
                    name: "icon",
                    label: {
                        en: 'Icon',
                        fr: 'Icône',
                    },
                    type: "upload",
                    relationTo: "icons",
                    required: true
                },
                {
                    admin: {
                        description: {
                            en: 'The title of the icon',
                            fr: 'Le titre de l\'icône',
                        }
                    },
                    name: "title",
                    label: {
                        en: 'Title',
                        fr: 'Titre',
                    },
                    type: "text",
                    required: true
                },
                {
                    admin: {
                        description: {
                            en: 'The description of the icon',
                            fr: 'La description de l\'icône',
                        }
                    },
                    name: "overview",
                    label: {
                        en: 'Overview',
                        fr: 'Aperçu',
                    },
                    type: "textarea",
                    required: false
                }
            ]
        }
    ]
};

const GalleryBlock: Block = {
    slug: 'gallery-block',
    labels: {
        singular: {
            en: 'Gallery',
            fr: 'Galerie',
        },
        plural: {
            en: 'Galleries',
            fr: 'Galeries',
        }
    },
    fields: [
        {
            admin: {
                description: {
                    en: 'The title of the gallery',
                    fr: 'Le titre de la galerie',
                }
            },
            name: 'title',
            label: {
                en: 'Title',
                fr: 'Titre',
            },
            type: 'text',
            required: false,
        },
        {
            admin: {
                description: {
                    en: 'The images of the gallery',
                    fr: 'Les images de la galerie',
                }
            },
            name: 'images',
            label: {
                en: 'Images',
                fr: 'Images',
            },
            labels: {
                singular: {
                    en: 'Image',
                    fr: 'Image',
                },
                plural: {
                    en: 'Images',
                    fr: 'Images',
                }
            },
            type: 'array',
            minRows: 1,
            fields: [
                {
                    admin: {
                        description: {
                            en: 'The image of the gallery',
                            fr: 'L\'image de la galerie',
                        }
                    },
                    name: 'image',
                    label: {
                        en: 'Image',
                        fr: 'Image',
                    },
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
    label: {
        en: 'Blocks',
        fr: 'Blocs',
    },
    labels: {
        singular: {
            en: 'Block',
            fr: 'Bloc',
        },
        plural: {
            en: 'Blocks',
            fr: 'Blocs',
        }
    },
    type: 'blocks',
    admin: {
        description: {
            en: 'Add blocks to your module',
            fr: 'Ajoutez des blocs à votre module',
        },
        position: "sidebar",
        condition: (values: any) => values.select.modules === "constructor"
    },
    localized: true,
    blocks: [
        TextBlock,
        ImageBlock,
        IconArray,
        GalleryBlock
    ],
};