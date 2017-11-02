import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../Images/potty-putter.jpg'

export default () => {
    return (
        <div>
            <main>
                <div>
                    <div>
                        <div>
                            <img src={Image} alt="Potty Putter"/>
                        </div>
                        <div>
                            <p>The Better Marriage Blanket is the first and only blanket to keep your farts in the sheets. It will truly save your marriage from the catastrophe of after dinner flatulation. Every couple can benefit from such a great advance in technology.</p>
                        </div>
                    </div>

                </div>
                <div>

                </div>
                <div>
                    <Link to="/">Back to home</Link>
                </div>
            </main>
        </div>
    )

}