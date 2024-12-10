import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { mockData } from '../data/mockData';
import SearchBar from './SearchBar';

const BooksList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredBooks = mockData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className="books-list">
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>${book.price}</p>
          <p>Stock: {book.stock}</p>
          <button disabled={book.stock <= 0} onClick={() => addToCart(book)}>
            {book.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      ))}
      {filteredBooks.length === 0 && (
        <p>No books found for "{searchQuery}"</p>
      )}
    </div>
    </div>
  );
};

export default BooksList;
