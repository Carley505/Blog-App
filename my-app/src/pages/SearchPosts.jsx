
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import BookList from '../components/BookList'

export const SearchPosts = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    console.log(books)
    // fetch books from backend
    useEffect(()=>{
        const fetchBooks = async() =>{
            const url = '/api/posts'
            await fetch(url).then((response)=>{
                return response.json()
            }).then((data)=>{
                if(data.success === false){
                    console.log(data.message)
                    return
                }else{
                    setBooks(data.data)
                }
            }).catch((error)=>{
                console.log(error.message)
            })
        }
        fetchBooks()
    }, []);

    // function to update filtered books when selected genres change
    useEffect(()=>{
        if(selectedGenres.length === 0){
            setFilteredBooks(books)
        }else{
            setFilteredBooks(
                books.filter((book)=>
                book.genres.some(genre=>selectedGenres.includes(genre))
                )
            )
        }
    }, [selectedGenres, books]);
  return (
    <div className='flex flex-row gap-4 px-4'>
        <SideBar selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
        <BookList books={filteredBooks} />
    </div>
  )
}
