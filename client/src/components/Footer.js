import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <Link className="product" to={`/`}>
                Home
            </Link>
            <Link className="product" to={`/items`}>
                Items
            </Link>
        </footer>
    )
}
export default Footer
