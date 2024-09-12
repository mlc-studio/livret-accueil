interface ButtonProps {
    text: string;
    url: string;
    style: 'plain' | 'outline';
}

interface ButtonBlockProps {
    buttons: ButtonProps[];
}

export default function ButtonBlock({ buttons }: ButtonBlockProps) {
    return (
        <div className="py-4 sm:py-8">
            <div className="flex flex-wrap gap-2 sm:gap-4">
                {buttons.map((button, index) => (
                    <a
                        key={index}
                        href={button.url}
                        className={`inline-block px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors ${button.style === 'plain' ? 'bg-blue-600 text-white' : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
                    >
                        {button.text}
                    </a>
                ))}
            </div>
        </div>
    );
}