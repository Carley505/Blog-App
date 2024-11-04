
import React from 'react'

export default function BookList({ books }) {

  return (
    <div className='w-3/4 py-4'>
      <h2 className='text-xl font-semibold'>Books</h2>
      <div>
        {
            books && books.map((book)=>(
                <div className='border rounded p-4' key={book._id}>
                   <h3 className='font-semibold text-lg'>{book.title}</h3>
                   <p className='text-sm text-gray-700'>Author: {book.author}</p>
                   <p className='text-sm text-gray-700'>Genres: {book.genres.join(',')}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
