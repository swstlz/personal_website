import { useState } from "react";
import books from "../data/books";
import BookCard from "./BookCard";
import BookModal from "./BookModal";

const BookShelf = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookshelf</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={setSelectedBook} />
        ))}
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default BookShelf;
