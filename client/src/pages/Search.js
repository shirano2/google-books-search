import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";

class Search extends Component {
  state = {
    books: [],
    title: ""
  };

  //after book searching
  loadBooks = () => {
    this.setState({title: "" })
  };

  //when inputting book's title
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //when pressing the submit button
  handleFormSubmit = event => {
    event.preventDefault();
    API.getData(this.state.title.split(" ").join("+"))
      .then(res => {
        const newBooks=[];
        res.data.forEach(element => {
          newBooks.push({
            title:element.volumeInfo.title,
            author:element.volumeInfo.authors?element.volumeInfo.authors[0]:null,
            description:element.volumeInfo.description?element.volumeInfo.description:null,
            image:element.volumeInfo.imageLinks?element.volumeInfo.imageLinks.thumbnail:"https://placehold.it/300x300",
            link:element.volumeInfo.infoLink?element.volumeInfo.infoLink:null,
            saved:"false"
          })
        });
        this.loadBooks();
        this.checkBook(newBooks);
      }) 
      .catch(err => console.log(err));
  };

  //checking if there was aleady saved book from searching data
  checkBook=(newBooks) => {
    API.getBooks().then(res =>{
      if(res.data.length!==0) {
        res.data.forEach((element) => {
          newBooks.forEach((newElement) => {
            if(element.link===newElement.link) {
              newElement.saved="true"
            }
          })
        })
      }
      this.setState({ books: newBooks });
     })
     .catch(err => console.log(err));
  }

  //when clicking save button to save a book
  saveBook = (index) => {
    API.saveBook(this.state.books[index])
      .then(res => {
        const newBooks={...this.state.books}
        newBooks[index].saved = "true"
        this.setState({
          newBooks
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Please type a book of name</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <FormBtn
                  disabled={!this.state.title}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </Col>
            <Col size="md-12 sm-12">
              {this.state.books.length ? (
                  this.state.books.map((book,index) => (
                    <Card key={index} title={book.title} author={book.author} description={book.description} image={book.image} link={book.link} handler={()=>this.saveBook(index)} saved={book.saved} match="Search"/>
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

export default Search;