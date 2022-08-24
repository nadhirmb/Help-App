import React from 'react';
import Post from './Post';


import { DivPostsStyled } from './PostsStyles';
import PostsData from './data.json';

const  Posts = (props) => {

   

    return (
      <DivPostsStyled>
        {PostsData.map(item =>(
          <Post last = {props.openContent} 
          name = {props.setOpenContent} 
          imgSrc={item.imgsrc} 
          username={item.username} 
          profilePicture = {item.profilePicture}
          theme = {props.theme} />
        ))}
      
      </DivPostsStyled>
    )
  
}


export default Posts;

