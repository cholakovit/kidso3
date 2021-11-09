import React, { useRef, useState } from 'react'
import axios from 'axios'
import Header from './Header'

function NewItem() {

    const title = useRef()
    const description = useRef()
    const [msg, setMsg] = useState()

    const addItem = async () => {

        if(title.current.value.length < 3) { setMsg('title should be at least 3 symbols'); return; }

        const request = {
          title: title.current.value,
          description: description.current.value,
          image: 'plane.jpg'
        }
        const response = axios.post('http://localhost:3006/items', request)

        setMsg('SUCCESS')
    }

    return (
        <>
            <Header />
            <div className="form">
                <label for="title">Title</label>
                <input type="text" name="title" ref={title} /><br />
                <label for="description">Description</label>
                <textarea name="description" ref={description}></textarea><br />
                {msg ? msg : ""}
                <button onClick={addItem}>Save</button>
            </div>
        </>
    )
}

export default NewItem
