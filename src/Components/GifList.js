import React from "react"
import Gif from "./Gif"
import {connect} from "react-redux"

const GifLists = (props) => {
    const {gifData} = props
    return ( 
        <div>
            {gifData.map((gifDataElement) => {
                return <Gif gifDataElement={gifDataElement}/>
            })}
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
      gifData: state.gifData
    }
  }
  
  export default connect(mapStateToProps)(GifLists);