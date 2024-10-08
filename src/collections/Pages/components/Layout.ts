import { Field } from "payload";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import ListBlock from "./ListBlock";
import ImageGalleryBlock from "./ImageGalleryBlock";
import QuoteBlock from "./QuoteBlock";
import VideoBlock from "./VideoBlock";
import ButtonsBlock from "./ButtonsBlock";

const Blocks: Field = {
    name: "layout",
    label: {
        en: "Layout",
        fr: "Contenu",
    },
    type: "blocks",
    localized: true,
    blocks: [
        TextBlock,
        ImageBlock,
        ListBlock,
        ImageGalleryBlock,
        QuoteBlock,
        VideoBlock,
        ButtonsBlock
    ],
};

export default Blocks;