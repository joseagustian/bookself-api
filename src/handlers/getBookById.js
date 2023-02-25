import books from '../books_data.js'

/**
    * @param {Request} r
    * @param {Response} h
    * @return {Response}
*/
function getBookById(r, h) {
    const {bookId} = r.params

    const book = books.filter((b) => b.id === bookId)[0]

    if (book !== undefined) {
        return {
            status: 'success',
            data: {
                book,
            },
        }
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    })
    response.code(404)
    return response
}

export default getBookById