import React from 'react'
import Nav from '../Components/Nav'
import MainArea from '../Components/MainArea'

export default () => {
    return (
        <div id="body">
            <Nav />
            <div id="content">
                <MainArea />
            </div>
        </div>
    )

}