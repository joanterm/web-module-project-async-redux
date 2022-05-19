import axios from "axios"
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const getGifs = (searchTerm) => {
    return(dispatch => {
    dispatch({
        type: FETCH_START
    })
    //or dispatch(fetchStart)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=V6Reh3UlxqoN9oqUpZH7fxSlsOuZvZOl&q=${searchTerm}`)
    .then((response) => {
      dispatch({
          type: FETCH_SUCCESS,
          payload: response.data.data
      })  
      //or dispatch(fetchSuccess(response.data.data))   
    })
    .catch((error) => {
      console.log(error);     
    })
    })
}

export const fetchStart = () => {
    return({
        type: FETCH_START
    })
}

export const fetchSuccess = (gifs) => {
    return({
        type: FETCH_SUCCESS,
        payload: gifs
    })
}

