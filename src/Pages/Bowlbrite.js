import React from 'react'
import Img from '../Images/bowl-brite.jpeg'
import { Jumbotron} from 'reactstrap'
import Nav from '../Components/Nav'
import {Image} from 'react-bootstrap'

export default () => {
    return (
        <div>
            <main>
                <div>
                    <Nav/>
                    <div id="body">
                        <div>
                            <Image object src={Img} alt="Bowl Brite" height="400px" responsive/>
                        </div>
                        <div>
                            <Jumbotron>
                                <p>The Better Marriage Blanket is the first and only blanket to keep your farts in the
                                    sheets. It will truly save your marriage from the catastrophe of after dinner
                                    flatulation. Every couple can benefit from such a great advance in technology.</p>
                            </Jumbotron>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </main>
        </div>
    )

}