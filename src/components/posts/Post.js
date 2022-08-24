import React from 'react';
import PostContent from './postContent/PostContent';
import { ButtonDonate, ButtonUp,DivPost,DivHead,DivFooter } from './PostStyle';
//import logo from './logo.png';


const imgS = {
    width:'40px',
    margin:'10px',
    borderRadius: '50%',
  }

  const imgP = {
    width:'500px',
  }

 const Post = (props) => {


      return(
        <DivPost>
          <DivHead>
            <img src={props.profilePicture} alt="Profile " style = {imgS}/>
            <h5 > {props.username} </h5>
          </DivHead>
          <div>
          <img src={props.imgSrc} alt="Logo"  style = {imgP}/>
          </div>
          
          
          <DivFooter>
    
            <ButtonUp  > Up </ButtonUp>


            <ButtonDonate onClick={() => props.name(true)}>Donate</ButtonDonate>
            <PostContent contentTrigger = {props.last} setContentTrigger={props.name} />
    
          </DivFooter>
        </DivPost>
      )
    }
  
  


export default Post