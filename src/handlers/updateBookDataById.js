import books from '../books_data.js'

/**
    * @param {Request} r
    * @param {Response} h
    * @return {Response}
*/
function updateBookDataById(r, h) {
    const {bookId} = r.params

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

    const updatedAt = new Date().toISOString()
    const index = books.findIndex((book) => book.id === bookId)

    const isNameEmpty = name === '' || name === undefined
    const isReadPageBigger = readPage > pageCount


    if (isNameEmpty) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        })
        response.code(400)
        return response
    }
    if (isReadPageBigger) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        })
        response.code(400)
        return response
    }
    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        }

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    response.code(404)
    return response
}

export default updateBookDataById