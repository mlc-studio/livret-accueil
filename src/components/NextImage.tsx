const NextImage = ({ src, ...props }: any) => {
    return (
        <img src={src} {...props} />
    )
}

export default NextImage;