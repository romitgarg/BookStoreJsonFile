
const fs=require('fs')
const { model } = require('mongoose')


module.exports.getbooks = async () =>{

    const books = await loadBooks()
    return books

}

module.exports.getbookbyid = async(id) =>{
    const data = await loadBooks()
	return data.find(x => x.id === id)
}


module.exports.deleteBook = async (id) => {
    const data = await loadBooks()
    
	const bookdWithoutCurrentId = data.filter(x => x.id !== id)
	saveBooks(bookdWithoutCurrentId)
}

// module.exports
const loadBooks = () => {
	return new Promise((resolve, reject) => {
	
        try{
            const dataBuffer=fs.readFileSync('books.json')
            const dataJSON= dataBuffer.toString()
            resolve(JSON.parse(dataJSON))
            }
            catch(e)
            {
                resolve([])
            }

	});
}


const saveBooks = (books) => {
    const dataJSON = JSON.stringify(books)
	return new Promise((resolve, reject) => {
		fs.writeFile('books.json', dataJSON, (err) => {
			if (err) {
				reject(err)
			}
			resolve()
		});

	})

}

module.exports.addbook = async (book) =>{
   
    const data = await loadBooks()
    data.push({ ...book})
    saveBooks(data)
}

module.exports.updateBook = async (book) => {
	const data = await loadBooks()
    const findBook = data.find(x => x.id === book.id)
	if (findBook) {
		findBook.bookName = book.bookName
		findBook.author = book.author
	}

	saveBooks(data);
}