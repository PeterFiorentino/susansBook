import React from 'react';
import { Link } from 'react-router-dom';




class NavBar extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
       
    //     }
    // }

    render() {
        return (
            <div id="navBar">
                <Link to="/" id="navBarName">We Will Never Forget:</Link>
                <p id="stories">The Stories of Children of 9/11 First Responders</p>
                <p id="curated">Curated by Susan M. Fiorentino</p>
                <div id="NavBar-page">
                    <Link to="/purchase" className="navBarLinks">Buy the Book</Link>
                    <Link to="/contributors" className="navBarLinks">Contributors</Link>
                    <Link to="/about" className="navBarLinks">About the Author</Link>
                </div>
            </div>
        )
    }
}

export default NavBar