
import React from 'react'

const genres = ["Adventure", "History", "Biography", "Action", "Fantasy"]

export default function SideBar({ selectedGenres, setSelectedGenres }) {

    const handleGenreChage = (genre) =>{
        setSelectedGenres((prevSelectedGenres)=>{
            if(prevSelectedGenres.icludes(genre)){
                return prevSelectedGenres.filter((g)=>g !== genre)
            }else{
                return [...prevSelectedGenres, genre]
            }
        })
    }
  return (
    <div className='h-screen w-1/4 border-r-2 border-slate-400 pr-4'>
        <h2 className='text-center text-xl font-semibold my-4'>Filter By Genre</h2>
        <div className='flex flex-row items-center gap-4 flex-wrap justify-self-start'>
            {
                genres.map((genre)=>{
                    return(
                        <label key={genre} className='flex flex-row items-center gap-1 whitespace-nowrap'>
                            <input 
                             type='checkbox'
                             className='h-5 w-5'
                             checked={selectedGenres.includes(genre)}
                             onChange={()=>handleGenreChage(genre)}
                            />
                            {genre}
                        </label>
                    )
                })
            }
        </div>
    </div>
  )
}
