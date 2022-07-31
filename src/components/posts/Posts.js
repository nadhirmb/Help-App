import React, { Component } from 'react';
import Post from './Post';
import nadhir from './nadhir.jpg';

const postLists ={
  paddingTop :'10px',
  width: '700px',
  display: 'flex',
  flexWarp: 'wrap',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent: 'center',
}
const Posts = () => {

  return(
    <div style ={postLists}>
      <Post imgsrc={nadhir} username="nadhir mazari boufares"/>
      <Post imgsrc={nadhir} username="nadhir mazari boufares"/>
      <Post imgsrc={nadhir} username="nadhir mazari boufares"/>
      <Post imgsrc={nadhir} username="nadhir mazari boufares"/>
    </div>
  );
}

export default Posts;

