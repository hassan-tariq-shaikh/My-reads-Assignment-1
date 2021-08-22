import React from 'react'
import './Header.css'

const Bookitem=({book})=>
{
    function functionclick()
    {
        
            <div>
            <select>
                <option value="Currently Read">Currently Read</option>
                <option value="Read">Read</option>
                <option value="Want to read">Want to read</option>
            </select>
            </div>
        
    }
    return (
    <div onClick={functionclick} className="item">
        <img src={book.imageLinks.thumbnail}/>
        <br/>
        <div className="content">
        Author:{book.authors.[0]}<br/>
        Title{book.title}
        </div>
        </div>
    )
}
export default Bookitem;