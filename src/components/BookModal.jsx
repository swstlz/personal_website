const BookModal = ({ book, onClose }) => {
    if (!book) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black"
          >
            ✕
          </button>
          <img src={book.cover} alt={book.title} className="rounded mb-4" />
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
          {book.review ? (
            <p className="mt-2 text-gray-800">{book.review}</p>
          ) : (
            <p className="mt-2 italic text-gray-500">No review yet.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default BookModal;
  