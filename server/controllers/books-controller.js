const Book = require("../model/bookmodel");

// Get All Books

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ message: " Page Not Found" });
  }
  return res.status(200).json({ books });
};

// Get All Books By Id

const getBookId = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Book Id Can't Get" });
  }
  return res.status(200).json({ book });
};

// Post Books

const addBook = async (req, res, next) => {
  const { name, auther, description, price, avilable, image } = req.body;
  let book;
  try {
    book = await new Book({
      name,
      auther,
      description,
      image,
      price,
      avilable,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

// Put Update Books

const bookUpdate = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, auther, avilable, price, image } = req.body;
  let bookUpd;
  try {
    bookUpd = await Book.findByIdAndUpdate(id, {
      name,
      description,
      auther,
      image,
      price,
      avilable,
    });
    bookUpd = await bookUpd.save();
  } catch (error) {
    console.log(error);
  }
  if (!bookUpd) {
    return res.status(404).json({ message: " Unable To Update With This Id " });
  }
  return res.status(200).json({ bookUpd });
};

// Delete Book

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let deleteBook;
  try {
    deleteBook = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!deleteBook) {
    return res.status(404).json({ message: "Unable To Delete With This Id" });
  }
  return res.status(200).json({ deleteBook });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookId = getBookId;
exports.bookUpdate = bookUpdate;
exports.deleteBook = deleteBook;
