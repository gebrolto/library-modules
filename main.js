// // write your code here to make the tests pass

function Library() { 
    var books = [];
    addBook = function(book){
        books.push(book)
    }
    checkOutBook = function(book){
        if(books.includes(book)){
        book.setAttribute('checkedOut', true)
        }
        else return
    }
    returnBook = function(book){
        if(books.includes(book)){
        book.setAttribute('checkedOut', false)
        }
    }
   return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
    }
}

function Book(title, author){
    var attributes = {
        title: title,
        author: author,
        checkedOut: false
    }
    getAttribute = function(attribute){
        return attributes[attribute];
    }
    setAttribute = function(attribute, value){
        if (attributes.hasOwnProperty(attribute)){
        attributes[attribute] = value;
        }
    }
    return{
        getAttribute: getAttribute,
        setAttribute: setAttribute
    }
}

checkOutBook = function(){

}

var library = Library();

addBook('catsCradle')
addBook('greatExpectations')
library.checkOutBook('catsCradle')
Book('Cats Cradle', 'Kurt Vonnegut')
Book('Great Expectations', 'Charles Dickens')
