const bookService = require('../services/bookservice')


exports.addBook = async function (req, res) {

    try {
        let books = await bookService.addbook(req.body);
        return res.status(201).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.getBooks = async function (req, res) {

    try {
        let book = await bookService.getbooks()
        return res.status(201).json({
            result: book,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.getBook = async function (req, res) {
    let id = req.params.id

    try {
        let books = await bookService.getbookbyid(id)
        return res.status(201).json({
            result: books,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}


exports.deleteBook = async function (req, res) {
    let id = req.params.id
console.log(id)
    try {
        let books = await bookService.deleteBook(id)
        return res.status(201).json({
            result: books,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}


exports.updateBook = async function (req, res) {

    try {
        await bookService.updateBook(req.body)
        return res.status(201).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}


