import React, { Component } from 'react'
import Book from './Book'
export default class Bookshelf extends Component {

    render() {
        return (
            <div>
                                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map((book)=>(
                                <Book key={book.id} handleUpdate={this.props.handleUpdate} data={book}/>
                            ))
                        }
                    </ol>
                  </div>
                </div>
            </div>
        )
    }
}
