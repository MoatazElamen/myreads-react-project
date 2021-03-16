import React, { Component } from 'react'
import Image from '../images.png'
export default class Book extends Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error)
      }
    componentDidMount(){
        
    }
    handleSelection= (value)=>{
        console.log(this.props.data.id)
        this.props.handleUpdate(this.props.data,value);

    }
    render() {
        const {title,authors,imageLinks,previewLink} = this.props.data
        const thumbnail = imageLinks?imageLinks["thumbnail"]:"https://yt3.ggpht.com/ytc/AAUvwngtFM3tVG3FKXZTLjbwia-bOZx7E4MNrphrgZ2asQ=s900-c-k-c0x00ffffff-no-rj" 
        console.log(Image)
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue="move" onChange={(e)=>{
                            this.handleSelection(e.target.value)
                        }}>
                            
                            <option value="move"  disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    
                </div>
                <a href={previewLink} target="_blank" rel="noopener noreferrer"><div className="book-title">{title}</div></a>
                <div className="book-authors">  {authors && authors.toString()}</div>
            </div>
        )
    }
}
