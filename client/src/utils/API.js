import axios from "axios";

export default {
  //Get Data from Google Book API
  getData: function(query) {
    return axios.get("/api/Data", { params: { q: query } });
  },

  //Get all books from DB
  getBooks: function() {
    return axios.get("/api/books");
  },

  //Save a book to DB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
 
  //Delete the book from DB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};