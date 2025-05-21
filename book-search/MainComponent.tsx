import React, { useState } from 'react';

interface Book {
    title: string;
    author: string;
}

const books: Book[] = [
    { title: "My Talented Book", author: "ABC" },
    { title: "My Third Book", author: "XYZ" },
    { title: "First Book", author: "CDE" },
    { title: "The Great Novel", author: "Jane Doe" },
    { title: "Adventure Awaits", author: "John Smith" },
    { title: "Cooking Delights", author: "Chef Remy" }
];

interface SearchResultsProps {
    books: Book[];
    onGenerateSummary: (book: Book) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ books, onGenerateSummary }) => {
    return (
        <div className="mt-4 border border-gray-200 rounded-lg shadow-sm overflow-hidden custom-scrollbar max-h-96">
            {books.length === 0 ? (
                <p className="p-4 text-center text-gray-500">No books found matching your search.</p>
            ) : (
                books.map((book, index) => (
                    <div key={index} className="p-4 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors duration-150 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <p className="m-0 text-lg text-gray-800 mb-2 sm:mb-0">
                            <strong className="font-semibold">{book.title}</strong> - <span className="text-gray-600">{book.author}</span>
                        </p>
                        <button
                            onClick={() => onGenerateSummary(book)}
                            className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
                        >
                         Generate Summary
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

const MainComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loadingSummary, setLoadingSummary] = useState<boolean>(false);
    const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
    const [selectedBookForSummary, setSelectedBookForSummary] = useState<Book | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleGenerateSummary = async (book: Book) => {
        setLoadingSummary(true);
        setGeneratedSummary(null);
        setSelectedBookForSummary(book);

        try {
            const prompt = `Summarize the book titled '${book.title}' by ${book.author}. Provide a concise summary of about 3-4 sentences.`;
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });

            const payload = { contents: chatHistory };
            const apiKey = "";
            const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchQuery}&limit=5&format=json&origin=*`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setGeneratedSummary(text);
            } else {
                setGeneratedSummary("Could not generate summary. Please try again.");
                console.error("Gemini API response structure unexpected:", result);
            }
        } catch (error) {
            setGeneratedSummary("Error generating summary. Please check your network or try again.");
            console.error("Error calling Gemini API:", error);
        } finally {
            setLoadingSummary(false);
        }
    };

    const closeSummaryModal = () => {
        setGeneratedSummary(null);
        setSelectedBookForSummary(null);
    };

    const filteredBooks = books.filter((book: Book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Book Search</h1>
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
                <SearchResults books={filteredBooks} onGenerateSummary={handleGenerateSummary} />

                {selectedBookForSummary && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-2xl max-w-lg w-full relative">
                            <button
                                onClick={closeSummaryModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                            >
                                &times;
                            </button>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Summary for: {selectedBookForSummary.title}
                            </h2>
                            {loadingSummary ? (
                                <div className="flex items-center justify-center py-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                    <p className="ml-3 text-gray-700">Generating summary...</p>
                                </div>
                            ) : (
                                <p className="text-gray-700 leading-relaxed max-h-60 overflow-y-auto custom-scrollbar pr-2">
                                    {generatedSummary || "No summary available."}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainComponent;
