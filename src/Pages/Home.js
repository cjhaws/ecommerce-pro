import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

export default () => {
    return (
        <div>
            <div id="homeButtons">
                <div>Hello</div>
                <div>
                    <Link to="/better-marriage"><Button color="info">Product description BMB</Button></Link>
                </div>
                <div>
                    <Link to="/bowl-brite"><Button color="info">Product description Bowl Brite</Button></Link>
                </div>
                <div>
                    <Link to="/chinpilla"><Button color="info">Product description Chinpilla</Button></Link>
                </div>
                <div>
                    <Link to="/neck-magic"><Button color="info">Product description Neck Magic</Button></Link>
                </div>
                <div>
                    <Link to="/potty-putter"><Button color="info">Product description Potty Putter</Button></Link>
                </div>
                <div>
                    <Link to="/sauna-pants"><Button color="info">Product description Sauns Pants</Button></Link>
                </div>
                <div>
                    <Link to="/snuggie"><Button color="info">Product description Snuggie</Button></Link>
                </div>
                <div>
                    <Link to="/turbie-twist"><Button color="info">Product description Turbie Twist</Button></Link>
                </div>
                <div>
                    <Link to="/wax-vac"><Button color="info">Product description Wax Vac</Button></Link>
                </div>
                <div>
                    <Link to="/checkout"><Button color="info">Checkout Page</Button></Link>
                </div>
            </div>
        </div>
    )

}