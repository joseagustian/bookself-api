import {nanoid} from 'nanoid'
import books from '../books_data.js'

/**
    * @param {Request} r
    * @param {Response} h
    * @return {Response}
*/
function insertNewBook(r, h) {
    const dt = new Date()

    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = r.payload

    const id = nanoid(16)
    const finished = pageCount === readPage
    const insertedAt = dt.toISOString()
    const updatedAt = insertedAt

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    }

    books.push(newBook)
    const isSuccess = books.filter((book) => book.id === id).length > 0
    const isNameEmpty = name === '' || name === undefined
    const isReadPageBigger = readPage > pageCount

    if (isNameEmpty) {
        books.splice(books.indexOf(newBook), 1)
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        response.code(400)
        return response
    }
    if (isReadPageBigger) {
        books.splice(books.indexOf(newBook), 1)
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        })
        response.code(400)
        return response
    }
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        })
        response.code(201)
        return response
    }
}

export default insertNewBook