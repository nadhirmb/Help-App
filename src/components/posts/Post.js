import React, { Component } from 'react';
import logo from './logo.png';
import nadhir from './nadhir.jpg';

const PostStyle = {
  backgroundColor: '#fff',
  'border-radius': '25px',
  width : '500px',
  margin: '10px',
  display:'flex',
  'flex-direction': 'column',
}


const HeadStyle = {
  
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',

  height: '60px',
}

const imgS = {
    width:'40px',
    margin:'10px'
  
  }

  const imgP = {
    width:'500px',
  }

  const postFooter ={
    
    margin: '15px 60px',
    display :'flex',
    justifyContent: 'space-between',
  }
  
  class Post extends Component {

    constructor(props) {
      super(props)
    }
    render() {
      return(
        <div style = {PostStyle}>
          <div style ={HeadStyle}>
            <img src={logo} alt="Logo" style={imgS} />
            <h5 > {this.props.username}</h5>
          </div>
          <div>
          <img src={this.props.imgsrc} alt="Logo" style={imgP} />
          </div>
          
          
          <div style={postFooter}>
    
            <button style={{ 
              backgroundColor: '#00e5',
               border: 'none',
               color: 'white',
              padding: '10px 20px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '12px',}} >up / down</button>
            <button style={{ 
              backgroundColor: '#4CAF50',
               border: 'none',
               color: 'white',
              padding: '10px 20px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '12px',}} 
            >Donate</button>
    
          </div>
        </div>
      )
    }
  }
  


export default Post