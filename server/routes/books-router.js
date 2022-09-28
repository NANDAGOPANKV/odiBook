const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getBookId);
router.put("/:id",booksController.bookUpdate);
router.delete('/:id',booksController.deleteBook)

module.exports = router;
