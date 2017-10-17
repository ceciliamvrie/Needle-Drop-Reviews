import React, { Component } from 'react'
import './app.css'
import Board from '../ReviewBoard/index.jsx'
import Data from '../models/data'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }
  async componentDidMount() {
    this.props.albums.forEach(async (a) => {
      const image = (await axios(`/api/spotify/album-cover?artist=${encodeURIComponent(a[0])}&album=${encodeURIComponent(a[1])}`)).data
      console.log('image', image)
    })
  }
  render() {
    return (
      <div>
        <h1 style={{'position': 'fixed'}}>Dropped Reviews</h1>
        <div style={{'position': 'absolute', 'top': '0'}}>
         <Board/>
        </div>
      </div>
    )
  }
}

export default App
