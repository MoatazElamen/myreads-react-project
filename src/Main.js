import React from 'react'

import {Link} from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf'

class Main extends React.Component {
  state = {
    

  }

  render() {
    console.log(this.props)
    return (
      <div className="app ">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf title="Currently Reading" handleUpdate={this.props.handleUpdate} books={this.props.books.filter((book)=>(
                  book.shelf === "currentlyReading"
                ))}/>
                <Bookshelf title="Want To Read" handleUpdate={this.props.handleUpdate} books={this.props.books.filter((book)=>(
                  book.shelf === "wantToRead"
                ))}/>
                <Bookshelf title="Read" handleUpdate={this.props.handleUpdate} books={this.props.books.filter((book)=>(
                  book.shelf === "read"
                ))}/>
            </div>
            <div className="open-search">
            <Link to="/search" ><button>Add a book</button></Link>
            </div>
          </div>

      </div>
    )
  }
}

export default Main
