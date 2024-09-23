interface TextBlockProps {
    title?: string;
    description?: string;
}

export default function TextBlock({ title, description }: TextBlockProps) {
    return (
        <div className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            {description && <p className="text-base sm:text-lg text-gray-700">{description}</p>}
        </div>
    );
}