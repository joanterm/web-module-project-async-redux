import React, {useEffect} from 'react';
import './App.css';
import GifList from "./Components/GifList"
import GifForm from "./Components/GifForm"
import {connect} from "react-redux"
import {getGifs} from "./actions"

function App(props) {
  const {loading, getGifs} = props

  useEffect(() => {
    getGifs("cats")
  }, [])

  return (
    <div className="App">
      Async Redux Project
      <GifForm />
      {loading ? <p>Loading...</p> : <GifList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getGifs})(App)


//https://api.giphy.com/v1/gifs/search?api_key=V6Reh3UlxqoN9oqUpZH7fxSlsOuZvZOl&q=dogs