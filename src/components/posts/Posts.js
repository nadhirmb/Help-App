import React from 'react'
import Post from './Post'

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
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;

