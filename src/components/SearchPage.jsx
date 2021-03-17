import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Heart from '../Heart-beat.gif'
import Book from './Book'
export default class SearchPage extends Component {
    state = {
     query:"",
     books:[],
     fetcing:false
     
    }
    handleSearch= async(query)=>{
        if(query !== ""){
            this.setState({fetcing:true})
            BooksAPI.search(query).then((data)=>{
                if(data){
                    this.setState({books:[]})
                    this.setState({books:data})
                    console.log(data)
                }else{
                    this.setState({error:"Books not found"})
                }

            })
            .then(()=>{
                this.setState(()=>({
                    fetcing:false
                }))
            })
        }

    }
    handleChange=(e)=>{
        this.setState({query:e})
        this.handleSearch(e)
    }


    render() {
   
            return (
                <div className="search-books">
                {
                    this.state.fetcing?(
                        <div className="">
                            <div className="search-books-bar">
                                <Link to="/"><button className="close-search">Close</button></Link>
                                <div className="search-books-input-wrapper">
            
                                    <input type="text" value={this.state.query} onChange={(e)=>{
                                        this.handleChange(e.target.value)
                                    }}  placeholder="Search by title or author"/>
                
                                </div>
                            </div>
                            <div className="loading-component">
                                <h3>Fetching Books</h3>
                                <img src={Heart} alt="loading"/>
                            </div>
                        </div>

                    ):
                    (
                        <div>
                            <div className="search-books-bar">
                                <Link to="/"><button className="close-search">Close</button></Link>
                                <div className="search-books-input-wrapper">
            
                                    <input type="text" value={this.state.query} onChange={(e)=>{
                                        this.handleChange(e.target.value)
                                    }}  placeholder="Search by title or author"/>
                
                                </div>
                            </div>
                            <div className="search-books-results">
                                <ol className="books-grid">
                                {this.state.query !== '' && this.state.books.map((book)=>(
                                    <Book key={book.id} handleUpdate={this.props.handleUpdate} data={book} />
                                ))}
                            </ol>
                            </div>

                        </div>
                    )
                }


              </div>
            )

            

        
    }
}
