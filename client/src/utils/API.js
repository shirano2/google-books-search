import axios from "axios";

export default {
  //getting Data from Google Book API
  getData: function(query) {
    return axios.get("/api/data", { params: { q: query } });
  },

  //getting all books from DB
  getBooks: function() {
    return axios.get("/api/books");
  },

  //saving a book to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
 
  //deleting the book from DB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};