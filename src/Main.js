import React from 'react'
import Heart from './Heart-beat.gif'
import {Link} from 'react-router-dom'
import './App.css'
import Bookshelf from './components/Bookshelf'
import propTypes  from 'prop-types'
class Main extends React.Component {

  render() {

    return (
      <div className="app ">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {this.props.isLoading?
            (
            <div className="loading-component">
              <h3>Fetching Books</h3>
              <img src={Heart} alt="loading"/>
            </div>
            )
            :(                
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
            )
            }
            <div className="open-search">
              <Link to="/search" ><button>Add a book</button></Link>
            </div>
          </div>

      </div>
    )
  }
}

Main.propTypes = {
  books:propTypes.array.isRequired,
  handleUpdate:propTypes.func.isRequired,
  isLoading:propTypes.bool.isRequired
}
export default Main
