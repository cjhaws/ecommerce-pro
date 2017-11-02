import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'

export default () => {
    return (
        <div>
            <main>
                <div>
                    <Nav />
                    <div>Checkout Page</div>
                    <div>
                        <Link to="/">Back to home</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}