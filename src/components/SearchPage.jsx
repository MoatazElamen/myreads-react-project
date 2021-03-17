import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Heart from '../Heart-beat.gif'
import Book from './Book'
export default class SearchPage extends Component {
    state = {
     query:"",
     books:[],
     fetcing:false,
     error:""
     
    }
    handleSearch= async(query)=>{
        if(query !== ""){
            this.setState({fetcing:true})
            BooksAPI.search(query).then((data)=>{
                if(data && !data.hasOwnProperty('error')){
                    this.setState({books:[],error:null})
                    this.setState({books:data})
                }
                else if(this.state.query === ""){
                    this.setState({books:[],error:null})
                
                }else{
                    
                    this.setState({error:"Invalid Query !",
                                   books:[]})
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
                                    <Book key={book.id} 
                                        ownedbook={this.props.books.filter(owned=>owned.id===book.id)[0]}
                                        handleUpdate={this.props.handleUpdate} data={book} />
                                ))}
                            </ol>
                            </div>
                            {this.state.error && <div className="error">{this.state.error} </div>}
                        </div>
                    )
                }


              </div>
            )

            

        
    }
}
