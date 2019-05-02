import axios from "axios";

export default {
  // Gets all books
  
  getData: function(query) {
    return axios.get("/api/Data", { params: { q: query } });
  },

  getBooks: function() {
    return axios.get("/api/books");
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
// import axios from "axios";

// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
// export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // }
// };
