# Google-Books-Search

This app is for your life of reading books.

You can save favrorite books or go to the site directly to Google Books site after searching books.


## Site
https://google-books-search123.herokuapp.com/


### Technologies Used

* HTML5
* CSS3
* Bootstrap 4.0
* jQuery
* Javascript
* MongoDB
* Google Books API
* React.js
* Node.js (Axios, Express, Mongoose)



### Search Page 

```
findData: function(req, res) {
    axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then((results) => {
      res.json(results.data.items)
    })
    .catch(err => res.status(422).json(err));
  }
```

When a user comes to website, user can input book's name in search bar. And using axios, website shows book data through Google Books API. User can saved books by clicking "save" button or go to book site directly after results come out. 

#### Check the status of Saved

```
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
```

If user already added previously, then "save" button changed to "saved" button and it is disable to click.

### Saved Page

User can find saved books from DB here. Also user can delete saved books from DB


### Creator
This is made by Minseok Choi (https://github.com/shirano2)
