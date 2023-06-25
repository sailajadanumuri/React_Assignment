import React, { useState, useEffect } from 'react';

const BookDetails = ({ match }) => {
  const bookId = match.params.id;
  const [book, setBook] = useState(null);

  useEffect(() => {
    
    const fetchedBook = {
      id: bookId,
      title: 'Sample Book Title',
      author: 'Sample Author',
      description: 'Sample Book Description',
    };
    setBook(fetchedBook);
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      
    </div>
  );
};

export default BookDetails;
Footer