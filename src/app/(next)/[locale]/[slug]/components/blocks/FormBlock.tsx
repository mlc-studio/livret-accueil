import React from 'react';

interface ContactFormBlockProps {
    title?: string;
    description?: string;
}

export default function ContactFormBlock({ title, description }: ContactFormBlockProps) {
    return (
        <div className="py-4 sm:py-8">
            {title && <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{title}</h2>}
            {description && <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{description}</p>}
            <form className="space-y-4 sm:space-y-6">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full px-4 py-3 text-lg bg-gray-100 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="w-full px-4 py-3 text-lg bg-gray-100 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Message"
                        className="w-full px-4 py-3 text-lg bg-gray-100 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}