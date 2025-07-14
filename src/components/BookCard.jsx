const BookCard = ({ book, onClick }) => (
    <div
      onClick={() => onClick(book)}
      className="cursor-pointer transform hover:scale-105 transition"
    >
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-auto rounded-lg shadow"
      />
      <p className="text-center mt-2 text-sm font-medium">{book.title}</p>
    </div>
  );
  
  export default BookCard;
  