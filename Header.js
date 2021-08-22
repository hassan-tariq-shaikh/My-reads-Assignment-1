import React from 'react'
import './Header.css'
import Searchbar from './MyComponents/Searchbar'
import axios from 'axios'
class Header extends React.Component
{
    
 onSearchSubmit=async term=>
{
    const response=await axios.get("https://reactnd-books-api.udacity.com/books",{
        params:{query:term},
        headers:{
            Authorization:'ltfbsygh'
        }

    });       
};

render(){
return(
    <div style={{backgroundColor:'green',height:80}}> 
    <label className="label" htmlFor="name">
     MyReads
    </label>
    <a className="nav-link" href="#">Search Page</a>
    <Searchbar onSubmit={this.onSearchSubmit}/>
    </div>
    );


}
}
export default Header;