import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div id="nav">
                <Navbar color="dark" dark>
                    <NavbarBrand href="/" className="mr-auto">As seen on TV</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavItem>
                                    <Link to="/better-marriage">
                                        <NavItem>
                                            <Link to="/">
                                                <NavLink>
                                                    Home
                                                </NavLink>
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/checkout">
                                                <NavLink>
                                                    Checkout
                                                </NavLink>
                                            </Link>
                                        </NavItem>
                                        <NavLink>
                                            Better Marriage Blanket
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                <Link to="/bowl-brite">
                                    <NavLink>
                                        Bowl Brite
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/chinpilla">
                                <NavLink>
                                    Chinpilla
                                </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/neck-magic">
                                    <NavLink>
                                        Neck Magic
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/potty-putter">
                                    <NavLink>
                                        Potty Putter
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/sauna-pants">
                                    <NavLink>
                                        Sauna Pants
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/snuggie">
                                    <NavLink>
                                        Snuggie
                                    </NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/turbie-twist">
                                <NavLink>
                                    Turbie Twist
                                </NavLink>
                            </Link>
                        </NavItem>
                            <NavItem>
                                <Link to="/wax-vac">
                                    <NavLink>
                                        Wax Vac
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}