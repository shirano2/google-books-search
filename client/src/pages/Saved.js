import API from "../utils/API";
import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  };
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(() => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Container fluid>
          <Row>
            <Col size="md-12 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {this.state.savedBooks.length ? (
                  this.state.savedBooks.map((book,index) => (
                    <Card key={index} title={book.title} author={book.author} description={book.description} image={book.image} link={book.link} handler={()=>this.deleteBook(book._id)} match="Saved" />
                  ))
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Saved;