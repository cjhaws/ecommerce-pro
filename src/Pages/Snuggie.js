import React from 'react'
import Image from '../Images/snuggie.jpg'
import { Media } from 'reactstrap'
import Nav from '../Components/Nav'

export default () => {
    return (
        <div>
            <main>
                <div>
                    <Nav/>
                    <div id="body">
                        <div>
                            <Media object src={Image} alt="Snuggie" />
                        </div>
                        <div>
                            <p>The Better Marriage Blanket is the first and only blanket to keep your farts in the sheets. It will truly save your marriage from the catastrophe of after dinner flatulation. Every couple can benefit from such a great advance in technology.</p>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </main>
        </div>
    )

}