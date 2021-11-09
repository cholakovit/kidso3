import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {

    //console.log(product)

    // const removeContactHandler = async (id) => {

    //     await axios.delete(`http://localhost:3006/items/${id}`)
    // }

    return (
        <>
        
            <h2>{item.title}</h2>
            <img src={'../../assets/products/plane.jpg'} alt={item.title} />
            <p>{item.description}</p>
            <Link to={`/edit-item/${item.id}`} className="btn">EDIT ITEM</Link>
            {/* <button onClick={ () => { removeContactHandler(item.id) } }>Delete Record</button> */}
        
        </>
    )
}

export default Item

