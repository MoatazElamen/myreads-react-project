import React, { Component } from 'react';
import Main from './Main';
import {Route,Switch} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';

export default class App extends Component {
    state = {
        books:[],
        isLoading:true
    }
    updateUI = async ()=>{
        await BooksAPI.getAll()
        .then(data=>{
            this.setState(()=>({
                books:data
            }))
        })
        .then(()=>{
            this.setState({isLoading:false})
        })
    }

    handleUpdate = async(book,shelf)=>{
        BooksAPI.update(book,shelf).then((data)=>{
            
            this.updateUI()
        })
    }
    componentDidMount(){
        this.updateUI()
    }

    render() {
        return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Main books={this.state.books} isLoading={this.state.isLoading} handleUpdate={this.handleUpdate}/>
                </Route>
                <Route exact path="/search">
                    <SearchPage  books={this.state.books} handleUpdate={this.handleUpdate}/>
                </Route>
            </Switch>
            </div>
        )
    }
}
