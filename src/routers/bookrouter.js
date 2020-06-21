var express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookcontroller')

router.post('/api/books', bookController.addBook)
router.get('/api/books', bookController.getBooks)
router.get('/api/books/:id', bookController.getBook)
router.delete('/api/books/:id', bookController.deleteBook)
router.patch('/api/books/:id', bookController.updateBook)

module.exports = router