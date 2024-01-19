import React from 'react'
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai';
import { BiUserCheck } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { BookSingleCard } from './BookSingleCard';
export const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4'>
            {books.map((item) => (
                <BookSingleCard book={item} key={item._id} />
            ))}
        </div>
    )
}
