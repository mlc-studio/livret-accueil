import Image from "next/image"

const NextImage = ({ ...props }: any) => {
    return (
        <Image {...props} />
    )
}

export default NextImage;