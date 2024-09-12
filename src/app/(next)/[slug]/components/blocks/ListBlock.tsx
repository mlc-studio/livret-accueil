interface ListBlockProps {
    title?: string;
    description?: string;
    items: string[];
}

export default function ListBlock({ title, description, items }: ListBlockProps) {
    return (
        <div className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            {description && <p className="text-base sm:text-lg text-gray-700 mb-2 sm:mb-4">{description}</p>}
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-700">
                {items && items.length > 0 && items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}