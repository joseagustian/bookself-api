import books from '../books_data.js'

/**
    * @param {Request} r
    * @param {Response} h
    * @return {Response}
*/
function getAllBooks(r, h) {
    const {name, reading, finished} = r.query
    if (name !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: [...books
                    .filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))
                    .map((book) => {
                        const {id, name, publisher} = book
                        return {id, name, publisher}
                    })],
            },
        })
        response.code(200)
        return response
    }

    if (reading !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: [...books
                    .filter((book) => book.reading === (reading === '1'))
                    .map((book) => {
                        const {id, name, publisher} = book
                        return {id, name, publisher}
                    })],
            },
        })
        response.code(200)
        return response
    }

    if (finished !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: [...books
                    .filter((book) => book.finished === (finished === '1'))
                    .map((book) => {
                        const {id, name, publisher} = book
                        return {id, name, publisher}
                    })],
            },
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'success',
        data: {
            books: [...books
                .map((book) => {
                    const {id, name, publisher} = book
                    return {id, name, publisher}
                })],
        },
    })
    response.code(200)
    return response
}

export default getAllBooks