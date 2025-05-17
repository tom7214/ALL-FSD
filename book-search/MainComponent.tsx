import React, { useState } from 'react';
import SearchResults from './SearchResults';

interface Book {
    title: string;
    author: string;
}

const books: Book[] = [
    { title: "My Talented book", author: "ABC" },
    { title: "My Third Book", author: "XYZ" },
    { title: "First Book", author: "CDE" }
];

const MainComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search Books"
                value={searchTerm}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
            />
            <SearchResults books={filteredBooks} />
        </div>
    );
};

export default MainComponent;
