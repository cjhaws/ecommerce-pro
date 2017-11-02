import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../Images/bettermarriage.jpg'
import { Button, Media } from 'reactstrap'
import Nav from '../Components/Nav'

export default () => {
    return (
        <div>
            <main>
                <div>
                    <div>
                        <div>
                            <Nav/>
                            <Media object src={Image} alt="Generic placeholder image" />

                        </div>
                        <div>
                            <p>The Better Marriage Blanket is the first and only blanket to keep your farts in the sheets. It will truly save your marriage from the catastrophe of after dinner flatulation. Every couple can benefit from such a great advance in technology.</p>
                        </div>
                    </div>

                </div>
                <div>

                </div>
                <div>
                    <Link to="/"><Button color="dark" size="sm">Back to home</Button></Link>
                </div>
            </main>
        </div>
    )

}