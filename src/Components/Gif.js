import React from "react"

const Gif = (props) => {
    const {gifDataElement} = props
    return ( 
        <div>
            <p>{gifDataElement.title}</p>
            <img src={gifDataElement.images.original.url} alt=""/>
        </div>
     );
}
 
export default Gif;