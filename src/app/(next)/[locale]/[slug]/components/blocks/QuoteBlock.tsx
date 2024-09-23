interface QuoteBlockProps {
    quote: string;
    author: string;
}

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
    return (
        <div className="py-4 sm:py-8">
            <blockquote className="text-xl sm:text-2xl italic border-l-4 border-gray-300 pl-4 sm:pl-6 mb-2 sm:mb-4">
                "{quote}"
            </blockquote>
            <p className="text-right text-base sm:text-lg font-semibold text-gray-700">- {author}</p>
        </div>
    );
}