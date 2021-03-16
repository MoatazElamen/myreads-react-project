import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
export default class Home extends Component {
    state = {
        books:[],
        Currently:[],
        wanted:[],
        read:[]
    }
    
    render() {
        const {Currently,wanted,read} = this.state
        return (
            <div>
                <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf category="Currently Reading" books={Currently} />
                    <Bookshelf category="Want to Read" books={wanted} />
                    <Bookshelf category="Read" books={wanted} />
                </div>

                </div>
            </div>
        )
    }
}
