import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 1,
                    name: "Product 1",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },
                {
                    id: 2,
                    name: "Product 2",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 3,
                    name: "Product 3",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 4,
                    name: "Product 4",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 5,
                    name: "Product 5",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 6,
                    name: "Product 6",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },


                {
                    id: 7,
                    name: "Product 7",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 8,
                    name: "Product 8",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

                {
                    id: 9,
                    name: "Product 9",
                    company: "Some Company, Inc",
                    description: "Met at a party. Will connect with later"
                },

            ]
        }
    }

    removePerson(id) {
        this.setState({ people: this.state.people.filter(person => person.id !== id)});
    }

    render () {
        let peopleCards = this.state.people.map(person => {
            return (
                <Col sm="4">
                    <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
                </Col>
            )
        });
        return (
            <Container fluid>
                <Row>
                    {peopleCards}
                </Row>
            </Container>
        )
    }
}

export default MainArea;