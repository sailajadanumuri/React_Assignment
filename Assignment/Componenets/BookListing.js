import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const BookListing = ({ books, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [books, searchTerm]);

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <div>
      <h2>Book Listing</h2>
      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);