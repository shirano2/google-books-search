import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    title: ""
  };

  // title: { type: String, required: true },
  // author: { type: String },
  // description: String,
  // image: String,
  // link : String,
  // date: { type: Date, default: Date.now }

  // componentDidMount() {
  //   //console.log('여기1'+this.props.match.params.id);
  //   this.loadBooks();
  // }

  loadBooks = () => {
    this.setState({title: "" })
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title) {
  //     API.getBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    //console.log(this.state.title);
    API.getData(this.state.title.split(" ").join("+"))
      .then(res => {
        const newBooks=[];
        res.data.forEach(element => {
          //console.log(element);
          newBooks.push({
            title:element.volumeInfo.title,
            author:element.volumeInfo.authors?element.volumeInfo.authors[0]:null,
            description:element.volumeInfo.description?element.volumeInfo.description:null,
            image:element.volumeInfo.imageLinks?element.volumeInfo.imageLinks.thumbnail:"https://placehold.it/300x300",
            link:element.volumeInfo.infoLink?element.volumeInfo.infoLink:null
          })
        });
        this.loadBooks();
        this.setState({ books: newBooks });
      }) 
      .catch(err => console.log(err));
  };

  saveBook = (index) => {
    console.log(this.state.books[index]);
    API.saveBook(this.state.books[index])
      .then(res => this.loadBooks())
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
                <List>
                  {this.state.books.map((book,index) => (
                    <ListItem id={index} key={index}>
                      {/* <Link to={"/books/" + book._id}> */}
                        <strong>
                          {book.title}
                        </strong>
                      {/* </Link> */}
                      {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                      <ViewBtn target="_blank" href={book.link} />
                      <SaveBtn onClick={()=>this.saveBook(index)} />
                    </ListItem>
                  ))}
                </List>
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
