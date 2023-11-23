import React from 'react';
import { Link } from 'react-router-dom';
import SearchBook from './SearchBook';

const ShowBookByCategory = ({ books, selectedBooks }) => {
  return (
    <div>
        {selectedBooks.length > 0
          ? <SearchBook books={books} searchQuery={selectedBooks} searchBy={'category'} />
          :   <BookList books={books} />}
    </div>
  );
};

export default ShowBookByCategory;
