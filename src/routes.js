import deleteBookById from './handlers/deleteBookById.js'
import getAllBooks from './handlers/getAllBooks.js'
import getBookById from './handlers/getBookById.js'
import insertNewBook from './handlers/insertNewBook.js'
import updateBookDataById from './handlers/updateBookDataById.js'

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: insertNewBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookDataById,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookById,
    },
]

export default routes