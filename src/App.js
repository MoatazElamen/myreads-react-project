import React, { Component } from 'react'
import Main from './Main';
import {Route,Switch} from 'react-router-dom';
import SearchPage from './components/SearchPage'
import * as BooksAPI from './BooksAPI'
import Heart from './Heart-beat.gif'
export default class App extends Component {
    state = {
        books:[],
        isLoading:true
    }
    updateUI= async ()=>{
        BooksAPI.getAll()
        .then(data=>{
            this.setState(()=>({
                books:data
            }))
        })
    }

    handleUpdate = async(book,shelf)=>{
        BooksAPI.update(book,shelf).then((data)=>{
            console.log(data)
            this.updateUI()
        })
    }
    componentDidMount(){
        this.updateUI()
        .then(()=>{
            this.setState({isLoading:false})
        })
    }

    render() {

        if(this.state.isLoading){
            return <div className="loading-component"><img src={Heart} alt="loading"/></div>
        }
        return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Main books={this.state.books} handleUpdate={this.handleUpdate}/>
                </Route>
                <Route exact path="/search">
                    <SearchPage  loadTrigger={this.loadTrigger} handleUpdate={this.handleUpdate}/>
                </Route>
            </Switch>
            </div>
        )
    }
}
