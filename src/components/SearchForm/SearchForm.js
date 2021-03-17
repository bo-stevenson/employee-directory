import React from "react";


function SearchForm(props) {
    return(
        
            <nav className= "navbar navbar-secondary bg-secondary">
                <span className="navbar-brand mb-0 h1" id="heading"> Employee Directory</span>
                <form className= "form-inline">
                    <input
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search Occupation" 
                    aria-label="Search"
                    name="occupation"
                    value={props.occupation}
                    onChange={props.handleInputChange}>
                    
                    </input>
                </form>
            </nav>
        
    )
}

export default SearchForm;