import React, {useState} from "react"
import {connect} from "react-redux"
import {getGifs} from "./../actions"

const GifForm = (props) => {
    //we can use local state management here because it will only be used in this component
    const [searchTerm, setSearchTerm] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        props.getGifs(searchTerm)
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return ( 
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="look for gif"
                    onChange={handleChange}
                />
                <input type="submit" value="submit"/>
            </form>
        </div>
     );
}
 
export default connect(null, {getGifs})(GifForm);