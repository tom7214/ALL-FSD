import React from 'react';

interface Book {
    title: string;
    author: string;
}

interface SearchResultsProps {
    books: Book[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ books }) => {
    return (
        <div>
            {books.map((book, index) => (
                <div key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                    <p style={{ margin: 0, fontSize: '18px' }}>
                        <strong>{book.title}</strong> - {book.author}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
