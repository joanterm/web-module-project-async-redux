import React, {useState} from 'react';
import './App.css';
import GifList from "./Components/GifList"
import GifForm from "./Components/GifForm"
import {connect} from "react-redux"

function App(props) {
  const {loading} = props

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

export default connect(mapStateToProps)(App)