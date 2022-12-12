import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Table from "./components/Table";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "First Book",
      bookAuthor: "John Doe",
      bookIsbn: "00000",
      bookId: uuidv4(),
    },
  ]);

  const isInvalisInput = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  };

  const clearInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    // clean empty form from start
    e.preventDefault();
    // everytime we click submit we should prevent the default behavior of the browser first
    clearInput();
    // then we want to clear the input after preventing the default
    setCurrentBookId(null);
    // set the current book id back to null
    if (isInvalisInput()) return;
    // if input is invalid just return

    !currentBookId ? addBook() : updateBook();
    // check if there is a current book id or not and either update or add the book

    // our form is clear again
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const cancelEdit = () => {
    clearInput();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook} />
      </div>
    </div>
  );
}

export default App;

/*
What state do we need to handle?
1. title
2. author
3. isbn
4. handle current book id when editing
5. array to store our books

Functions that we need to create:
1. add book done
2. edit book
3. remove book
4. update book done
5. submit the form done
6. cancel edit
7. check if input is valid done
8. clear input done

*/
