import React from 'react';
import PostContent from './postContent/PostContent';
import { ButtonDonate, ButtonUp } from './PostStyle';
//import logo from './logo.png';

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
    margin:'10px',
    borderRadius: '50%',
  }

  const imgP = {
    width:'500px',
  }

  const postFooter ={
    
    margin: '15px 60px',
    display :'flex',
    justifyContent: 'space-between',
  }
  
 const Post = (props) => {


      return(
        <div style = {PostStyle}>
          <div style ={HeadStyle}>
            <img src={props.profilePicture} alt="Profile " style={imgS} />
            <h5 > {props.username} </h5>
          </div>
          <div>
          <img src={props.imgSrc} alt="Logo" style={imgP} />
          </div>
          
          
          <div style={postFooter}>
    
            <ButtonUp  > Up </ButtonUp>


            <ButtonDonate onClick={() => props.name(true)}>Donate</ButtonDonate>
            <PostContent contentTrigger = {props.last} setContentTrigger={props.name} />
    
          </div>
        </div>
      )
    }
  
  


export default Post